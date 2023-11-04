import React from "react";
import styles from "@/styles/AboutUs/Careers.module.scss";
import { Button, Container, Image, Text } from "@jds/core";
import { IcArrowNext } from "@jds/core-icons";
const Careers = () => {
  return (
    <>
      <Container className={styles.careersCardBackground}>
        <Text appearance="heading-xs" className={styles.careersHeading}>Careers</Text>
        <Container className={styles.careersCard}>
          <Container className={styles.leftContent}>
            <Text className={styles.title}>Careers @ Jio</Text>
            <Text appearance="heading-s" className={styles.subTitle}>
              Work with us
            </Text>
            <Text appearance="body-s" className={styles.description}>
              Join us in reshaping the insurance landscape and making a
              difference in people&apos;s lives
            </Text>
            <Button
              icon={<IcArrowNext />}
              size="small"
              title="View Openings"
              className={styles.viewOpeningsBtn}
            />
          </Container>
          <Container className={styles.rightContent}>
            <Image
              alt="person"
              src="/images/Home/careersImg.svg"
              className={styles.personImg}
              // aspectRatio="4:3"
            ></Image>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Careers;
