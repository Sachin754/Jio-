import { Button, Container, Icon, Input, Text } from '@jds/core'
import React, { useState } from 'react'
import styles from '../../../styles/HealthFlow/PreQuote/FamilyMembers.module.scss'
import Image from 'next/image'
const HealthCondition = (props) => {
    const {setSecondStep, setThirdStep} = props;
    const plans = [
        {plan:"Diabetes"},
        {plan:"BP/Hypertension"},
        {plan:"Heart Disease"},
        {plan:"Asthma"},
        {plan:"Thyroid Disorder"},
        {plan:"Other"}
    ];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleCheckboxChange = (value) => {
        if (selectedOptions.includes(value)) {
          setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.filter((item) => item !== value)
          );
       
        } else {
          setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, value]);
        }
      };
    const [textData, setTextData] = useState("");
    const handleTextData = (e)=>{
        setTextData(e.target.value);
    }

  return (
    <>
     <Container className={styles.topNav}>
        <Icon ic={"IcChevronLeft"} style={{ color: "var(--primary-color-50)" }} size="l" onClick={()=>{
            setThirdStep(false);
            setSecondStep(true);
        }}/>
        <Text appearance="body-s-bold">Health Condition</Text>
     </Container>
     <Container style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Image src="/images/HealthFlow/Stepper3.svg" alt="stepper" width={100} height={50} style={{width:"20rem",marginTop:"2rem"}}/>
     </Container>
     <Container className={styles.thirdStep}>
        <Text appearance='heading-xs'>Does any selected member have an existing condition?</Text>
        <Text appearance='body-xs'>This helps us find the right plan that covers your condition(s), if any.</Text>
        <Container className={styles.options}>
        {plans.map((item, index) => (
                <Container className={styles.checkboxContainer} key={index}>
                  <Input
                    type="checkbox"
                    size="small"
                    value={item.name}
                    checked={selectedOptions.includes(item.plan)}
                    onChange={(e) => {
                    
                      handleCheckboxChange(item.plan);
                      // console.log(selectedValues);
                    }}
                  />
                  <Text
                    appearance="body-xs"
                    style={{ paddingBottom: "0.25rem" }}
                  >
                    {item.plan}
                  </Text>
                </Container>
              ))}
         <Input type='textarea' label='Mention your Health Condition' value={textData} onChange={handleTextData}></Input>     
        </Container>
       

     </Container>
     <Container className={styles.bottomSection}>
            <Button
              title="Continue"
              className={styles.btn}
              disabled={selectedOptions.length === 0}
             
            />
            <Button title="None, Let's skip" kind='tertiary' style={{color:"var(--primary-color-60)"}}/>
          </Container>
    </>
  )
}

export default HealthCondition