import React from 'react'
import RTUDetails from '../PreQuote/RtuDetails'
import { Button, Container } from '@jds/core'
import styles from '@/styles/BikeFlow/Quote/EditCityRtu.module.scss'
const EditCityRtu = (props) => {
  const {selectedCity, setSelectedCity, selectedRtu, setSelectedRtu, setShowRTU, setIsEditDetailsBS} =props;
 
  return (
    <Container className={styles.editRtuSection}>
        <RTUDetails selectedCity={selectedCity} selectedRtu ={selectedRtu} setSelectedCity={setSelectedCity} setSelectedRtu={setSelectedRtu}/>
        <Button title='update' className={styles.btn} onClick={()=>{setShowRTU(false); setIsEditDetailsBS(true)}}/>
    </Container>
  )
}

export default EditCityRtu