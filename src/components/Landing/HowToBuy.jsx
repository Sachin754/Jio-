import { Container, Icon, Image, Text } from "@jds/core";
import React from "react";
import styles from "../../styles/Landing/HowToBuy.module.scss";

const HowToBuy = () => {
  const features = [
    {
      icon: "/images/Landing/form.svg",
      title: "Fill in your details",
      description:
        "Just fill in your details and get insurance policy premium quotes from top insurers in a click",
    },
    {
        icon:"/images/Landing/compare.svg",
        title:"Compare quotes, select insurance",
        description:"Select from available quotes that suits your requirements and budget"
    },
    {
        icon:"/images/Landing/payment.svg",
        title:"Fill in proposal & make the payment",
        description:"Complete the fields in the proposal form and continue with the payments"
    },
    {
        icon:"/images/Landing/sofa.svg",
        title:"Sit back & relax",
        description:"Relax as your policy will reach right away in your inbox!"
    }
  ];
  return (
    <Container className={styles.howToBuySection}>
      <Text appearance="heading-xs" className={styles.title}>How to buy Insurance with us?</Text>
      <Container className={styles.points}>
        {features.map((item, index) => 
          <Container key={index} className={styles.feature}>
            <Container className={styles.featureImg}>
                  <Image src={item.icon} alt="feature img" aspectRatio="round" />
                </Container>
            <Container className={styles.featureText}>
              <Text appearance="body-m-bold" className={styles.featureTitle}>
                {item.title}
              </Text>
              <Text appearance="body-xs" className={styles.featureDescription}>
                {item.description}
              </Text>
            </Container>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default HowToBuy;
