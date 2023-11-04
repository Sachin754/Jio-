import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/BikeFlow/Proposal/Sample.module.scss";
import {
  IcCarFront,
  IcClerk,
  IcContacts,
  IcDocument,
} from "@jds/extended-icons";
import { Button, Container, StepItem, Stepper, Text } from "@jds/core";
import ContactDetails from "@/components/BikeFlow/Proposal/ContactDetails";
import PersonalDetails from "@/components/BikeFlow/Proposal/PersonalDetails";
import NomineeDetails from "@/components/HealthFlow/Proposal/NomineeDetails";
import InsurancePlanBottomContainer from "@/components/BikeFlow/Proposal/InsurancePlanBottomContainer";
import TwoWheelerDetails from "@/components/BikeFlow/Proposal/TwoWheelerDetails";
import PreviousPolicyDetails from "@/components/BikeFlow/Proposal/PreviousPolicyDetails";
import ContactDetailHelp from "@/components/BikeFlow/Proposal/ContactDetailHelp";
import insurancePlan from "@/components/BikeFlow/Proposal/InsurancePlanBottomContainer";
import ProposalReviewDetails from "@/components/BikeFlow/Proposal/ProposalReviewDetails";

const Proposal = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [complete, setComplete] = useState(false);
  const [indexZero, setIndexZero] = useState(false);

  const ref = useRef({
    next: () => setActiveStep(activeStep + 1),
    prev: () => setActiveStep(activeStep - 1),
  });

  useEffect(() => {
    if (activeStep == 1 && !indexZero) {
      ref.current = ref.current.prev();
      setIndexZero(true);
    }
  }, [activeStep, indexZero]);

  function handleStepperComplete() {
    setComplete(true);
  }

  const type = "bike";
  const [inspectionBS, setInspectionBS] = useState(false);
  const [reviewDetails, setReviewDetails] = useState(false);
  return (
    <>
      {!reviewDetails && (
        <Container className={styles.proposalFormContainer}>
          <Container className={styles.stepperContactContainer}>
            <Container>
              <Container displayOn="desktop" className={styles.headingSection}>
                <Text appearance="heading-xs">Proposal form</Text>
                <Text appearance="body-xxs-bold" className={styles.orderId}>
                  Order ID: MH28XK08H92
                </Text>
              </Container>
              <Container className={styles.stepperContainer}>
                <Stepper
                  size="small"
                  orientation="horizontal"
                  itemsType="icon"
                  layout="full-width"
                  onActiveChange={(activeIndex) => {
                    setActiveStep(activeIndex);
                  }}
                  ref={ref}
                  onComplete={handleStepperComplete}
                  onStepDataChange={function noRefCheck() {}}
                >
                  <StepItem
                    icon={<IcContacts />}
                    label="Contact Details"
                    complete={false}
                  >
                    <Container className={styles.stepItemContainer}>
                      <Container
                        style={{
                          backgroundColor: "var(--primary-color-20)",
                          padding: "0.5rem 1rem",
                        }}
                        displayOn="desktop"
                      >
                        <Text appearance="body-s-bold">
                          Petrol Hero Passion Pro BS5 CAST (100 CC)
                        </Text>
                      </Container>
                      <ContactDetails />
                    </Container>
                  </StepItem>
                  <StepItem
                    icon={<IcClerk />}
                    label="Personal Details"
                    complete={false}
                  >
                    <Container className={styles.stepItemContainer}>
                      <Container
                        style={{
                          backgroundColor: "var(--primary-color-20)",
                          padding: "0.5rem 1rem",
                        }}
                        displayOn="desktop"
                      >
                        <Text appearance="body-s-bold">
                          Petrol Hero Passion Pro BS5 CAST (100 CC)
                        </Text>
                      </Container>
                      <PersonalDetails />
                      <NomineeDetails type={type} />
                    </Container>
                  </StepItem>
                  <StepItem
                    icon={<IcCarFront />}
                    label="Two-Wheeler Details"
                    complete={false}
                  >
                    <Container>
                      <Container
                        style={{
                          backgroundColor: "var(--primary-color-20)",
                          padding: "0.5rem 1rem",
                        }}
                        displayOn="desktop"
                      >
                        <Text appearance="body-s-bold">
                          Petrol Hero Passion Pro BS5 CAST (100 CC)
                        </Text>
                      </Container>
                      <TwoWheelerDetails />
                    </Container>
                  </StepItem>
                  <StepItem
                    icon={<IcDocument />}
                    label="Previous Policy"
                    complete={false}
                  >
                    <Container>
                      <Container
                        style={{
                          backgroundColor: "var(--primary-color-20)",
                          padding: "0.5rem 1rem",
                        }}
                        displayOn="desktop"
                      >
                        <Text appearance="body-s-bold">
                          Petrol Hero Passion Pro BS5 CAST (100 CC)
                        </Text>
                      </Container>
                      <PreviousPolicyDetails
                        inspectionBS={inspectionBS}
                        setInspectionBS={setInspectionBS}
                      />
                    </Container>
                  </StepItem>
                </Stepper>
              </Container>
            </Container>
            <Container displayOn="desktop" className={styles.rightContainer}>
              <ContactDetailHelp />
              <Container className={styles.insurancePlanContainer}>
                <InsurancePlanBottomContainer
                  ref={ref}
                  setReviewDetails={setReviewDetails}
                  activeStep={activeStep}
                />
              </Container>
            </Container>
          </Container>
          <Container
            displayOn="tablet"
            className={styles.insurancePlanBottomContainer}
          >
            <InsurancePlanBottomContainer
              ref={ref}
              activeStep={activeStep}
              inspectionBS={inspectionBS}
              setInspectionBS={setInspectionBS}
              setReviewDetails={setReviewDetails}
            />
          </Container>
        </Container>
      )}
      {reviewDetails && (
        <>
          <Container displayOn="tablet">
            <ProposalReviewDetails />
            <InsurancePlanBottomContainer/>
          </Container>
          <Container displayOn='desktop' className={
            styles.desktopReviewDetails
          }>
            <ProposalReviewDetails />
            <Container className={styles.rightContainer}>
              <ContactDetailHelp />
              <InsurancePlanBottomContainer />
            </Container>

           
          </Container>
        </>
      )}
    </>
  );
};

export default Proposal;
