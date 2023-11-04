import React, { useState } from "react";
import HeadingSection from "@/components/HealthFlow/Proposal/HeadingSection";
import { Container, Text, Image, Button } from "@jds/core";
import styles from "@/styles/BikeFlow/Proposal/BottomSheets.module.scss";
import { IcClose, IcSuccessColored } from "@jds/core-icons";

const InspectionRequired = () => {
  return (
    <>
      <Container className={styles.inspectionCard}>
        <Container className={styles.content}>
          <HeadingSection
            title="Inspection required"
            subTitle="Vehicle inspection is required due to following reasons:"
          />
          <Container className={styles.features}>
            <Container className={styles.feature}>
              <IcSuccessColored className={styles.tickIcon} />
              <Text appearance="body-xs" className={styles.featureText}>
                Current policy has expired
              </Text>
            </Container>
            <Container className={styles.feature}>
              <IcSuccessColored className={styles.tickIcon} />
              <Text appearance="body-xs" className={styles.featureText}>
                Migration from Third Party Liability Policy to Comprehensive
                Policy.
              </Text>
            </Container>
          </Container>
          <Button title="Inspection required" className={styles.btn} />
        </Container>
      </Container>
    </>
  );
};

export default InspectionRequired;
