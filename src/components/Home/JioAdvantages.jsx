import React from "react";
import styles from "@/styles/Home/JioAdvantages.module.scss";
import { Button, Container, Text } from "@jds/core";
import Advantage from "./Advantage";
import { IcSecured } from "@jds/extended-icons";
const JioAdvantages = () => {
  const advantages = [
    {
      icon: "IcTicketStatus",
      title: "Curated Selection",
      description: "for all insurance plans available online",
    },
    {
      icon: "IcAssistiveGrid",
      title: "50+ Insurers",
      description: "partnered with us so that you can compare.",
    },
    {
      icon: "IcTeam",
      title: "Expert Guidance",
      description: "for all insurance plans available online",
    },
    {
      icon: "IcTariffChecking",
      title: "Faster Claims",
      description: "support built in with every policy for help.",
    },
    {
      icon: "IcSecured",
      title: "Secure & Safe",
      description: "for all insurance plans available online",
    },
  ];
  return (
    <>
      <Container className={styles.advantagesSection}>
        <Container>
          <Text className={styles.title} appearance="overline">
            THE JIO ADVANTAGE
          </Text>
          <Text className={styles.subtitle} appearance="heading-s">
            Why Jio Insurance?
          </Text>
        </Container>

        <Text className={styles.description} appearance="body-xxs">
          At Jio Insurance Broking, we understand that finding the right
          insurance can be a complex and time-consuming process. That&apos;s why
          we&apos;ve reimagined the insurance-buying experience, creating a
          seamless marketplace where protection meets convenience.
        </Text>

        <Container className={styles.advantages}>
          {advantages.map((item, index) => (
            <Advantage
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Container>
        <Button
          size="small"
          title="About Us"
          kind="secondary"
          className={styles.btn}
        />
      </Container>
    </>
  );
};

export default JioAdvantages;
