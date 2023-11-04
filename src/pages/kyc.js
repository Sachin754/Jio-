import AadharVerification from '@/components/BikeFlow/KYC/AadharVerification'
import KYCAlternateVerifications from '@/components/BikeFlow/KYC/KYCAlternateVerifications'
import PanCardVerification from '@/components/BikeFlow/KYC/PanCardVerification'
import UploadDocument from '@/components/BikeFlow/KYC/UploadDocument'
import { Container, Icon, Image, Text } from '@jds/core'
import React, { useState } from 'react'
import styles from '@/styles/BikeFlow/KYC/Kyc.module.scss'
import { useSelector } from 'react-redux'

const Kyc = () => {
  const [kycSuccess, setKycSuccess] = useState(false);
  const [eKYC, setEKYC] = useState(false);
  const [modalEKYC, setModalEKYC] = useState(false);
  const [documents, setDocuments] = useState(false);
  const [panDetailsNotFetched, setPanDetailsNotFetched] = useState(false);
  const [redirectionLink, setRedirectionLink] = useState('');
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  const data = [
    { heading: "Cover Amount (IDV)", value: `₹ ${formData?.selectedPlan?.CoverAmount || 0} ` },
    { heading: "Tenure", value: `₹ ${formData?.selectedPlan?.Tenure || 0} Yrs` },
    { heading: "Bike Details", value: `${formData?.bikeCompany || ''} ${formData?.bikeModel || ''}` }
  ]
  return (
    <Container className={styles.kycSection}>
      <Container className={styles.insuranceDetails} displayOn='desktop'>
        <Container className={styles.bankDetails}>
          <Container className={styles.bankImg} style={{ width: "6.25rem", height: "4rem" }}>
            <Image src={formData?.selectedPlan?.InsuranceImg} style={{ width: "6.25rem", objectFit: "contain" }} aspectRatio='16:9' alt='bankImage' />

          </Container>
          <Text className={styles.insuranceName}>{formData?.selectedPlan?.InsuranceFrom}</Text>
        </Container>
        <Container className={styles.bankData}>
          {data.map((item, index) => (
            <Container key={index} className={styles.data}>
              <Text className={styles.heading}>{item.heading}</Text>
              <Text className={styles.value}>{item.value}</Text>
            </Container>
          ))}
        </Container>
      </Container>
      {panDetailsNotFetched ? <KYCAlternateVerifications redirectionLink={redirectionLink}
        setEKYC={setEKYC} setModalEKYC={setModalEKYC} modalEKYC={modalEKYC} setDocuments={setDocuments} eKYC={eKYC} documents={documents} /> :
        <PanCardVerification kycSuccess={kycSuccess} setRedirectionLink={setRedirectionLink}
          setKycSuccess={setKycSuccess} setPanDetailsNotFetched={setPanDetailsNotFetched} />
      }
      <Container className={styles.note} displayOn='desktop'>
        <Icon ic="IcInfo" style={{ width: "2.5rem", height: "1.5rem" }} />
        <Text appearance="body-xxs">
          Effective Jan 1, 2023 submission of KYC documents of proposer is
          mandatory for all customers as per IRDAI guidelines
        </Text>
      </Container>
    </Container>
  )
}

export default Kyc