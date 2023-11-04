import { Button, Container, Input, Text } from '@jds/core'
import React from 'react'
import styles from  '@/styles/BikeFlow/KYC/OtpVerification.module.scss'
import { useRouter } from 'next/router';
const OtpVerification = () => {
  const router = useRouter();
  return (
    < Container className={styles.otpVerificationSection}>
        <Container>
        <Text appearance='heading-xs'>OTP Verification</Text>
        <Text>The OTP has been sent to +918*0****324</Text>
        </Container>
        <Input
          label=""
          step={1}
          textMask=""
          type="code"
          placeholder="000000"
          typeConfig={{
           
            code: {
              length: 6,
            },
            toggle: {
              labelPosition: "left",
            },
          }}
        />
        <Button title='Verify OTP' onClick={()=>router.push('/proposal')}/>
        <Text className={styles.resend}>Resend OTP in 00:30</Text>
        
    </Container>
  )
}

export default OtpVerification