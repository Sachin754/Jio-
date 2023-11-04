import React from "react";
import styles from "@/styles/ContactUs/ContactUs.module.scss";
import Link from "next/link";
import { Container, Text, Image, Button } from "@jds/core";

const ContactUs = () => {
  const data = [
    {
      icon: "/images/ContactUs/ic_contact_us.svg",
      name: "Helpdesk",
      value: "090 99887 6654",
    },
    {
      icon: "/images/ContactUs/ic_mail.svg",
      name: "Email",
      value: "rr.insurance@ril.com",
    },
    {
      icon: "/images/ContactUs/ic_mail.svg",
      name: "Careers",
      value: "careers@jioinsurance.com",
    },
    {
      icon: "/images/ContactUs/ic_location.svg",
      name: "Office Address",
      value:
        "Reliance Corporate Park, 5, TTC Industrial Area, Thane Belapur Road, Ghansoli, Navi Mumbai, India - 400701",
    },
  ];
  return (
    <>
      <Container className={styles.contactUsContainer}>
        <Container className={styles.contactUsBanner}></Container>
        <Container className={styles.contactDetailsContainer}>
          <Container className={styles.contactDetails}>
            {
              data.map((item,index)=>(
                <Container className={styles.contact} key={index}>
                  <Container className={styles.icon} >
                  <Image src={item.icon} alt="contact_Icon" />
                  </Container>
                  <Text appearance="body-m-bold" className={styles.name}>{item.name}</Text>
                  <Text appearance="body-s" className={styles.value}>{item.value}</Text>
                </Container>
              ))
            }
          </Container>

          <Container className={styles.contactOnWhatsApp}>
            <Container className={styles.chatIcon}>
              <Image src="/images/ContactUs/ic_chat.svg" alt="chaticon" />
            </Container>
            <Container className={styles.contactOnWhatsAppText}>
              <Text appearance="body-m" className={styles.wordsSpacing}>
                Click to
              </Text>
              <Link href="https://wa.me/917977892525?text=hi">
                <Button className={styles.whatsAppBtn}>
                  <Container className={styles.btnText}>
                    <Container className={styles.whatsAppicon}>
                      <Image
                        src="/images/ContactUs/ic_whatsapp.svg"
                        alt="whatsapp"
                      />
                    </Container>
                    <Text appearance="body-m-bold">Chat on WhatsApp</Text>
                  </Container>
                </Button>
              </Link>
              <Container className={styles.messageToMobileNumber}>
                <Container className={styles.messageText}>
                  <Text appearance="body-m">or message</Text>
                  <Text appearance="body-m-bold">&quot;Hi&quot;</Text>
                  <Text appearance="body-m">to</Text>
                </Container>
                <Link href="https://wa.me/917977892525?text=Hi">
                  <Text appearance="body-m-bold">+91 7977892525</Text>
                </Link>
                <Text appearance="body-m">on WhatsApp</Text>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ContactUs;
