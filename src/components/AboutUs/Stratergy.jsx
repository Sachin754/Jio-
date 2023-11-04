import { Container, Image, Text } from '@jds/core'
import React from 'react'
import styles from '../../styles/AboutUs/Stratergy.module.scss'

const Stratergy = () => {
  return (
    <Container className={styles.stratergySection}>
      <Container className={styles.contentSection}>
        <Container className={styles.stratergyText}>
          <Container>
              <Text appearance="overline" className={styles.subText}>
              Our Strategy & Vision
              </Text>
              <Text appearance="heading-m" className={styles.heading}>
              Our vision is simple yet powerful - to empower you with the ability to protect what matters most, effortlessly. 
              </Text>
          </Container>
          <Text appearance='body-s' className={styles.description}>
          We believe that insurance is not just a product; it&apos;s your shield against the uncertainties of life.<br></br> <br></br>

Guided by this belief, we have curated a diverse range of insurance products that cater to your unique needs, whether it&apos;s safeguarding your health, securing your assets, or ensuring your loved ones&apos; future.
          </Text>
        </Container>
       < Image src='/images/AboutUs/stratergyImg.svg'  alt='stratergy'  className={styles.stratergyImg}/>
      </Container>
    </Container>
  );
}

export default Stratergy