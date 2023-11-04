import React, { useState } from "react";
import { Container, Text, Image, Divider, BottomSheet } from "@jds/core";
import styles from "@/styles/BikeFlow/Proposal/BottomSheets.module.scss";
import { useSelector } from "react-redux";

const InsuranceInfoBottomSheet = () => {
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
  const insurancePlanInfo = [
    {
      field: "Cover Amount:",
      value: `₹ ${formData?.selectedPlan?.CoverAmount || 0} `,
    },
    {
      field: "Plan type:",
      value: `${formData?.selectedPlan?.InsuranceType || 0}`,
    },
    {
      field: "No claim bonus (NCB)",
      value: `${formData?.NCBValue}`,
    },
    {
      field: "Premium Breakup (1 year)",
      value: `${formData?.selectedPlan?.BasicTPPremium + formData?.selectedPlan?.NewNcbDiscountAmount || 0}`
    },
    {
      field: "GST Tax (@18%)",
      value: `₹ ${formData?.selectedPlan?.TaxAmount || 0}`,
    },
  ];


  return (
    <>

      <Container className={styles.insuranceInfoCard}>
        <Container className={styles.content}>
          <Container className={styles.insuranceInfoFinalPremium}>
            <Container className={styles.insuranceInfo}>
              {insurancePlanInfo.map((item, index) => (
                <>
                  <Container
                    className={styles.insuranceInfoFieldValue}
                    key={index}
                  >
                    <Text appearance="body-s">{item.field}</Text>
                    <Text appearance="body-s-bold">{item.value}</Text>
                  </Container>
                  {index === 2 && <Divider />}
                </>
              ))}
            </Container>
            <Divider />
            <Container className={styles.finalPremiumContainer}>
              <Text appearance="body-m-bold">Final Premium</Text>
              <Text appearance="heading-xs" className={styles.amount}>₹ {(formData?.selectedPlan?.BasicTPPremium + formData?.selectedPlan?.NewNcbDiscountAmount + formData?.selectedPlan?.TaxAmount) || 0}</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default InsuranceInfoBottomSheet;
