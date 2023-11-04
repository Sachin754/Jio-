import React, { useState } from "react";
import { Container, Image, Text, Icon, Divider, Input, Button } from "@jds/core";
import HeadingSection from "./HeadingSection";
import styles from "@/styles/BikeFlow/KYC/UploadDocuments.module.scss";
import ImageUploader from "./ImageUploader";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";


const UploadDocument = () => {
  let uuid = crypto.randomUUID();
  const [dropDown, setDropDown] = useState(false);
  const router = useRouter();
  const [selectedVerification, setSelectedVerification] = useState("Aadhaar card");
  const [frontImage, setFrontImage] = useState('');
  const [backImage, setBackImage] = useState('')

  const categories = ["Passport", "Voter ID", "Driving Licence", "Aadhar Card"];
  const dispatch = useDispatch();
  const formData = new FormData();
  const data = useSelector((state) => state.insuranceDetails.bikeData);
  console.log(data);

  const uploadDocumentAPI = async () => {
    formData.append('mobile_number', '917906530415');
    formData.append('email', 'anshulsharma9317@gmail.com');
    formData.append('is_poa_poi_same', 'true');
    formData.append('poi[0].certificate_type', 'AADHAAR');
    formData.append('poa[0].certificate_type', 'AADHAAR');
    // formData.append('CorrelationId', data.selectedPlan?.correlationId);
    formData.append('CorrelationId', uuid);
    formData.append('customer_type', 'I');
    formData.append('poi_document', frontImage);
    formData.append('poa_document', backImage);
    formData.append('insurer', data?.selectedPlan?.InsuranceFrom);
    formData.append('certificate_type', 'OVD');
    const header = {
      method: "POST",
      body: formData
    }
    const responce = await fetch(`https://jiw-rribl-insurer-kyc-service-as-staging.azurewebsites.net/v1/VerifyKYC`, header)
    console.log(responce)

  }

  return (
    <>
      <Container className={styles.uploadDocumentsContainer}>
        <Container classNam={styles.topContainer}>
          <Container style={{ width: "2.5rem", height: "2.5rem" }}>
            <Image
              src="/images/BikeFlow/documentImg.svg"
              style={{ width: "2.5rem", height: "2.5rem" }}
              alt="document"
            />
          </Container>
          <HeadingSection
            title="Upload any one of these types of documents"
            subTitle="Ensure a clear picture of ID card to get approved faster"
          />
        </Container>
        <Container className={styles.details}>
          <Container
            className={styles.dropdownAllMethods}
            onClick={() => {
              setDropDown(() => !dropDown);
            }}
          >
            <Text
              appearance="body-s-bold"
              color="white"
              className={styles.methodText}
            >
              {selectedVerification || "Aadhaar Card"}
            </Text>
            <Icon
              className={styles.dropdownIcon}
              ic={dropDown ? "IcChevronUp" : "IcChevronDown"}
              size="l"
            />

            {dropDown && (
              <Container className={styles.dropdownElements}>
                {categories.map((item, index) => (
                  <Container
                    className={styles.boxes}
                    key={index}
                    onClick={() => {
                      setSelectedVerification(item);
                    }}
                  >
                    <Container className={styles.block}>
                      <Text className={styles.dtitle}>{item}</Text>
                    </Container>
                    {index != categories.length - 1 && <Divider />}
                  </Container>
                ))}
              </Container>
            )}
          </Container>
          <Container className={styles.imagesUploadContainer}>
            <ImageUploader selectedVerification={selectedVerification} side={"front"} setFrontImage={setFrontImage} />
            <ImageUploader selectedVerification={selectedVerification} side={"back"} setBackImage={setBackImage} />
          </Container>

          <Text className={styles.note}>Your details are secure and will be used only for insurance application process. By clicking the button below, you agree to give us the access to verify the uploaded documents and agree to our<Text as="span" style={{ color: "var(--primary-color-50)" }}> Privacy Policy</Text>.</Text>

        </Container>
      </Container>
      <Container className={styles.bottomContainer}>
        <Button title="Submit for verification" className={styles.btn} onClick={() => {
          router.push('/proposal');
          uploadDocumentAPI();
        }} />

      </Container>
    </>
  );
};

export default UploadDocument;
