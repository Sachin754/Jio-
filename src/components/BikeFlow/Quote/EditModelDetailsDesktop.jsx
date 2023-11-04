import React from 'react'
import BikeDetails from '../PreQuote/BikeDetails';
import { Container, Icon } from '@jds/core';
import styles from "../../../styles/BikeFlow/PreQuote/QuoteModal.module.scss";

const EditModelDetailsDesktop = (props) => {
    const {setShowModal,setEditmodelDetails,vechileType} = props;
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
                setEditmodelDetails(false);
                setShowModal(false)
            
             
            }}
            style={{cursor:"pointer", color:"var(--primary-color-50)"}}
          />
        </Container>
        <BikeDetails vechileType={vechileType}/>
       
      </Container>
    </Container>

    
  </>
  )
}

export default EditModelDetailsDesktop