import React from "react";
import styles from "@/styles/Footer/Footer.module.scss";
import Image from "next/image";
import { Container, Divider, Text, Heading } from "@jds/core";

const Footer = () => {
  
  const buyInsurancePolicies = [
    {
      name: "Buy Health Insurance",
      link: "",
    },
    {
      name: "Buy Car Insurance",
      link: "",
    },
    {
      name: "Buy Two Wheeler Insurance",
      link: "",
    },
  ];

  const more = [
    {
      name: "About",
      link: "",
    },
    {
      name: "Blogs",
      link: "",
    },
    {
      name: "Contact",
      link: "",
    },
    {
      name: "Careers",
      link: "",
    },
    {
      name: "Legal",
      link: "",
    },
    {
      name: "POSP",
      link: "",
    },
    {
      name: "Annual Reports",
      link: "",
    },
  ];
  const more1 = more.slice(0, 4);
  const more2 = more.slice(4, 8);
  const regulations = [
    {
      name: "Privacy Policy",
      link: "",
    },
    {
      name: "Terms of Use",
      link: "",
    },
    {
      name: "Report Abuse",
      link: "",
    },
  ];
  return (
    <>
      <Container className={styles.footerContainer}>
        <Container className={styles.topContainer}>
          <Container className={styles.logoTextContainer}>
            <Image
              src="/images/jioLogo.svg"
              alt="jioLogo"
              width={22}
              height={22}
              className={styles.logoImg}
            />
            <Text appearance="body-l" className={styles.logoText}>
              Insurance Broking
            </Text>
          </Container>
          <Container className={styles.linksContainer}>
            <Container className={styles.policyLinksContainer}>
              <Text className={styles.policiesHeading}>
                Buy Insurance Policies
              </Text>
              <Container className={styles.policyLinks}>
                {buyInsurancePolicies.map((item, index) => {
                  return <Text key={index}className={styles.linkText}>{item.name}</Text>; // Added return statement
                })}
              </Container>
            </Container>
            <Container className={styles.moreLinksContainer}>
              <Text className={styles.moreHeading}>More</Text>
              <Container className={styles.moreLinks}>
                <Container className={styles.leftLinks}>
                  {more1.map((item, index) => {
                    return <Text key={index} className={styles.linkText}>{item.name}</Text>;
                  })}
                </Container>
                <Container className={styles.rightLinks}>
                  {more2.map((item, index) => {
                    return <Text key={index} className={styles.linkText}>{item.name}</Text>;
                  })}
                </Container>
              </Container>
            </Container>
            <Container className={styles.regulationsContainer}>
              {regulations.map((item, index) => {
                return (
                  <Text key={index} className={styles.linkText}>
                    {item.name}
                  </Text>
                );
              })}
            </Container>
          </Container>
        </Container>
        <Container className={styles.licenceText}>
            <Text>IRDAI License CIN: 123123124124</Text>
          </Container>
        <Divider />
        <Container className={styles.bottomContainer}>
          <Text className={styles.textContainer}>
            © 2023 Jio Insurance Broking
          </Text>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
