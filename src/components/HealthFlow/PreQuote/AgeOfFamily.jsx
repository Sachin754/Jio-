import React, { useState } from 'react'
import styles from '../../../styles/HealthFlow/PreQuote/FamilyMembers.module.scss'
import { Button, Container, Icon, InputDate, Text } from '@jds/core'
import Image from 'next/image'
const AgeOfFamily = (props) => {
    const {selectedValues, setSecondStep, setThirdStep, setFirstStep} =props
    const [familyAges, setFamilyAges ] = useState({

    });
    const handleDOBChange = (item, dob) => {
      // Update the familyAges object with the selected item's DOB
      setFamilyAges((prevAges) => ({
        ...prevAges,
        [item]: dob,
      }));
    };
    console.log(familyAges);
  return (
    <>
     <Container className={styles.topNav}>
        <Icon ic={"IcChevronLeft"} style={{ color:"var(--primary-color-50)" }} size="l" onClick={()=>{
          setSecondStep(false);
          setFirstStep(false);
        }}/>
        <Text appearance="body-s-bold">Age&apos;s of the Family</Text>
      </Container>
      <Container style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Image src="/images/HealthFlow/Stepper2.svg" alt="stepper" width={100} height={50} style={{width:"20rem",marginTop:"2rem"}}/>
      </Container>
      <Container className={styles.secondStep}>
      <Text appearance="heading-xs">
        Select age of your family members
        </Text>
        <Container className={styles.dobOptions}>
            {selectedValues.map((item,index)=>(
                <Container key={index}>
                    {/* <Text>{item}</Text> */}
                    <InputDate datePicker label={`${item}'s Date of Birth (DOB)`}  onChange={(date) => handleDOBChange(item, date)} required/>
                </Container>
            ))}

        </Container>
      </Container>

      <Container className={styles.bottomSection}>
          <Button title="Continue" className={styles.btn} disabled={ Object.keys(familyAges).length != selectedValues.length} onClick={()=>{setSecondStep(false);
          setThirdStep(true);
          }
          }/>
          {/* {close && <NoOfChildren setClose={setClose} close={close}/>} */}
        </Container>
    </>

  )
}

export default AgeOfFamily