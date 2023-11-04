import { Container, Icon, Text } from '@jds/core'
import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home/HeroSectionV3.module.scss'
const HeroSectionVThree = () => {
  return (
    <>
    <Container className={styles.heroSection}>
        <Container className={styles.imgSection}>
          <Text className={styles.heroText} appearance='heading-l'>Protecting families <span style={{color:"var(--primary-color-50)"}}>and everything that matters</span></Text>
          <Image src='/images/Home/HeroImg.svg' width={200} height={100} alt='hero-img' className={styles.heroImg}/>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none" className={styles.arrow}>
<g clip-path="url(#clip0_1600_104161)">
<path d="M21.504 24.7487C21.1151 24.3597 20.4787 24.3597 20.0898 24.7487L18.9655 25.873L18.9726 5.65677C18.9726 5.10523 18.5271 4.65975 17.9756 4.65975C17.424 4.65975 16.9786 5.10523 16.9786 5.65677L16.9786 25.8659L15.8543 24.7416C15.4654 24.3527 14.829 24.3527 14.4401 24.7416C14.0511 25.1305 14.0511 25.7669 14.4401 26.1558L17.2685 28.9842C17.6574 29.3731 18.2938 29.3731 18.6827 28.9842L21.5111 26.1558C21.9 25.7669 21.9 25.1305 21.5111 24.7416L21.504 24.7487Z" fill="#89DCFF"/>
</g>
<defs>
<clipPath id="clip0_1600_104161">
<rect width="24" height="24" fill="white" transform="translate(17.9688) rotate(45)"/>
</clipPath>
</defs>
</svg>
    </Container>
    </>
  )
}

export default HeroSectionVThree