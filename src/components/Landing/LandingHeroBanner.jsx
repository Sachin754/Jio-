import React, { useState } from "react";
import styles from "@/styles/LandingHeroBanner.module.scss";
import { BreadcrumbItem, Breadcrumbs, Container, Text } from "@jds/core";
import Image from "next/image";
import { IcChevronRight, IcSuccessColored } from "@jds/core-icons";

const LandingHeroBanner = (props) => {
  const { heroData, insuranceType } = props;
  const planCoveredFeatures = [
    {
      feature: heroData[0].feature[0],
    },
    {
      feature: heroData[0].feature[1],
    },
    {
      feature: heroData[0].feature[2],
    },
  ];
  return (
    <>
      <Container className={styles.heroSection}>
        <Container className={styles.breadcrumbsContainer}>
          <Breadcrumbs
            currentPage="Insurances"
            style={{ width: "15rem", minWidth: "10rem" }}
          >
            <BreadcrumbItem
              href="/"
              title="Home"
              style={{ width: "max-content", color: "var(--primary-color-50)"}}
            />
          </Breadcrumbs>
        </Container>
        <Container className={styles.heroSubSection}>
          <Text appearance="heading-xxs" className={styles.maintitle} >
            {heroData[0].title}
          </Text>
          <Container className={styles.bannerContainer}>
            <Container className={styles.leftContent}>
              <Image
                src={heroData[0].img}
                alt="bannerImg"
                className={styles.bannerImg}
                width={64}
                height={64}
              />
            </Container>

            <Container className={styles.rightContent}>
              {insuranceType === "Health" ? (
                <Text className={styles.title}>
                  Trusted by{" "}
                  <Text as="span" className={styles.titleSubText}>
                    41.7 lakh
                  </Text>
                  <Text as="span" className={styles.plusStyling}>
                    +
                  </Text>{" "}
                  Indian families!
                </Text>
              ) : insuranceType === "Car" ? (
                <>
                  <Text className={styles.title}>
                    Comprehensive Plans For 360° Protection
                  </Text>
                </>
              ) : (
                <>
                  <Text className={styles.title}>
                    <Text as="span" className={styles.titleSubText}>
                      Insure{" "}
                    </Text>
                    your bike, starting {""}
                    <Text as="span" className={styles.titleSubText}>
                      at just ₹555*
                    </Text>
                  </Text>
                </>
              )}
              <Container className={styles.features}>
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
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default LandingHeroBanner;
