import React from "react";
import styles from "@/styles/Landing/InsurancePolicyPlans.module.scss";
import { Container, Text,Image,Button } from "@jds/core";


const InsurancePolicyPlans = (props) => {
   const {banners}=props;
  return (
    <>
      <Container className={styles.policyPlansContainer}>
        <Container className={styles.headingSection}>
          <Text className={styles.title} appearance="body-xxs-bold">
            search by type
          </Text>
          <Text className={styles.mainHeading} appearance="heading-xxs">
            Find the right health policy coverage by your choice
          </Text>
        </Container>
        <Container className={styles.cardsContainer}>
          {banners.map((item, index) => (
            <Container className={styles.imageContainer} key={index}>
              <Image 
                src={item.banner}
                alt="plan_banner"
                width={22}
                height={22}
                aspectRatio="4:3"
              />
           </Container> 
          ))}
        </Container>
      </Container>
    </>
  );
};

export default InsurancePolicyPlans;
