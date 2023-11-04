import { Container, Icon } from '@jds/core';
import React from 'react'
import RTUDetails from '../PreQuote/RtuDetails';
import styles from "../../../styles/BikeFlow/PreQuote/QuoteModal.module.scss";

const EditCityDesktop = (props) => {
    const {setShowModal, setEditRTU, vechileType} = props;
  return (
    <>
    <Container displayOn="desktop">
      <Container className={styles.modal} >
        <Container className={styles.topContainer}>
          {/* <Icon ic="IcChevronLeft"  onClick={() => {
              if (activeStep == 0) {
                router.push("/quote");
               
              } else {
                mref.current.prev();
              }
            }}/> */}
            <Container>

            </Container>
          <Icon
            ic="IcClose"
            onClick={() => {
                setEditRTU(false);
                setShowModal(false)
            
             
            }}
            style={{cursor:"pointer", color:"var(--primary-color-50)"}}
          />
        </Container>
        <RTUDetails vechileType={vechileType}/>
       
      </Container>
    </Container>

    
  </>
  )
}

export default EditCityDesktop