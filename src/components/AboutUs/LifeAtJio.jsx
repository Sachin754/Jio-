import React from 'react'
import {Container,Text} from "@jds/core"
import styles from "@/styles/AboutUs/LifeAtJio.module.scss"
import Image from 'next/image'

const LifeAtJio = () => {
    const imagesData = [
        { src: "/images/AboutUs/Life@jio/aboutUsImg1.svg" },
        { src: "/images/AboutUs/Life@jio/aboutUsImg2.svg" },
        { src: "/images/AboutUs/Life@jio/aboutUsImg3.svg" },
        { src: "/images/AboutUs/Life@jio/aboutUsImg4.svg" },
        { src: "/images/AboutUs/Life@jio/aboutUsImg5.svg" },
        { src: "/images/AboutUs/Life@jio/aboutUsImg6.svg" },
      ];
  return (
   <>
   <Container className={styles.imagesSection}>
          <Text className={styles.heading} appearance="heading-s">
            Life@jio
          </Text>
          <Container className={styles.imagesContainer}>
            {imagesData.map((image, index) => (
                <Container key={index}>
              <Image className={styles.aboutImg}
                src={image.src}
                key={index}
                alt="LifeAtJio"
                width={2}
                height={2}
              />
              </Container>
            ))}
          </Container>
        </Container> 
   </>
  )
}

export default LifeAtJio