import React from "react";
import styles from "@/styles/AboutUs/AboutUs.module.scss";
import { Container, Text } from "@jds/core";
import Image from "next/image";
import FutureComfort from "@/components/AboutUs/FutureComfort";
import JioAdvantages from "@/components/Home/JioAdvantages";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/AboutUs/Careers";
import Stratergy from "@/components/AboutUs/Stratergy";
import LifeAtJio from "@/components/AboutUs/LifeAtJio";

const AboutUs = () => {
  return (
    <>
      <Container className={styles.aboutUsContainer}>
        <Container className={styles.headingSection}>
          <Text appearance="heading-s" className={styles.title}>
            About us
          </Text>
          <Text appearance="heading-s" className={styles.subTitle}>
            Reimagining the insurance buying experience
          </Text>
        </Container>
        <Container className={styles.imageContainer} displayOn="mobile">
        <Image src="/images/AboutUs/imageLines.svg" alt="imageLines" width={22} height={22}/>
        </Container>
        <FutureComfort />
        <Stratergy />
        <JioAdvantages />
        <LifeAtJio />
        <Testimonials />
        <Careers />
        <Container></Container>
      </Container>
    </>
  );
};

export default AboutUs;
