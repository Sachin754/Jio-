import React from "react";
import { Container, Text, Image, Button } from "@jds/core";
import styles from "@/styles/Testimonials.module.scss";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const TestimonialsData = [
    {
      review:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been industry's standard text ever since the 1500s",
      customerName: "Jitisha Kumar",
    },
    {
        review:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been industry's standard text ever since the 1500s",
        customerName: "Jitisha Kumar",
      },
      {
        review:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been industry's standard text ever since the 1500s",
        customerName: "Jitisha Kumar",
      },
      {
        review:
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been industry's standard text ever since the 1500s",
        customerName: "Jitisha Kumar",
      },
  ];
  return (
    <>
      <Container className={styles.testimonialContainer}>
        <Container className={styles.testimonialHeadingSection}>
          <Text className={styles.title}>what our users have to say</Text>
          <Text className={styles.subTitle} appearance="heading-xs">Customer’s Testimonials</Text>
        </Container>
        <Container className={styles.testimonialCards}>
        {TestimonialsData.map((item,index)=>(
        //    <TestimonialCard review={item.review} customerName={item.customerName}/>   
        <TestimonialCard  item={item} key={index}/>
        ))
        }
        </Container>
      </Container>
    </>
  );
};

export default Testimonials;
