import React from "react";
import { Button, Container, Text, Image } from "@jds/core";
import styles from "@/styles/DownloadApp.module.scss";

const DownloadApp = () => {
  const appfeatures = [
    {
      feature: "Compare policy plans seamlessly",
    },
    {
      feature: "Manage policies at single place",
    },
    {
      feature: "Track policy status,",
    },
  ];
  return (
    <>
      <Container className={styles.downloadAppContainer}>
        <Container className={styles.headingContent}>
          <Text appearance="body-s-bold" className={styles.title}>
            Unlock more features #OnTheGo
          </Text>
          <Text appearance="heading-xs" className={styles.subTitle}>
            Download the App!
          </Text>
        </Container>
        <Container className={styles.mobileFeatures}>
          <Container className={styles.mobileImgContainer}>
            <Image
              className={styles.mobileImg}
              src="/images/mobileImg.svg"
              alt="mobileImg"
              width={22}
              height={22}
              aspectRatio="3:4"
            />
          </Container>
          <Container className={styles.Features}>
            {appfeatures.map((item, index) => (
              <Container className={styles.feature} key={index}>
                <Image
                  src="/images/AboutUs/check.svg"
                  alt="checked"
                  width={22}
                  height={22}
                  className={styles.featureIcon}
                />
                <Text appearance="body-s-bold" className={styles.featureText}>
                  {item.feature}{" "}
                  <span
                    style={{
                      color: "#001E2B",
                      fontStyle: "italic",
                      fontWeight: "400",
                    }}
                  >
                    {index == 2 && "and more"}{" "}
                  </span>
                </Text>
              </Container>
            ))}
          </Container>
          <Container className={styles.buttons}>
            <Container className={styles.appStoreBtn}>
              <Image src="/images/Home/appleLogoIcon.svg" alt="appleStoreLogo" className={styles.logoIcon}/>
              <Text className={styles.btnText}>App Store</Text>
            </Container>
            <Container className={styles.playStoreBtn}>
              <Image src="/images/Home/playStoreLogoIcon.svg" alt="playStoreLogo" className={styles.logoIcon}/>
              <Text className={styles.btnText}>Play Store</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default DownloadApp;
