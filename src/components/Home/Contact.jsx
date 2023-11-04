import React from "react";
import styles from "../../styles/Home/Contact.module.scss";
import { Button, Container, Input, Text } from "@jds/core";
import Link from "next/link";
const Contact = (props) => {
  const {bg}=props;
  return (
    <>
      <Container className={styles.contactSection} style={{backgroundColor:bg}} displayOn="mobile">
        <Container className={styles.contactCard}>
          <Text appearance="heading-xs" className={styles.heading}>Schedule a callback</Text>
          <Input type="text" label="Name*" />
          <Input type="tel" label="Phone Number*" />
         <Container className={styles.dropdown}> <Input type="dropdown" placeholder="I am looking for..." /></Container>
          <Button size="medium" title="Call me back" className={styles.btn} />
          <Text className={styles.note}>
            By submitting the form, I have read and acknowledge the <Link href='/'> <span style={{fontWeight:"700",textDecoration:"underline"}}>Privacy
            Policy</span></Link> and agree that Jio Financial Services may contact me at the
            email address and/or phone number provided above
          </Text>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
