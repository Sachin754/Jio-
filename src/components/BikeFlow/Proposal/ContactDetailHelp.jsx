import React from "react";
import { Container, Text } from "@jds/core";
import styles from "@/styles/BikeFlow/Proposal/ContactDetailHelp.module.scss";
import { IcCall, IcWhatsapp } from "@jds/extended-icons";

const ContactDetailHelp = () => {
  return (
    <>
      <Container className={styles.contactDetailHelpContainer}>
        <Container className={styles.helpContainer}>
          <Text appearance="body-s-bold" className={styles.title}>Need help</Text>
          <Text appearance="body-xs-bold" className={styles.helpDescription}>We are there to help you.</Text>
        </Container>
        <Container className={styles.whatsAppContainer}>
          <IcWhatsapp className={styles.whatsAppIcon} />
          <Container className={styles.whatsAppContent}>
            <Text appearance="body-xs-bold" >Chat with us</Text>
            <Text appearance="body-xxs-bold" className={styles.chatDescription}>Chat support available between 10AM - 7PM</Text>
          </Container>
        </Container>
        <Container className={styles.callContainer}>
          <IcCall className={styles.callIcon}/>
          <Container className={styles.callContent}>
            <Text appearance="body-xs-bold">Get a call back</Text>
            <Text appearance="body-xxs-bold" className={styles.callDescription}>Arrange a call back from our health product advisor</Text>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ContactDetailHelp;
