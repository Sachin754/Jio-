import { Button, Container, Input, Text} from '@jds/core'
import React from 'react'
import styles from '@/styles/BikeFlow/KYC/ConfirmPanDetails.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ConfirmPanDetail = (props) => {
  const {setKycSuccess, setPanDetailsNotFetched, confirmationDetails} = props;
  const router = useRouter();
  return (
    <Container className={styles.confirmationSection}>
        <Container className={styles.topContainer} >
            <Image src='/images/BikeFlow/tick.svg' width={70} height={70} style={{width:"4.68rem",height:"4.68rem"}} alt="tick"/>
            <Text appearance='heading-xs' className={styles.heading}>Confirm Details</Text>
            <Text appearance='body-xs' className={styles.subHeading}>Please confirm the customer details to continue.</Text>
        </Container>
        <Input type='text' label='Name' value={confirmationDetails?.full_name}/>
        <Input type='date' label='Date of Birth' value={confirmationDetails?.dob}/>
        <Input type='textarea' label='Permanent Address' value={confirmationDetails?.permanent_address ? (confirmationDetails?.permanent_address?.address_line_1 + `,`+
        confirmationDetails?.permanent_address?.address_line_2 +','+ confirmationDetails?.permanent_address?.city + ',' +
        confirmationDetails?.permanent_address?.pin_code+ ',' + confirmationDetails?.permanent_address?.state) : '' } />
        <Button title='Confirm' onClick={()=>router.push('/proposal')}/>  
        <Button title='Customer details are incorrect' kind='tertiary' style={{color:"var(--primary-color-50)"}} onClick={()=>setPanDetailsNotFetched(true)}/>
    </Container>
  )
}

export default ConfirmPanDetail