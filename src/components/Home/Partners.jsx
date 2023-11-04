import React from 'react'
import styles from '../../styles/Home/Partners.module.scss'
import { Container, Text } from '@jds/core'
import Image from 'next/image';
const Partners = () => {
    const partners = [
        {img:"/images/Home/tata.svg"},{img:"/images/Home/hdfc.svg"},{img:"/images/Home/aditya.svg"},{img:"/images/Home/bajaj.svg"}
    ];
  return (
    <>
      <Container className={styles.partnerSection}>
        <Text appearance='heading-xs' className={styles.title}>Our Partners</Text>
       <Container className={styles.partnerCards}>
        {partners.map((item,index)=>
        <Container className={styles.partners} key={index}>
            <Image src={item.img} width={100} height={100} className={styles.img} alt="partners"/>
         </Container> 
        )}
        </Container>
      </Container>  
    </>
  )
}

export default Partners