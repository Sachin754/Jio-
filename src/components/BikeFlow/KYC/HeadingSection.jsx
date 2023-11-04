import React from 'react'
import {Container,Text} from "@jds/core";
import styles from "@/styles/HealthFlow/Proposal/HeadingSection.module.scss"

const HeadingSection = (props) => {
    const {title,subTitle}=props;
  return (
    <>
     <Container className={styles.headingSection}>
          <Text className={styles.title} appearance="heading-xs">
           {title}
          </Text>
          <Text className={styles.subTitle} appearance="body-xxs">
           {subTitle}
          </Text>
        </Container>
    </>
  )
}

export default HeadingSection