import React, { useState, useEffect } from "react";
import QuotePage from "@/components/BikeFlow/Quote/QuotePage";
import QuotePageDesktop from "@/components/BikeFlow/Quote/QuotePageDesktop";
import { Container } from "@jds/core";
import LoadingScreen from "@/components/BikeFlow/Quote/LoadingScreen";
import VehicleEditDetails from "@/components/BikeFlow/Quote/VehicleEditDetails";
import KYCAlternateVerifications from "@/components/BikeFlow/KYC/KYCAlternateVerifications";
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import { updateField } from "@/components/Redux/action";

const socketInstance = io(
  "https://jiw-rribl-insurance-api-as-staging.azurewebsites.net/"
);
import ModalComponent from "@/components/BikeFlow/PreQuote/ModalComponent";
import modelstyles from '@/styles/Overlay.module.scss'
import RTUDetails from "@/components/BikeFlow/PreQuote/RtuDetails";
import EditCityRtu from "@/components/BikeFlow/Quote/EditCityRtu";
import EditCityDesktop from "@/components/BikeFlow/Quote/EditCityDesktop";
import EditModelDetailsDesktop from "@/components/BikeFlow/Quote/EditModelDetailsDesktop";
const Quote = (props) => {
  const { isLoading, setIsLoading,vechileType } = props;
  const [showRTU, setShowRTU] =  useState(false);
  const [showVechileDetails, setShowVechileDetails] = useState(false);
  const [showPlanDetails,  setShowPlanDetails] =  useState(false);
  const [isPrevInsuranceBS, setIsPrevInsuranceBS] = useState(false);
  const [selectedCity, setSelectedCity] = useState(" ");
  const [selectedRtu, setSelectedRtu] = useState(" ");
  const [selectedBrand, setSelectedBrand] = useState(" ");
  const [selectedModal, setSelectedModal] = useState(" ");
  const [selectedYear, setSelectedYear] = useState(" ");
  const [selectedPolicy, setSelectedPolicy] = useState(" ");
  const [socket, setSocket] = useState(null);
 const [socketId, setSocketId] = useState(null);
 const [apiResponse, setApiReponse] = useState(null);
 const [totalPremiumAmount, settotalPremiumAmount] = useState(null);
 const [basicCover, setBasicCover] = useState(null);
 const [DiscountAmount, setDiscountAmount] = useState(null);
 const [TaxAmount, setTaxAmount] = useState(null);

  const [isEditDetailsModal, setIsEditDetailsModal] = useState(false);
  const [isShowPlanDetailsModal, setIsShowPlanDetailsModal] = useState(false);

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
 
  useEffect(()=> {
    setSelectedCity(formData?.city1);
    setSelectedRtu(formData?.rtuNumber1);
    setSelectedBrand(formData?.bikeCompany)
    setSelectedYear(formData?.registrationYear);
    setSelectedModal(formData?.bikeModel);
    setSelectedPolicy(formData?.bikePolicy);
    socketInstance.on("connect", () => {
      setSocket(socketInstance);
      setSocketId(socketInstance.id);
      console.log("socket id", socketInstance.id);
    });
    const quote = []
    socketInstance.on("Get_Response", (data) => {
      quote.push(data.Data)
      console.log("Response of Get_Response", data.Data,quote);
      dispatch(updateField('quoteDetails',data.Data))

      if (data.Data.TotalPremiumAmount) {settotalPremiumAmount(data.Data.TotalPremiumAmount);}

      if (data.Data.BasicTPPremium) {setBasicCover(data.Data.BasicTPPremium);}

      if (data.Data.NewNcbDiscountAmount) {setDiscountAmount(data.Data.NewNcbDiscountAmount);}

      if (data.Data.TaxAmount) {setTaxAmount(data.Data.TaxAmount);}

      setApiReponse(data.Data)
    });
    
    socketInstance.on("disconnected", () => {
      console.log("Disconnected");
    });

    return () => {
      socketInstance.off("connected");
      socketInstance.off("disconnected");
    };
  },[])

  useEffect(() => {
    if (socket) {
      fetchDataFromAPI();
    }
  }, [socket]);

  const fetchDataFromAPI = async () => {
    const header = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        RRIBL_Unique_Id: "f2103619-1179-4c49-a475-1e59c1c7e18a",
        Active_Client_ID: socketId,
        AgentCode: "TWC00196",
        Vehicle_Type: "MOTOR_TW",
        TypeOfBusiness: "New",
        VehicleMakeCode: 45,
        ManufacturingYear: "2023",
        PolicyStartDate: "2023/09/26",
        PolicyEndDate: "2024/09/25",
        CorrelationId: "2d28d6d4-11ec-44f7-b0f9-42b223e4f4D3",
        FirstRegistrationDate: "2023/09/25",
        GSTToState: "MAHARASHTRA",
        IsAntiTheftDisc: true,
        IsAutomobileAssocnFlag: true,
        IsLegalLiabilityToPaidEmployee: true,
        IsRTIApplicableflag: true,
        IsValidDrivingLicense: true,
        NoOfDriver: 1,
        NoOfEmployee: 1,
        OtherLoading: 2,
        PACoverTenure: 1,
        RSAPlanName: "TW-299",
        SIHaveElectricalAccessories: 5000,
        SIHaveNonElectricalAccessories: 5000,
        SIPACoverUnnamedPassenger: 100000,
        Tenure: 1,
        TPTenure: 5,
        ZeroDepPlanName: "Silver TW",
        VehicleModelCode: 29512,
        RtoLocationCode: 11206,
        CustomerType: "INDIVIDUAL",
        PolicyType: "Comprehensive",
        CustomerStateCode: 14,
        PurchaseRegistrationDate: "2023/09/25",
        IsZeroDepCover: "YES",
        IsEmergencyAssistanceCover: "YES",
        planType: "CASHALLOW,ENGEBOX",
        IsLegalLiabilityDriver: "YES",
        CpaYear: 1,
        Cust_Id: 2,
      }),
    };
    const response = await fetch(
      `https://jiw-rribl-insurance-api-as-staging.azurewebsites.net/v1/PolicyDetails/GetQuotes`,
      header
    );
    console.log(response);
  };


  const [policyTypeValue, setPolicyTypeValue] = useState("Comprehensive"); 
  const [coverValue, setCoverValue] = useState("Best Deal");
  const [existingPolicyPercentage, setExistingPolicyPercentage] = useState("50%");

  const [showModal, setShowModal] = useState(false);
  const [editRTU, setEditRTU] = useState(false);
  const [editModelDetails, setEditmodelDetails] = useState(false);

  return (
    <>
      {/* {isLoading && <LoadingScreen/>} */}
      {/* {!isLoading &&  <Quote setIsLoading={setIsLoading} isLoading={isLoading} />} */}
      <Container displayOn="tablet">
        <QuotePage
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          showPlanDetails={showPlanDetails}
          setShowPlanDetails={setShowPlanDetails}
          showRTU={showRTU}
          setShowRTU={setShowRTU}
          setShowVechileDetails={setShowVechileDetails}
          showVechileDetails={showVechileDetails}
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          setSelectedRtu={setSelectedRtu}
          selectedRtu={selectedRtu}
          vechileType={vechileType} 
          selectedModal={selectedModal}
          selectedBrand={selectedBrand}
          selectedPolicy={selectedPolicy}
          selectedYear={selectedYear}
          totalPremiumAmount={totalPremiumAmount}
          basicCover={basicCover}
          DiscountAmount={DiscountAmount}
          TaxAmount={TaxAmount}
          policyTypeValue={policyTypeValue}
          setPolicyTypeValue={setPolicyTypeValue}
          coverValue={coverValue}
          setCoverValue={setCoverValue}
          existingPolicyPercentage={existingPolicyPercentage}
          setExistingPolicyPercentage={setExistingPolicyPercentage}
          PlanDetail={apiResponse}
        />
      </Container>
      <Container displayOn="desktop">
        <QuotePageDesktop
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          isEditDetailsModal={isEditDetailsModal}
          setIsEditDetailsModal={setIsEditDetailsModal}
          isShowPlanDetailsModal={isShowPlanDetailsModal}
          setIsShowPlanDetailsModal={setIsShowPlanDetailsModal}
          showRTU={showRTU}
          setShowRTU={setShowRTU}
          setShowVechileDetails={setShowVechileDetails}
          showVechileDetails={showVechileDetails}
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          setSelectedRtu={setSelectedRtu}
          selectedRtu={selectedRtu}
          vechileType={vechileType}
          setShowModal = {setShowModal}
          showModal = {showModal}
          setEditRTU = {setEditRTU}
          setEditmodelDetails={setEditmodelDetails}
          selectedModal={selectedModal}
          selectedBrand={selectedBrand}
          selectedPolicy={selectedPolicy}
          selectedYear={selectedYear}
          totalPremiumAmount={totalPremiumAmount}
          basicCover={basicCover}
          DiscountAmount={DiscountAmount}
          TaxAmount={TaxAmount}
          policyTypeValue={policyTypeValue}
          setPolicyTypeValue={setPolicyTypeValue}
          coverValue={coverValue}
          setCoverValue={setCoverValue}
          existingPolicyPercentage={existingPolicyPercentage}
          setExistingPolicyPercentage={setExistingPolicyPercentage}
          PlanDetail={apiResponse}
        />
         {showModal && (
        <Container className={modelstyles.modelOverlay} displayOn="desktop"></Container>
      )}
        {showModal && editRTU &&
            <Container displayOn="desktop"><EditCityDesktop setEditRTU={setEditRTU} setShowModal={setShowModal} vechileType={vechileType}/></Container>
        }
        {showModal && editModelDetails &&  <Container displayOn="desktop"><EditModelDetailsDesktop    setEditmodelDetails={setEditmodelDetails} setShowModal={setShowModal} vechileType={vechileType}/></Container>}
      </Container>
    </>
  );
};

export default Quote;
