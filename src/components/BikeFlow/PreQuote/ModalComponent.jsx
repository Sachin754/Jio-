import { Button, Container, Icon, StepItem, Stepper, Text } from "@jds/core";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/BikeFlow/PreQuote/Modal.module.scss";
import RTUDetails from "./RtuDetails";
import BikeDetails from "./BikeDetails";
import AdditionalDetails from "./AdditionalDetails";
import { useRouter } from "next/router";
const ModalComponent = (props) => {
  const {
    setView,
    setIsBike,
    isLoading,
    setIsLoading,
    selectedCity,
    setSelectedCity,
    selectedRtu,
    setSelectedRtu,
    vechileType,
    setIsCar,

  } = props;
  const router = useRouter();
 
  const [activeStep, setActiveStep] = useState(0);
  const [indexZero, setIndexZero] = useState(false);
  const [mobileIndexZero, setMobileIndexZero] = useState(false);

  const ref = useRef({
    next: () => setActiveStep(activeStep + 1),
    prev: () => setActiveStep(activeStep - 1),
  });
  const mref = useRef({
    next: () => setActiveStep(activeStep + 1),
    prev: () => setActiveStep(activeStep - 1),
  });
  useEffect(() => {
    if (activeStep == 1 && !indexZero) {
      ref.current = ref.current.prev();
      setIndexZero(true);
    }
    if (activeStep == 1 && !indexZero) {
      mref.current = mref.current.prev();
      setMobileIndexZero(true);
    }
  }, [activeStep, indexZero, mobileIndexZero]);
  const [complete, setComplete] = useState(false);

  const onStateCodeClick = () => {
    console.log('gdhjhhd')
    ref.current.next();
    mref.current.next()
  };

  return (
    <>
      <Container displayOn="desktop">
        <Container className={styles.modal}>
          <Container className={styles.topContainer}>
            <Icon ic="IcChevronLeft"  onClick={() => {
                if (activeStep == 0) {
                  router.push("/");
                  setView(false);
                  setIsBike(false);
                  setIsCar(false);
                } else {
                  ref.current.prev();
                }
              }}/>
            <Icon
              ic="IcClose"
              style={{cursor:"pointer"}}
              onClick={() => {
                  setView(false);
                  setIsBike(false);
                  setIsCar(false); 
              }}
            />
          </Container>
          <Stepper
            size="small"
            orientation="horizontal"
            //  layout="3-col-narrow-left-right"
            itemsType="numbered"
            ref={ref}
            onActiveChange={(activeIndex) => {
              setActiveStep(activeIndex);
              console.log(
                activeIndex,
                "activeeeeeeeeeeeeeeeeeeeIndexxxxxxxxxxxx"
              );
            }}
          >
            <StepItem label="RTU Details" complete={false}>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <RTUDetails
                  selectedCity={selectedCity}
                  setSelectedCity={setSelectedCity}
                  selectedRtu={selectedRtu}
                  setSelectedRtu={setSelectedRtu}
                  ref={ref}
                  onStateCodeClick={onStateCodeClick}
                  vechileType={vechileType}
                />

                {/* <Button
                  title="Continue"
                  onClick={() => ref.current.next()}
                  kind="secondary"
                ></Button> */}
              </Container>
            </StepItem>
            <StepItem label={`${vechileType} Details`} complete={false}>
              <Container>
                <BikeDetails onStateCodeClick={onStateCodeClick}  vechileType={vechileType}/>
                <Container
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* <Button
                    onClick={() => ref.current.prev()}
                    title="Back"
                  ></Button>
                  <Button
                    title="Next"
                    onClick={() => ref.current.next()}
                  ></Button> */}
                </Container>
              </Container>
            </StepItem>
            <StepItem label="Additional Details" complete={false}>
              <Container>
                <AdditionalDetails onStateCodeClick={onStateCodeClick} vechileType={vechileType}/>
                {/* <Button
                  title="Back"
                  onClick={() => ref.current.prev()}
                ></Button> */}
              </Container>
            </StepItem>
          </Stepper>
        </Container>
      </Container>

      <Container displayOn="tablet">
        <Container
          className={styles.header}
          style={{
            paddingLeft: "1rem",
            display: "flex",
            gap: "0.25rem",
            height: "3.5rem",
            boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
            alignItems: "center",
          }}
        >
          <Icon
            ic="IcChevronLeft"
            onClick={() => {
              if (activeStep == 0) {
                router.push("/");
                setView(false);
                setIsBike(false);
                setIsCar(false);
              } else {
                mref.current.prev();
              }
            }}
          />
          {activeStep === 0 && (
            <Text appearance="body-s-bold">RTU or City Details</Text>
          )}
          {activeStep === 1 && (
          (vechileType==='Bike')?
            <Text appearance="body-s-bold">Two-Wheeler Details</Text>:<Text appearance="body-s-bold">Four-Wheeler Details</Text>
            
          )}
          {activeStep === 2 && (
            <Text appearance="body-s-bold">Additional Details</Text>
          )}
        </Container>
        <Stepper
          orientation="horizontal"
          //  layout="3-col-narrow-left-right"
          itemsType="numbered"
          ref={mref}
          onActiveChange={(activeIndex) => {
            setActiveStep(activeIndex);
            console.log(
              activeIndex,
              "activeeeeeeeeeeeeeeeeeeeIndexxxxxxxxxxxx"
            );
          }}
        >
          <StepItem label="RTU Details" complete={complete}>
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <RTUDetails
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedRtu={selectedRtu}
                setSelectedRtu={setSelectedRtu}
                ref={ref}
                onStateCodeClick={onStateCodeClick}
                vechileType={vechileType}
              />

              {/* <Button
                title="Continue"
                onClick={() => mref.current.next()}
                kind="secondary"
              ></Button> */}
            </Container>
          </StepItem>
          <StepItem label={`${vechileType} Details`} complete={complete}>
            <Container>
              <BikeDetails onStateCodeClick={onStateCodeClick} vechileType={vechileType}/>
              <Container
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                {/* <Button
                  onClick={() => mref.current.prev()}
                  title="Back"
                ></Button>
                <Button
                  title="Next"
                  onClick={() => mref.current.next()}
                ></Button> */}
              </Container>
            </Container>
          </StepItem>
          <StepItem label="Additional Details" complete={complete}>
            <Container>
              <AdditionalDetails vechileType={vechileType}/>
              {/* <Button
                title="Continue"
                onClick={() => (
                  setComplete(true), setIsLoading(true), router.push("/quote")
                )}
                style={{ margin: "3rem 0rem 1rem 0rem" }}
              ></Button> */}
            </Container>
          </StepItem>
        </Stepper>
      </Container>
    </>
  );
};

export default ModalComponent;
