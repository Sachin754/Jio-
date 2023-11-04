import React from "react";
import styles from "@/styles/InsurancePlan.module.scss";
import { Container, Text, Button } from "@jds/core";
import InsurancePlan from "./InsurancePlan";

const InsurancePlansSection = (props) => {
  const { insuranceType } = props;
  const InsurancePlanData = [
    {
      InsuranceImg: "/images/LandingPage/TATA_Insurance_Plan.svg",
      InsuranceFrom: "Tata AGI Insurance",
      InsuranceBenefitsTitle: "What’s covered?",
      InsuranceBenefit1: "Single Private AC Room",
      InsuranceBenefit2: "Free health checkup",
      InsuranceBenefit3: "Cashless benefits",
      InsuranceCoverAmount: "₹ 5.55 Lac",
      cashLessIcon: "IcBedMedical",
      cashLessTitle: "32 Cashless Hospitals",
      yearAmount: "₹3,120/year",
      monthAmount: "₹ 260/mo",
      isNew: true,
    },
    {
      InsuranceImg: "/images/LandingPage/Hdfc_Insurance_Plan.svg",
      InsuranceFrom: "HDFC EGRO",
      InsuranceBenefitsTitle: "Advantage",
      InsuranceBenefit1: "Self video claims",
      InsuranceBenefit2: "Spot claims upto ₹30,000",
      InsuranceBenefit3: "7 day re-imbursement*",
      InsuranceCoverAmount: "₹ 8.55 Lac",
      cashLessIcon: "IcGarage",
      cashLessTitle: "32 Cashless Garages",
      yearAmount: "₹3,120/year",
      monthAmount: "₹ 400/mo",
      isNew: false,
    },
    {
      InsuranceImg: "/images/LandingPage/Liberty_Insurance_Plan.svg",
      InsuranceFrom: "Liberty Insurance",
      InsuranceBenefitsTitle: "Advantage",
      InsuranceBenefit1: "No inspections required*",
      InsuranceBenefit2: "No paper-work",
      InsuranceBenefit3: "7 day re-imbursement*",
      InsuranceCoverAmount: "₹ 2.55 Lac",
      cashLessIcon: "IcGarage",
      cashLessTitle: "32 Cashless Garages",
      yearAmount: "₹9,120/year",
      monthAmount: "₹ 900/mo",
      isNew: false,
    },
  ];
  return (
    <>
      <Container className={styles.insurancePlanSection}>
        <Container className={styles.headingSection}>
          <Text className={styles.title}>top picks</Text>
          <Text className={styles.mainTitle}>
            Trending {insuranceType} Insurances
          </Text>
        </Container>
        <Container className={styles.plansContainer}>
          {InsurancePlanData.map((item, index) => (
            <Container key={index}>
              <InsurancePlan item={item} />
            </Container>
          ))}
        </Container>
        <Container displayOn="mobile">
          <Button 
            className={styles.morePlans}
            size="small"
            title="See more plans"
          />
        </Container>
      </Container>
    </>
  );
};

export default InsurancePlansSection;
