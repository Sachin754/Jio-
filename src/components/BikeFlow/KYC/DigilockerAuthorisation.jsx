import React, { useState } from "react";
import styles from "@/styles/BikeFlow/KYC/DigilockerAuthorisation.module.scss";
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
import { useDispatch, useSelector } from "react-redux";
import { IcChevronRight } from "@jds/core-icons";

const DigilockerAuthorisation = () => {
  const [verify, setVerify] = useState(false);
  const [modalVerify, setModalVerify] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState({});

  const [aadharNumber, setAadharNumber] = useState(''); 
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
      <Container className={styles.confirmationSection}>
        <Container className={styles.topContainer}>
          <Text appearance="heading-xs" className={styles.heading}>
           Digilocker Authorisation
          </Text>
          <Text appearance='body-xs' className={styles.subHeading}>
               Is your Aadhar card linked with a phone number ?</Text>
            
        </Container>
        <Container className={styles.inputFieldsContainer}>
            <Container className={styles.prosperInputFields}>
            <Container className={styles.prosperLabelContainer}>
              <Input
                className={styles.prosperInputField}
                id="male"
                label="Yes linked"
                max={100}
                maxLength={250}
                min={0}
                name="Linked"
                value="yes linked"
                size="small"
              // checked={formData?.gender==='male'}
                onChange={(e)=> {
                 // dispatch(updateField('gender',e.target.value))
               }}
                //   onChange={(e) =>
                //     setFormData((prev) => ({
                //       ...prev,
                //       prosper: e.target.value,
                //     }))
                //   }
                onInvalid={function noRefCheck() {}}
                placeholder=""
                type="radio"
              />
            </Container>
            <Container className={styles.prosperLabelContainer}>
              <Input
                className={styles.prosperInputField}
                id="female"
                label="Not linked"
                max={100}
                maxLength={250}
                min={0}
                name="Linked"
                value="not linked"
                size="small"
                //checked={formData?.gender==='Female'}
                onChange={(e)=> {
                 // dispatch(updateField('gender',e.target.value))
               }}
                //   onChange={(e) =>
                //     setFormData((prev) => ({
                //       ...prev,
                //       prosper: e.target.value,
                //     }))
                //   }
                onInvalid={function noRefCheck() {}}
                onPrefixClick={function noRefCheck() {}}
                onSuffixClick={function noRefCheck() {}}
                type="radio"
              />
            </Container>
          </Container>
          </Container>
            <Button
              title="Authorisation Digilocker"
              onClick={() => {setVerify(true);
             }}
             appearance="body-xxs"
             className={styles.btn}
             //size="small"
              style={{ justifyContent:'center' }}
             // disabled={!aadharNumber || !otp}
             icon={<IcChevronRight style={{ color: "white" }} />}
            />
      </Container>
    </>
  );
};

export default DigilockerAuthorisation;
