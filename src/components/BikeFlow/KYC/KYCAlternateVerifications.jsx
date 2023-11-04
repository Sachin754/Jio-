import React, { useEffect, useState } from "react";
import styles from "@/styles/BikeFlow/KYC/KYCAlternateVerifications.module.scss";
import { Container, Image, Text, Input, Divider, Button, Modal, BottomSheet } from "@jds/core";
import AadharVerification from "./AadharVerification";
import UploadDocument from "./UploadDocument";
import DigilockerAuthorisation from "./DigilockerAuthorisation";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const KYCAlternateVerifications = (props) => {
  const { setEKYC, setDocuments, eKYC, documents, setModalEKYC, modalEKYC, redirectionLink } = props;
  const [selectedAlternative, setSelectedAlternative] = useState("eKYC");
  const router = useRouter();
  const verifications = [
    {
      verificationText: "Aadhar based eKYC",
      heading: "What you’ll need",
      subHeading: "",
      stepsContent: ["UIDAI / Aadhar number", "Registered mobile no. for OTP"],
    },
    {
      verificationText: "Upload documents",
      heading: "What you’ll need",
      subHeading:
        "(Any one of these types of documents will have to be uploaded.)",
      stepsContent: ["Passport", "Voter ID", "Driving Licence", "Aadhar Card"],
    },
  ];

  console.log(eKYC, documents, "sdfg");
  const [activeVerification, setActiveVerification] = useState(0);
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  // useEffect(()=>{
  //   if(selectedAlternative==='eKYC'){
  //     setEKYC(true);

  //   }
  //   else if(selectedAlternative === 'Documents'){
  //     setDocuments(true);
  //   }
  // },[activeVerification]);
  return (
    <>
      {!eKYC && !documents && (
        <Container className={styles.kycAlternateVerificationsContainer}>
          <Container className={styles.panVerificationFailedContainer}>
            <Container className={styles.imageContainer}>
              <Image
                className={styles.imageContainer}
                src="/images/BikeFlow/Isolation_Mode.svg"
                alt="isolationMode"
                aspectRatio="9:16"
              />
            </Container>
            <Container>
              <Text appearance="body-s-bold" className={styles.title}>
                Couldn&apos;t fetch details from PAN
              </Text>
              <Text appearance="body-xxs" className={styles.subTitle}>
                Please continue with different method.
              </Text>
            </Container>
          </Container>

          <Container className={styles.verificationsContainer}>
            {verifications.map((verification, index) => (
              <>
                {(formData?.selectedPlan?.InsuranceFrom !== 'ICICI' || verification.verificationText !== "Aadhar based eKYC") && (
                  <Container
                    key={index}
                    className={styles.aadharVerificationContainer}
                    onClick={() => {
                      if (index === 0) {
                        setActiveVerification(index);
                        setSelectedAlternative("eKYC");
                      } else {
                        setActiveVerification(index);
                        setSelectedAlternative("Documents");
                      }
                    }}
                    style={{
                      border:
                        index === activeVerification
                          ? "1px solid var(--primary-color-50)"
                          : "",
                    }}
                  >
                    <Input
                      className={styles.inputField}
                      id={
                        index == 0 ? "aadharVerification" : "documentVerification"
                      }
                      label={verification.verificationText}
                      max={100}
                      maxLength={250}
                      min={0}
                      name="verification"
                      // value=""
                      size="small"
                      //   onChange={(e) =>
                      //     setFormData((prev) => ({
                      //       ...prev,
                      //       prosper: e.target.value,
                      //     }))
                      //   }
                      checked={index === activeVerification}
                      onInvalid={function noRefCheck() { }}
                      placeholder=""
                      type="radio"
                    />
                    <hr></hr>
                    <Container className={styles.content}>
                      <Text appearance="body-xxs-bold" className={styles.heading}>
                        {verification.heading}
                        <Text
                          appearance="body-xxs-bold"
                          as="span"
                          className={styles.subHeading}
                        >
                          {" "}
                          {verification.subHeading}
                        </Text>
                      </Text>
                      <Container className={styles.subContent}>
                        {verification.stepsContent.map((step, index) => (
                          <Container className={styles.stepp} key={index}>
                            <Container className={styles.numberContainer}>
                              <Text className={styles.number}>{index + 1}</Text>
                            </Container>
                            <Text className={styles.stepText}>{step}</Text>
                          </Container>
                        ))}
                      </Container>
                    </Container>
                  </Container>)}
              </>
            ))}
          </Container>

          <Container className={styles.noteContainer}>
            <Text className={styles.noteText}>
              Your details are secure and will be used only for insurance
              application process. By clicking the button below, you agree to
              give us the access to verify the uploaded documents and agree to
              our
              <Text className={styles.policyText} as="span">
                {" "}
                Privacy Policy.
              </Text>
            </Text>
          </Container>
          <Container className={styles.bottomButton} displayOn="desktop">
            <Button
              title={`Proceed with ${formData?.selectedPlan?.InsuranceFrom === 'ICICI' ? "Documents" : selectedAlternative}`}
              onClick={() => {
                if (selectedAlternative === "eKYC") {
                  router.push(redirectionLink)
                  //setModalEKYC(true);
                } else if (selectedAlternative === "Documents") {
                  setDocuments(true);
                }
              }}
            />
          </Container>
          <Container className={styles.bottomButton} displayOn="tablet">
            <Button
              title={`Proceed with ${formData?.selectedPlan?.InsuranceFrom === 'ICICI' ? "Documents" : selectedAlternative}`}
              onClick={() => {
                if (selectedAlternative === "eKYC") {
                  router.push(redirectionLink)
                  //setModalEKYC(true);
                } else if (selectedAlternative === "Documents") {
                  setDocuments(true);
                }
              }}
            />
          </Container>
        </Container>
      )}
      {/* <Container displayOn='tablet'>
          <BottomSheet 
          kind="overlay"
            close={!eKYC}
            onClose={() => setEKYC(false)}
            onRequestClose={() => setEKYC(false)}
          >
            <DigilockerAuthorisation/>
          </BottomSheet>
          </Container>

        <Container  className={styles.modal} displayOn='desktop'>
            <Modal
          kind="informational"
          onCloseCallback={() => setModalEKYC(false)}
          onRequestClose={() => modalEKYC}
          size="m"
          closed={!modalEKYC}
          >
          <DigilockerAuthorisation />
          </Modal>
          </Container> */}
      {/* {eKYC && <DigilockerAuthorisation />} */}

      {/* {eKYC && <AadharVerification />} */}
      {documents && <UploadDocument />}
    </>
  );
};

export default KYCAlternateVerifications;
