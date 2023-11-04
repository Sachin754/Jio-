import React, { useState } from "react";
import styles from "@/styles/BikeFlow/Proposal/ProposalReviewDetails.module.scss";
import { Accordion, AccordionPanel, Container, Image, Text } from "@jds/core";
import HeadingSection from "../KYC/HeadingSection";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import TwoWheelerDetails from "./TwoWheelerDetails";
import PreviousPolicyDetails from "./PreviousPolicyDetails";
import { useSelector } from "react-redux";

const ProposalReviewDetails = () => {
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  const PlanDetails = [
    {
      field: "Cover Value (IDV)",
      value: `₹ ${formData?.selectedPlan?.CoverAmount}`,
    },
    {
      field: "Tenure",
      value: `${formData?.selectedPlan?.Tenure} Yrs`,
    },
    {
      field: "No claim bonus",
      value: `${formData?.NCBValue}`,
    },
  ];
  const [isHideHeading, setHideHeading] = useState(true);

  return (
    <>
      <Container className={styles.proposalReviewDetailsContainer}>
        <Container className={styles.headingSection}>
          <HeadingSection
            title="Review your details"
            subTitle="Almost there! Please review your details
                  before payment"
          />
        </Container>
        <Container className={styles.planDetails}>
          <Container className={styles.planTopDetails}>
            <Container className={styles.planImgContainer}>
              <Image
                src={formData?.selectedPlan?.InsuranceImg}
                alt="policy_from"
                className={styles.planImg}
                aspectRatio="16:9"
              />
            </Container>
            <Container className={styles.planMainInfo}>
              <Text className={styles.planFrom} appearance="body-m-bold">
                {formData?.selectedPlan?.InsuranceFrom}
              </Text>
              <Text className={styles.planType} appearance="body-xxs">
                {formData?.selectedPlan?.InsuranceType}
              </Text>
            </Container>
          </Container>
          <Container className={styles.planBottomDetails}>
            {PlanDetails.map((item, index) => (
              <Container key={index} className={styles.planFieldValue}>
                <Text className={styles.field} appearance="body-xxs">
                  {item.field}
                </Text>
                <Text className={styles.value} appearance="body-s-bold">
                  {item.value}
                </Text>
              </Container>
            ))}
          </Container>
        </Container>
        <Container className={styles.reviewDetailsContainer}>
          <Accordion iconType="plus">
            <AccordionPanel header="Two Wheeler owner Details">
              <ContactDetails isHideHeading={isHideHeading} />
            </AccordionPanel>
          </Accordion>
          <Accordion iconType="plus">
            <AccordionPanel header="Personal Details">
              <PersonalDetails isHideHeading={isHideHeading} />
            </AccordionPanel>
          </Accordion>
          <Accordion iconType="plus">
            <AccordionPanel header="Two Wheeler Details">
              <TwoWheelerDetails isHideHeading={isHideHeading} />
            </AccordionPanel>
          </Accordion>
          <Accordion iconType="plus">
            <AccordionPanel header="Previous Policy Details">
              <PreviousPolicyDetails isHideHeading={isHideHeading} />
            </AccordionPanel>
          </Accordion>
        </Container>
      </Container>
    </>
  );
};

export default ProposalReviewDetails;
