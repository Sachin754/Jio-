import {
  BottomSheet,
  Button,
  Container,
  Icon,
  Image,
  Input,
  InputDate,
  Text,
  Modal
} from "@jds/core";
import React, { use, useState } from "react";
import styles from "@/styles/BikeFlow/KYC/PanCardVerfication.module.scss";
import ConfirmPanDetail from "./ConfirmPanDetail";
import HeadingSection from "@/components/HealthFlow/Proposal/HeadingSection";
import axios from "axios";
import { updateField } from "@/components/Redux/action";
import { useDispatch, useSelector } from "react-redux";
import regexCheck from "@/components/regexCheck";


const PanCardVerification = (props) => {
  const { kycSuccess, setKycSuccess, setPanDetailsNotFetched, setRedirectionLink } = props;
  const [verify, setVerify] = useState(false);
  const [modalVerify, setModalVerify] = useState(false)
  const [confirmationDetails, setConfirmationDetails] = useState({});
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
  const [panNumber, setPanNumber] = useState('');
  const [dob, setDob] = useState('');


  const verificationApi = async () => {
    let uuid = crypto.randomUUID();
    const originalDate = new Date(formData.dob);

    // Step 2: Format the date in "DD-MM-YYYY" format
    const day = originalDate.getDate().toString().padStart(2, '0');  // Add leading zero if necessary
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');  // Month is zero-based
    const year = originalDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;

    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cust_id: 1,
        insurer: formData?.selectedPlan?.InsuranceFrom,
        //insurer:"HDFC",
        correlationId: formData.selectedPlan?.correlationId || uuid,
        certificate_type: "PAN",
        pep_flag: false,
        pan_details: {
          pan: formData.panNumber,
          dob: formattedDate
          // pan: "LVKPS3545L",
          //pan: "LVKPS3545k",
          // dob: "09-05-2001"
        }
      })
      //  body: JSON.stringify({
      //     cust_id:1,
      //     insurer:"ICICI",
      //     correlationId: uuid,
      //     certificate_type: "PAN",
      //     pep_flag: false,
      //     pan_details: {
      //     pan: "LVKPS3545L",
      //     dob: "09-05-2001"
      //  }
      //})
    }
    //const responce = await fetch(`${process.env.NEXT_PUBLIC_INSURANCE_API_URL}v1/UserDetails/CustomerKYC`, header)
    const responce = await fetch('https://jiw-rribl-insurer-kyc-service-as-staging.azurewebsites.net/v1/VerifyKYC', header)

    const data = await responce.json()
    console.log(data)
    dispatch(updateField('fullName', data?.kyc_details?.full_name))
    dispatch(updateField('firstName', data?.kyc_details?.first_name))
    dispatch(updateField('lastName', data?.kyc_details?.last_name))
    dispatch(updateField('middleName', data?.kyc_details?.middle_name))
    dispatch(updateField('mobileNumber', data?.kyc_details?.mobile_number))
    data?.kyc_details?.dob && dispatch(updateField('dob', data?.kyc_details?.dob))
    dispatch(updateField('email', data?.kyc_details?.email))
    dispatch(updateField('permanentAddress', data?.kyc_details?.permanent_address))
    data?.kyc_details?.permanent_address && dispatch(updateField('address_line_1', data?.kyc_details?.permanent_address?.address_line_1 + ',' + data?.kyc_details?.permanent_address?.address_line_2))
    //setRedirectionLink(data.result?.redirect_link);

    setRedirectionLink('https://pehchaanuat.hdfcergo.com/verified-partner?txnId=9935d331-e650-4e62-94ba-d92246a15a46&redirectUrl=https%3A%2F%2Fwww.google.com%2F&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kb3IiOiJtYXJpbmVzYWxlcnQoMSkiLCJwcm9qZWN0IjoiUEVIQ0hBQU4gRUtZQyIsInRyYW5zYWN0aW9uSWQiOiI5OTM1ZDMzMS1lNjUwLTRlNjItOTRiYS1kOTIyNDZhMTVhNDYiLCJpYXQiOjE2OTgzMTIxODEsImV4cCI6MTY5ODMxMzk4MX0.hDPTPOvY2CZm-bu5MvZp-DB88PPIFEZ5VmDhOnYNzCY&entity_type=&customerType=C&channel=marinesalert(1)&redirect_uri=http://localhost:3000');

    setConfirmationDetails(data?.kyc_details)
  }

  return (
    <>
      <Container className={styles.pancardSection}>
        <Container className={styles.topContainer}>
          <Container style={{ width: "2.5rem", height: "2.5rem" }}>
            <Image
              src="/images/BikeFlow/documentImg.svg"
              style={{ width: "2.5rem", height: "2.5rem" }}
              alt="document"
            />
          </Container>
          <HeadingSection title="Verify KYC with Pan card" subTitle="Please enter the following details for KYC verification." />

          <Container className={styles.details}>
            <Container displayOn="desktop">
              <Text appearance='body-m-bold'>Enter PAN Card details</Text>
            </Container>

            <Input type="text" label="Valid PAN card number" className={styles.input}
              state={
                formData?.panNumber?.length > 0 &&
                  !regexCheck(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, formData.panNumber)
                  ? "error"
                  : ""
              }
              stateConfig={{
                errorText: "Enter a valid PAN card number",
              }}
              value={formData?.panNumber}
              onChange={(e) => {
                dispatch(updateField('panNumber', e.target.value.toUpperCase()))
                setPanNumber(e.target.value);
              }} required />
            <InputDate
              className={styles.input}
              datePicker
              type='date'
              //dateFormat="dd-mm-yyyy"
              label="Date of Birth (DOB)"
              helperText="As mentioned on your PAN"
              onChange={(e) => {
                dispatch(updateField('dob', e))
                setDob(e);
              }}
              value={formData?.dob}
              state={formData?.dob?.length > 0 && !regexCheck(/^\d{4}-\d{2}-\d{2}$/, formData?.dob)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid date of birth",
              }}
              required
            />
            <Container displayOn="desktop">
              <Button title="Verify" onClick={() => {
                setModalVerify(true);
                verificationApi()
              }} style={{ width: "19.5rem" }} disabled={!panNumber || !dob} />
            </Container>
          </Container>
        </Container>
        <Container className={styles.bottomContainer}>
          <Container className={styles.note} displayOn="tablet">
            <Icon ic="IcInfo" style={{ width: "2.5rem", height: "1.5rem" }} />
            <Text appearance="body-xxs">
              Effective Jan 1, 2023 submission of KYC documents of proposer is
              mandatory for all customers as per IRDAI guidelines
            </Text>
          </Container>
          <Container className={styles.bottomButton} displayOn="tablet">

            <Button title="Verify" onClick={() => {
              setVerify(true);
              verificationApi()
            }} disabled={!formData.panNumber && !formData.dob} />
          </Container>
        </Container>
      </Container>
      <Container displayOn='tablet'>
        <BottomSheet className={styles.bottomSheet}
          close={!verify}
          onClose={() => setVerify(false)}
          onRequestClose={() => setVerify(false)}
        >
          <Container>
            <ConfirmPanDetail setKycSuccess={setKycSuccess} confirmationDetails={confirmationDetails} setPanDetailsNotFetched={setPanDetailsNotFetched} />
          </Container>
        </BottomSheet>
      </Container>
      <Container className={styles.modal} displayOn='desktop'>
        <Modal
          kind="informational"
          onCloseCallback={() => setModalVerify(false)}
          onRequestClose={() => modalVerify}
          size="m"
          closed={!modalVerify}
        >
          <ConfirmPanDetail setKycSuccess={setKycSuccess} confirmationDetails={confirmationDetails} setPanDetailsNotFetched={setPanDetailsNotFetched} />
        </Modal>
      </Container>
    </>
  );
};

export default PanCardVerification;
