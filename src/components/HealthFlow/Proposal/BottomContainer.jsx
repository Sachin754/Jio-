import React, { useState } from "react";
import { BottomSheet, Button, Container, Image, Text } from "@jds/core";
import { IcChevronDown, IcChevronRight, IcChevronUp } from "@jds/core-icons";
import styles from "@/styles/HealthFlow/Proposal/BottomContainer.module.scss"
import InsuranceInfo from "@/components/BikeFlow/Proposal/InsuranceInfo";

const BottomContainer = () => {
  return (
    <>
      <Container className={styles.bottomContainer}>
        <Container className={styles.insurancePlanNameImageIcon}>
         <Container className={styles. insurancePlan}>
          <Image
            src="/images/LandingPage/TATA_Insurance_Plan.svg"
            alt="Insurance_Plan_Image"
            className={styles.insurancePlanImage}
            width={64}
            height={64}
            aspectRatio="16:9"
          />
          <Container className={styles.planImageName}>
            <Text  appearance="body-xs-bold">
            Digit Insurance
            </Text>
            <Text className={styles.insuranceCover} appearance="body-xxs"  style={{color:"var(--secondary-color-80)"}}>
              
            </Text>
          </Container>
          </Container>
          <IcChevronUp size="small" style={{width:"2rem" ,marginLeft:"auto"}} />
        </Container>
        <Button
          size="small"
          title="Next"
          className={styles.continueNextBtn}
        />
      </Container>
      <BottomSheet
        close={!insuranceInfoBS}
        kind="overlay"
        onClickPrimary={function noRefCheck() {}}
        onClose={() => setInsuranceInfoBS(false)}
        // onRequestClose={() => {
        //   insuranceInfoBS;
        // }}
        primaryCTA={{
          title: "Review & Payment",
        }}
      >
      <InsuranceInfo/>
      </BottomSheet>
    </>
  );
};

export default BottomContainer;
