import React, { useState } from "react";
import styles from "@/styles/BikeFlow/KYC/AadharVerification.module.scss";
import {
  BottomSheet,
  Button,
  Container,
  Icon,
  Image,
  Input,
  Modal,
  Text,
} from "@jds/core";
import OtpVerification from "./OtpVerification";
import {  updateField } from "@/components/Redux/action";


import { kycDetails } from "@/components/Redux/action";
import { useDispatch, useSelector } from "react-redux";

const AadharVerification = () => {
  const [verify, setVerify] = useState(false);
  const [modalVerify, setModalVerify] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState({});

  const [aadharNumber, setAadharNumber] = useState(''); 
  const [aadharError, setAadharError] = useState('');
  const [otp, setOtp] = useState('');

  const dispatch = useDispatch()
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  const verificationApi = async() => {
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cust_id:1,
        insurer:formData?.selectedPlan?.InsuranceFrom,
        //insurer:"HDFC",
        correlationId: formData?.selectedPlan?.correlationId,
        certificate_type: "AADHAR",
        pep_flag: false,
        pan_details: {
        aadhar: formData.aadharNumber,
        mobile: formData.mobileNumber
        // pan: "LVKPS3545L",
        // dob: "09-05-2001"
     }})
    }
    const responce = await fetch(`${process.env.NEXT_PUBLIC_INSURANCE_API_URL}v1/UserDetails/CustomerKYC`,header)
    const data = await responce.json()
    setConfirmationDetails(data.data)
  }

  return (
    <>
      <Container className={styles.aadharcardSection}>
        <Container className={styles.topContainer}>
          <Container style={{ width: "2.5rem", height: "2.5rem" }}>
            <Image
              src="/images/BikeFlow/documentImg.svg"
              style={{ width: "2.5rem", height: "2.5rem" }}
              alt="document"
            />
          </Container>
          <Text appearance="heading-xs" className={styles.heading}>
            Verify KYC with Aadhar card
          </Text>
          <Text appearance="body-xxs" className={styles.subHeading}>
            Please enter the following details for KYC verification.
          </Text>
          <Container className={styles.details}>
            <Container displayOn="desktop">
              <Text appearance="body-m-bold">Enter Aadhar card details</Text>
            </Container>
            <Input
              type="number"
              label="UIDAI / Aadhar number"
              className={styles.input}
              value={aadharNumber}
              onChange={(e) => {
              const inputValue = e.target.value;
              const aadharPattern = /^\d{0,13}$/;

              if (inputValue.match(aadharPattern) || inputValue === '') {
              setAadharError('');
              dispatch(updateField('aadharNumber', inputValue));
              setAadharNumber(inputValue);
                } else {
              setAadharError('Aadhar number should be 12 digits');
                }
              }}
                required
            />
            {aadharError && <div className={styles.error} style={{color:"red"}}>{aadharError}</div>}

            <Input
              type="number "
              label="Registered mobile no. for OTP"
              className={styles.input}
              value={formData.mobileNumber}
              onChange={(e)=> {
                dispatch(updateField('mobileNumber',e.target.value))
                setOtp(e.target.value);
             }}
             required
            />
          </Container>
        </Container>
        <Container className={styles.bottomContainer}>
          <Container className={styles.notes}>
            <Text appearance="body-s" className={styles.aadharNote}>
              Your details are secure and will be used only for insurance
              application process. By clicking the button below, you agree to
              give us the access to verify the uploaded documents and agree to
              our{" "}
              <span style={{ color: "var(--primary-color-50)" }}>
                Privacy Policy
              </span>
              .
            </Text>
            <Container className={styles.desktopButton} displayOn="desktop">
              <Button
                title="Verify"
                onClick={() => {setModalVerify(true);
                verificationApi()}}
                style={{ width: "19rem" }}
                disabled={!aadharNumber || !otp}
              />
            </Container>
          </Container>
          <Container className={styles.bottomButton} displayOn="tablet">
            <Button
              title="Verify"
              onClick={() => {setVerify(true);
              verificationApi()}}
              style={{ width: "100%" }}
              disabled={!aadharNumber || !otp}
            />
          </Container>
        </Container>
      </Container>
      <BottomSheet
        close={!verify}
        onClose={() => setVerify(false)}
        onRequestClose={() => setVerify(false)}
      >
        <Container>
          {/* <ConfirmPanDetail /> */}
          <OtpVerification />
        </Container>
      </BottomSheet>
      <Modal
        kind="informational"
        onCloseCallback={() => setModalVerify(false)}
        onRequestClose={() => modalVerify}
        size="m"
        closed={!modalVerify}
      >
         <OtpVerification />
      </Modal>
    </>
  );
};

export default AadharVerification;
