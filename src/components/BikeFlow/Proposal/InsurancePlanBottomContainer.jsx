import React, { forwardRef, useState } from "react";
import { Button, Container, Icon, Image, Text } from "@jds/core";
import { IcChevronDown, IcChevronRight, IcChevronUp } from "@jds/core-icons";
import styles from "@/styles/HealthFlow/Proposal/BottomContainer.module.scss";
import InspectionRequired from "./InspectionRequired";
import InsuranceInfo from "./InsuranceInfo";
import { useDispatch, useSelector } from "react-redux";

const InsurancePlan = forwardRef(function (props, ref) {
  const { activeStep, setInspectionBS, setReviewDetails } = props;
  const [insurancePlanInfoDropDown, setInsurancePlanInfoDropDown] = useState(false);

  const formData = useSelector((state) => state.insuranceDetails.bikeData)

  const paymentAPI = async() => {
    const data = { 
    Active_Client_ID: formData?.quoteDetails?.Active_Client_ID,
    Vehicle_Type: "MOTOR_TW",
    UniqueRequestID: formData?.quoteDetails?.RRIBL_Unique_Id,
    AgentCode: "TWC19459",
    PremiumYear: formData?.quoteDetails?.PremiumYear,
    TypeOfBusiness: "NEW",
    CustomerType: "INDIVIDUAL",
    PolicyType: formData?.bikePolicy,
    RtoLocationCode: 11206,
    VehicleModelCode: 29512,
    VehicleMakeCode: 45,
    RequiredIdv: formData?.quoteDetails?.VehicleIdv,
    PurchaseRegistrationDate: "2023-09-08",
    YearofManufacture: 2023,
    RegistrationNo: formData?.registrationNumber,
    EngineNo: formData?.engineNumber,
    ChassisNo: formData?.chassisNumber,
    NetPremiumAmount: formData?.quoteDetails?.NetPremiumAmount,
    TotalPremiumAmount: formData?.quoteDetails?.TotalPremiumAmount,
    TaxAmount: formData?.quoteDetails?.TaxAmount,
    FinancierCode: formData?.FinancedBy,
    PAOwnerDriverNomineeName: formData?.nomieeName,
    PAOwnerDriverNomineeAge: formData?.nomieeDoi,
    PAOwnerDriverNomineeRelationship: formData?.nomieeRelation,
    IsLegalLiabilityDriver: "YES",
    UnnamedPassengerSumInsured: formData?.quoteDetails?.UnnamedPassengerRate,
    IsZeroDepCover: "YES",
    IsEmergencyAssistanceCover: "YES",
    planType: "CASHALLOW,ENGEBOX",
    CpaYear: 1,
    Title: "Mr",
    Gender: formData?.gender,
    FirstName: "Test",
    MiddleName: "S",
    LastName: "TestABC",
    DateOfBirth: formData?.dob,
    EmailAddress: formData?.email,
    MobileNumber: formData?.mobileNumber,
    PanCard: formData?.panNumber,
    GstInNo: formData?.GSTNumber,
    IsCustomerAuthenticated: "YES",
    UidNo: "13fefdfsfsfdss",
    AuthentificationType: "OTP",
    GCode: "LGCODE123",
    CorrespondenceAddress1: formData?.registeredaddress,
    CorrespondenceAddress2: formData?.communicationAddress,
    CorrespondenceAddressCitycode: 273,
    CorrespondenceAddressCityName: formData?.regCity,
    CorrespondenceAddressStateCode: 14,
    CorrespondenceAddressStateName: "Maharashtra",
    CorrespondenceAddressPincode: formData?.pincode,
    KYCId: "JC45YSGNAM",
    Cust_Id: formData?.quoteDetails?.Cust_Id,
    quote_response_Id:56
}
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
  const response = await fetch('https://jiw-rribl-insurance-api-as-staging.azurewebsites.net/v1/PolicyDetails/GetProposal', header);
  console.log(response);
  }


  return (
    <>
      <Container className={styles.bottomContainer}>
        <Container className={styles.insurancePlanNameImageIcon}>
          <Container className={styles.insurancePlan}>
            <Image
              src={formData?.selectedPlan?.InsuranceImg}
              alt="Insurance_Plan_Image"
              className={styles.insurancePlanImage}
              width={64}
              height={64}
              aspectRatio="16:9"
            />
            <Container className={styles.planImageName}>
              <Text appearance="body-m-bold">{formData?.selectedPlan?.InsuranceFrom}</Text>
              <Text
                className={styles.insuranceCover}
                appearance="body-xxs-bold"
                style={{ color: "var(--secondary-color-80)" }}
              >
                Final Premium:{" "}
                <Text
                  appearance="body-s-bold"
                  as="span"
                  className={styles.amountColor}
                >
                  ₹ {(formData?.selectedPlan?.BasicTPPremium + formData?.selectedPlan?.NewNcbDiscountAmount + formData?.selectedPlan?.TaxAmount) || 0}
                </Text>
              </Text>
            </Container>
          </Container>
          <Icon ic={insurancePlanInfoDropDown?<IcChevronUp/>:<IcChevronDown/>}
            className={styles.iconStyling}
            onClick={() => {
              setInsurancePlanInfoDropDown((prev) => !prev);
            }}
          />
        </Container>
        {insurancePlanInfoDropDown && <InsuranceInfo />}
        {activeStep == 3 ? (
          <Button
            size="medium"
            title="Review & Payment"
            className={styles.continueNextBtn}
            onClick={() => {
              // setInspectionBS(true);
              setReviewDetails(true);
              paymentAPI()
            }}
          />
        ) : activeStep < 3 ? (
          <Button
            size="medium"
            title="Next"
            className={styles.continueNextBtn}
            onClick={() => ref.current.next()}
          />
        ) : (
          <Button
            size="medium"
            title="Payment"
            className={styles.continueNextBtn}
            // onClick={() => ref.current.next()}
          />
        )}
      </Container>
    </>
  );
});
InsurancePlan.displayName = "InsurancePlan";
export default InsurancePlan;
