import React from "react";
import styles from "@/styles/InsurancePlan.module.scss";
import { Container, Text, Divider, Input, Button, Badge } from "@jds/core";
import Image from "next/image";
import { IcChevronRight, IcSuccessColored } from "@jds/core-icons";

const InsurancePlan = (props) => {
  const { item } = props;
  const planCoveredFeatures = [
    {
      feature: item.InsuranceBenefit1,
    },
    {
      feature: item.InsuranceBenefit2,
    },
    {
      feature: item.InsuranceBenefit3,
    },
  ];
  return (
    <>
      <Container className={styles.insurancePlanContainer}>
        <Container className={styles.mainContainer}>
          <Container className={styles.insurancePlanNameImage}>
            <Image
              src={item.InsuranceImg}
              alt="Insurance_Plan_Image"
              className={styles.insurancePlanImage}
              width={64}
              height={64}
            />
            <Text className={styles.insurancePlanName} appearance="body-xs">
              {/* Tata AGI Insurance */}
              {item.InsuranceFrom}
            </Text>
            <Container style={{ marginLeft: "auto" }}>
              {item.isNew && (
                <Badge label="New" className={styles.badge} size="small" />
              )}
            </Container>
          </Container>
          <Container className={styles.titleContainer}>
            <Text className={styles.title}>{item.InsuranceBenefitsTitle}</Text>
            <Divider className={styles.divider} />
            {/* styling based on props for divider */}
            {/* <Badge label="Third party" className={styles.badge} size="small" /> */}
          </Container>
          <Container className={styles.middleContainer}>
            <Container className={styles.leftContainer}>
              <Container className={styles.planCoveredFeaturesContainer}>
                {planCoveredFeatures.map((item, index) => (
                  <Container className={styles.feature} key={index}>
                    {/* <Image
                      src="/images/LandingPage/tickIcon.svg"
                      alt="tickIcon"
                      className={styles.tickIcon}
                      width={64}
                      height={64}
                    /> */}
                    <IcSuccessColored
                      size="small"
                      style={{ width: "0.75rem", color: "#1E7B74" }}
                    />
                    <Text className={styles.featureText}>{item.feature}</Text>
                  </Container>
                ))}
              </Container>
              <Container>
                <Text
                  appearance="body-xs"
                  className={styles.viewAllFeaturesText}
                >
                  View all features
                </Text>
              </Container>
            </Container>
            <Container className={styles.rightContainer}>
              <Container className={styles.planAmountContainer}>
                <Text className={styles.planAmountText} appearance="body-xxs">
                  Cover Amount
                </Text>
                <Text className={styles.amount} appearance="body-s-bold">
                  {item.InsuranceCoverAmount}
                </Text>
              </Container>
              <Container className={styles.cashlessContainer}>
                <Image
                  src="/images/LandingPage/ic_bed_medical.svg"
                  alt="cashLessIcon"
                  className={styles.cashLessIcon}
                  width={64}
                  height={64}
                />
                <Text className={styles.cashLessText}>
                  {" "}
                  {item.cashLessTitle}
                </Text>
              </Container>
            </Container>
          </Container>
        </Container>
        <Divider />
        <Container className={styles.bottomContainer}>
          <Container className={styles.bottomLeftContainer}>
            <Input
              helperText=""
              id="basic-input"
              label="Compare"
              max={100}
              maxLength={250}
              min={0}
              name="testInput"
              step={1}
              type="checkbox"
              className={styles.inputField}
              size="small"
            />
          </Container>
          <Container className={styles.bottomRightContainer}>
            <Text className={styles.yearAmount}>{item.yearAmount}</Text>
            <Button
              title={item.monthAmount}
              style={{ fontSize: "0.6rem" }}
              className={styles.btn}
              size="small"
              icon={<IcChevronRight style={{ color: "white" }} />}
              kind="primary"
            ></Button>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default InsurancePlan;
