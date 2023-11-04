import {
  Button,
  Container,
  ContentBlock,
  Icon,
  Input,
  StepItem,
  Stepper,
  Text,
} from "@jds/core";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/HealthFlow/PreQuote/FamilyMembers.module.scss";
import Image from "next/image";
import NoOfChildren from "./NoOfChildren";
import AgeOfFamily from "./AgeOfFamily";
import HealthCondition from "./HealthCondition";
import { useRouter } from "next/router";
const FamilyMembers = (props) => {
  const { bottomSheet, setBottomSheet, setView, setIsHealth } = props;
  const members = [
    { name: "Self" },
    { name: "Spouse" },
    { name: "Son" },
    { name: "Daughter" },
    { name: "Father" },
    { name: "Mother" },
  ];
  // const [bottomSheet, setBottomSheet] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [childrenBrackets,setChildrenBrackets]=useState(false);

  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues((prevSelectedValues) =>
        prevSelectedValues.filter((item) => item !== value)
      );
      setBottomSheet(false);
    } else {
      setSelectedValues((prevSelectedValues) => [...prevSelectedValues, value]);

      if (value === "Son" || value === "Daughter") {
        setText(value);
        setBottomSheet(true);
      }
    }
  };

  // useEffect(() => {
  //   console.log(selectedValues);
  //   if (selectedValues.includes("Son") || selectedValues.includes("Daughter")) {
  //     setClose(true);
  //   } else {
  //     setClose(false);
  //   }
  // }, [selectedValues]);

  const [firstStep, setFirstStep] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [thirdStep, setThirdStep] = useState(false);
  const [text, setText] = useState("sons");
  const [childrenCount, setChildrenCount] = useState([
    { son: 0 },
    { daughter: 0 },
  ]);
  console.log(childrenCount[0].son, "sonCount");
  console.log(childrenCount[1].daughter, "daughterCount");
  const router = useRouter();
  return (
    <Container className={styles.modal}>
      {!firstStep && (
        <>
          <Container className={styles.topNav}>
            <Icon
              ic={"IcChevronLeft"}
              style={{ color: "var(--primary-color-50)"}}
              size="l"
              onClick={() => {
                setView(false);
                setIsHealth(false);
              }}
            />
            <Text appearance="body-s-bold">Family Members</Text>
          </Container>

          {/* <Stepper
    ref={{
      current: '[Circular]'
    }}
    
    itemsType="numbered"
    layout="3-col-narrow-left-right"
    onActiveChange={function noRefCheck(){}}
    onComplete={function noRefCheck(){}}
    onStepDataChange={function noRefCheck(){}}
    orientation="horizontal"
  >
    <StepItem 
    //   icon={<IcAddCircle_o />}
     
    >
      <ContentBlock>
       <Text></Text>
      </ContentBlock>
    </StepItem>
    <StepItem
    //   icon={<IcAddCircle_o />}
      
    >
      <ContentBlock
      
      >
     
      </ContentBlock>
    </StepItem>
    <StepItem
      
      
    >
      <ContentBlock
        
      />
    </StepItem>
  </Stepper> */}
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/HealthFlow/Stepper.svg"
              alt="stepper"
              width={100}
              height={50}
              style={{ width: "20rem", marginTop: "2rem" }}
            />
          </Container>

          <Container className={styles.firstStep}>
            <Text appearance="heading-xs">
              Select the family members you want to insure
            </Text>
            <Container className={styles.options}>
              {members.map((item, index) => (
                <Container className={styles.checkboxContainer} key={index}>
                  <Input
                    type="checkbox"
                    size="small"
                    value={item.name}
                    checked={selectedValues.includes(item.name)}
                    onChange={(e) => {
                      handleCheckboxChange(item.name);
                      // console.log(selectedValues);
                    }}
                  />
                  <Text
                    appearance="body-xs"
                    style={{ paddingBottom: "0.25rem" }}
                  >
                    {item.name} {childrenBrackets && (item.name ==="Son" ? `(${childrenCount[0].son})`  : item.name==="Daughter" && `(${childrenCount[1].daughter})`)}
                  </Text>
                  <></>
                </Container>
              ))}
            </Container>
          </Container>

          <Container className={styles.bottomSection}>
            <Button
              title="Continue"
              className={styles.btn}
              disabled={selectedValues.length === 0}
              onClick={() => {
                setSecondStep(true);
                setFirstStep(true);
              }}
            />
            {bottomSheet && (
              <Container displayOn="mobile">
                {" "}
                <NoOfChildren
                  setBottomSheet={setBottomSheet}
                  bottomSheet={bottomSheet}
                  setChildrenCount={setChildrenCount}
                  childrenCount={childrenCount}
                  text={text}
                  setChildrenBrackets={setChildrenBrackets}
                />
              </Container>
            )}
          </Container>
        </>
      )}

      {secondStep && (
        <AgeOfFamily
          selectedValues={selectedValues}
          setSecondStep={setSecondStep}
          secondStep={secondStep}
          thirdStep={thirdStep}
          setThirdStep={setThirdStep}
          setFirstStep={setFirstStep}
        />
      )}
      {thirdStep && (
        <HealthCondition
          setSecondStep={setSecondStep}
          setThirdStep={setThirdStep}
        />
      )}
    </Container>
  );
};

export default FamilyMembers;
