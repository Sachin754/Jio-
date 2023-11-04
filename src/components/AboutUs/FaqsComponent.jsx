import React, { useState } from "react";
import { Button, Container, TabItem, Tabs, Text } from "@jds/core";
import Faqs from "./Faqs";
import styles from "@/styles/AboutUs/Faqs.module.scss";
import { IcAddCircle } from "@jds/core-icons";

const FaqsComponent = () => {
  const General = [
    {
      Question: "Is insurance necessary?",
      Answer:
        "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
    },
    {
      Question: "How to buy insurance?",
      Answer: "lorem Ipsum is true",
    },
    {
      Question: "What is claim in an insurance policy?",
      Answer: "lorem Ipsum is false",
    },
    {
      Question: "What is renewal of an insurance policy?",
      Answer: "lorem Ipsum is not true",
    },
  ];
  const bike = [
    {
      Question: "Is insurance necessary for bike?",
      Answer:
        "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
    },
    {
      Question: "How to buy insurance for bike?",
      Answer: "lorem Ipsum is true",
    },
    {
      Question: "What is claim in an insurance policy for bike?",
      Answer: "lorem Ipsum is false",
    },
    {
      Question: "What is renewal of an insurance policy for bike?",
      Answer: "lorem Ipsum is not true",
    },
  ];
  const car = [
    {
      Question: "Is insurance necessary for car?",
      Answer:
        "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
    },
    {
      Question: "How to buy insurance for car?",
      Answer: "lorem Ipsum is true",
    },
    {
      Question: "What is claim in an insurance policy for car?",
      Answer: "lorem Ipsum is false",
    },
    {
      Question: "What is renewal of an insurance policy for car?",
      Answer: "lorem Ipsum is not true",
    },
  ];
  const health = [
    {
      Question: "Is insurance necessary for health?",
      Answer:
        "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
    },
    {
      Question: "How to buy insurance for health?",
      Answer: "lorem Ipsum is true",
    },
    {
      Question: "What is claim in an insurance policy for health?",
      Answer: "lorem Ipsum is false",
    },
    {
      Question: "What is renewal of an insurance policy for health?",
      Answer: "lorem Ipsum is not true",
    },
  ];
  const life = [
    {
      Question: "Is insurance necessary for life?",
      Answer:
        "An insurance policy protects you against financial losses. As such, the policy becomes necessary.",
    },
    {
      Question: "How to buy insurance for life?",
      Answer: "lorem Ipsum is true",
    },
    {
      Question: "What is claim in an insurance policy for life?",
      Answer: "lorem Ipsum is false",
    },
    {
      Question: "What is renewal of an insurance policy for life?",
      Answer: "lorem Ipsum is not true",
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState(General);

  return (
    <>
      <Container className={styles.faqsContainer}>
        <Text appearance="heading-xs" className={styles.faqsHeading}>
          Frequently Asked Questions
        </Text>
        <Container className={styles.tabsContainer}>
          <Tabs
            activeTab={currentTab}
            onChange={function noRefCheck() {}}
            overflow="scroll"
            appearance="normal"
          >
            <TabItem
              label="General"
              onClick={() => {
                setCurrentTab(0);
                setData(General);
              }}
            >
              <Container className={styles.faqBtnContainer}>
                <Faqs data={data} />
                <Button
                  size="small"
                  className={styles.btn}
                  title="Load More FAQs"
                  iconLeft={
                    <IcAddCircle style={{ color: "var(--primary-color-50)" }} />
                  }
                />
              </Container>
            </TabItem>
            <TabItem
              label="Bike"
              onClick={() => {
                setCurrentTab(1);
                setData(bike);
              }}
            >
              <Container className={styles.faqBtnContainer}>
                <Faqs data={data} />
                <Button
                  size="small"
                  className={styles.btn}
                  title="Load More FAQs"
                  iconLeft={
                    <IcAddCircle style={{ color: "var(--primary-color-50)" }} />
                  }
                />
              </Container>
            </TabItem>
            <TabItem
              label="Car"
              onClick={() => {
                setCurrentTab(2);
                setData(car);
              }}
            >
              <Container className={styles.faqBtnContainer}>
                <Faqs data={data} />
                <Button
                  size="small"
                  className={styles.btn}
                  title="Load More FAQs"
                  iconLeft={<IcAddCircle style={{ color:"var(--primary-color-50)" }} />}
                ></Button>
              </Container>
            </TabItem>
            <TabItem
              label="Health"
              onClick={() => {
                setCurrentTab(3);
                setData(health);
              }}
            >
              <Container className={styles.faqBtnContainer}>
                <Faqs data={data} />

                <Button
                  size="small"
                  className={styles.btn}
                  title="Load More FAQs"
                  iconLeft={<IcAddCircle style={{ color: "var(--primary-color-50)" }} />}
                />
              </Container>
            </TabItem>
            <TabItem
              label="Life"
              onClick={() => {
                setCurrentTab(4);
                setData(life);
              }}
            >
              <Container className={styles.faqBtnContainer}>
                <Faqs data={data} />
                <Button
                  className={styles.btn}
                  size="small"
                  title="Load More FAQs"
                  iconLeft={<IcAddCircle style={{ color:"var(--primary-color-50)" }} />}
                />
              </Container>
            </TabItem>
          </Tabs>
        </Container>
      </Container>
    </>
  );
};

export default FaqsComponent;
