import React from 'react'
import styles from '../../styles/Landing/Knowledge.module.scss'
import { Container, Text } from '@jds/core'
const KnowledgeHub = (props) => {
  const {insuranceType, KnowledgeHub} =  props;
  
 
   

  return (
 
    <Container className={styles.knowledgeSection}>
        <Text appearance='overline' className={styles.mainTitle}>KNOWLEDGE HUB</Text>
        <Text appearance='heading-xxs' className={styles.question}>{KnowledgeHub.question}</Text>
        <Text appearance='body-m' className={styles.factors}>{KnowledgeHub.factorText}</Text>
   <Container className={styles.points}>
        {KnowledgeHub.points.map((item,index)=>
            <Container key={index} className={styles.point}>
            <Text appearance='body-xxs' className={styles.title} >{item.title}</Text>
            <Text appearance='body-m' className={styles.description}>{item.description}</Text>
            </Container>
        )}
    </Container>
    </Container>
  
  )
}

export default KnowledgeHub