import React from "react";
import {
  Accordion,
  AccordionPanel,
  Container,
  Text,
} from "@jds/core";
import styles from '../../styles/AboutUs/Faqs.module.scss'
import { IcAddCircle } from "@jds/core-icons";
import { useState } from "react";

const Faqs = (props) => {
  const { data } = props;


//   const General= [
//     {
//       Question: "Is insurance necessary?",
//       Answer:
//         "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
//     },
//     {
//       Question: "lorem Ipsum is true?",
//       Answer: "lorem Ipsum is true",
//     },
//     {
//       Question: "lorem Ipsum is false?",
//       Answer: "lorem Ipsum is false",
//     },
//     {
//       Question: "lorem Ipsum is not true?",
//       Answer: "lorem Ipsum is not true",
//     },
//   ]
//  const bike =[
//     {
//       Question: "Is insurance necessary for car?",
//       Answer:
//         "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
//     },
//     {
//       Question: "lorem Ipsum is true?",
//       Answer: "lorem Ipsum is true",
//     },
//     {
//       Question: "lorem Ipsum is false?",
//       Answer: "lorem Ipsum is false",
//     },
//     {
//       Question: "lorem Ipsum is not true?",
//       Answer: "lorem Ipsum is not true",
//     },
//   ]
//   const car= [
//     {
//       Question: "Is insurance necessary for car?",
//       Answer:
//         "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
//     },
//     {
//       Question: "lorem Ipsum is true?",
//       Answer: "lorem Ipsum is true",
//     },
//     {
//       Question: "lorem Ipsum is false?",
//       Answer: "lorem Ipsum is false",
//     },
//     {
//       Question: "lorem Ipsum is not true?",
//       Answer: "lorem Ipsum is not true",
//     },
//   ]
//    const health= [
//     {
//       Question: "Is insurance necessary for health?",
//       Answer:
//         "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
//     },
//     {
//       Question: "lorem Ipsum is true?",
//       Answer: "lorem Ipsum is true",
//     },
//     {
//       Question: "lorem Ipsum is false?",
//       Answer: "lorem Ipsum is false",
//     },
//     {
//       Question: "lorem Ipsum is not true?",
//       Answer: "lorem Ipsum is not true",
//     },
//   ]
//   const life= [
//     {
//       Question: "Is insurance necessary for life?",
//       Answer:
//         "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
//     },
//     {
//       Question: "lorem Ipsum is true?",
//       Answer: "lorem Ipsum is true",
//     },
//     {
//       Question: "lorem Ipsum is false?",
//       Answer: "lorem Ipsum is false",
//     },
//     {
//       Question: "lorem Ipsum is not true?",
//       Answer: "lorem Ipsum is not true",
//     },
//   ]
  // const [datas, setDatas]= useState(General);
  // console.log(data,"data");
  // const data = [
  //   {
  //     Question: "Is insurance necessary?",
  //     Answer:
  //       "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
  //   },
  //   {
  //     Question: "lorem Ipsum is true?",
  //     Answer: "lorem Ipsum is true",
  //   },
  //   {
  //     Question: "lorem Ipsum is false?",
  //     Answer: "lorem Ipsum is false",
  //   },
  //   {
  //     Question: "lorem Ipsum is not true?",
  //     Answer: "lorem Ipsum is not true",
  //   },
  // ];
  return (
    <>
      <Container className={styles.faqs}>
        {data.map((item, index) => (
          <Accordion key={index} iconType="plus">
            <AccordionPanel header={item?.Question}>
              <Text className={styles.answer}>{item?.Answer}</Text>
            </AccordionPanel>
          </Accordion>
        ))}
      </Container>
      
    </>
  );
};

export default Faqs;
