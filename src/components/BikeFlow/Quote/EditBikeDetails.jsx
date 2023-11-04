import { Container } from '@jds/core'
import React from 'react'
import styles from '@/styles/BikeFlow/Quote/EditBikeDetails.module.scss'
import BikeDetails from '../PreQuote/BikeDetails'
const EditBikeDetails = (props) => {
  const {setShowVechileDetails, setIsEditDetailsBS,vechileType} =props;
  return (
    <BikeDetails edit={true} setIsEditDetailsBS = {setIsEditDetailsBS} setShowVechileDetails={setShowVechileDetails} vechileType={vechileType} />
  )
}

export default EditBikeDetails