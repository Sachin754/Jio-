import React from "react";
import { Container, Text, Image, Button } from "@jds/core";
import styles from "@/styles/TestimonialCard.module.scss"

const TestimonialCard = (props) => {
  const {item}=props;
  return (
    <>
      <Container className={styles.card}>
        <Container className={styles.testimonialImg}>
        <Image  src="/images/testimonialIcon.svg" alt="testimonialIcon" />
        </Container>
        <Text appearance="body-xs" className={styles.review}>
          {item?.review}
        </Text>
        <Text className={styles.customerName}>{item?.customerName}</Text>
      </Container>
    </>
  );
};

export default TestimonialCard;
