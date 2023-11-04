import { Container, Icon, Text } from '@jds/core'
import React from 'react'
import styles from '../../styles/Home/Advantage.module.scss'
const Advantage = (props) => {
    const {icon, title, description}=props
  return (
   <>
    <Container className={styles.card}>
     <Icon ic={icon} className={styles.icon}></Icon>
     <Text className={styles.title} appearance='body-xs-bold'>{title}</Text>
     <Text className={styles.description}appearance='body-xxs'>{description}</Text>
    </Container>
   </>
  )
}

export default Advantage