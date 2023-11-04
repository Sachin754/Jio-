import React, { useEffect, useRef, useState } from "react";
import { BottomSheet, Container, Divider, Icon, Text } from "@jds/core";
import styles from "@/styles/BikeFlow/Quote/Quote.module.scss";
import InsurancePlanCard from "./InsurancePlanCard";
import { IcChevronDown } from "@jds/core-icons";
import LoadingScreen from "./LoadingScreen";
import PolicyType from "./PolicyType";
import CoverValue from "./CoverValue";
import NCB from "./NCB";
import VehicleEditDetails from "./VehicleEditDetails";
import PlanDetails from "./PlanDetails";
import EditCityRtu from "./EditCityRtu";
import RTUDetails from "../PreQuote/RtuDetails";
import EditBikeDetails from "./EditBikeDetails";
import AddOns from "./AddOns";
import AddonFilter from "./AddonFilter";
import io from "socket.io-client";
import { calcLength } from "framer-motion";
import { useSelector } from "react-redux";

const QuotePage = (props) => {
  const [isFixed, setIsFixed] = useState(true);
  const [openAddOn, setOpenAddOn] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [socket, setSocket] = useState(null);
  const [socketId, setSocketId] = useState(null);
  const [quoteAPIResponse, setAPIReponse] = useState([]);

  const componentRef = useRef(null);
  const quoteRef = useRef(null);
  const atTopRef = useRef(false);
  // console.log(componentRef.current.getBoundingClientRect().top,"SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
  useEffect(() => {
    const handleScroll = () => {
      if (quoteRef.current && componentRef.current) {
        const quotePosition = quoteRef.current.getBoundingClientRect();
        const componentPosition = componentRef.current.getBoundingClientRect();
        //console.log(quotePosition, "quotePosition");

        // Scroll up: make the component fixed at the bottom until it reaches quoteRef

        //console.log(componentPosition, "componentPosition");
        // if (componentPosition.bottom > quotePosition.bottom) {
        //   setIsFixed(false);
        // } else {
        //   setIsFixed(true);
        // }

        if (quotePosition.bottom <= window.innerHeight) {
          setIsFixed(false);
        } else {
          setIsFixed(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {
    isLoading,
    setIsLoading,
    showPlanDetails,
    setShowPlanDetails,
    setShowRTU,
    setShowVechileDetails,
    showRTU,
    selectedModal,
    selectedBrand,
    selectedPolicy,
    selectedYear,
    showVechileDetails,
    selectedCity,
    setSelectedCity,
    selectedRtu,
    setSelectedRtu,
    vechileType,
    totalPremiumAmount,
    basicCover,
    DiscountAmount,
    TaxAmount,
    policyTypeValue,
    setPolicyTypeValue,
    coverValue,
    setCoverValue,
    existingPolicyPercentage,
    setExistingPolicyPercentage,
    PlanDetail
  } = props;
  // console.log(totalPremiumAmount, "totalPremiumAmount===>");
  // console.log(componentRef.current.getBoundingClientRect().top,"SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")

  const [isPolicyTypeBS, setIsPolicyTypeBS] = useState(false);
  const [isIDVBSBS, setIsIDVBSBS] = useState(false);
  const [isNBCBS, setIsNBCBS] = useState(false);
  const [isEditDetailsBS, setIsEditDetailsBS] = useState(false);
  const [quoteContainer, setQuoteContainer] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  useEffect(() => {
    let insuranceImg = "";
    if (PlanDetail) {
      if (PlanDetail.InsurerName === "ICICI") {
        insuranceImg = "/images/BikeFlow/bankImg.svg";
      } else if (PlanDetail.InsurerName === "HDFC") {
        insuranceImg = "/images/LandingPage/Hdfc_Insurance_Plan.svg";
      } else if (PlanDetail.InsurerName === "TATA") {
        insuranceImg = "/images/LandingPage/TATA_Insurance_Plan.svg";
      } else if (PlanDetail.InsurerName === "Digit") {
        insuranceImg = "/images/LandingPage/digit_Insurance.svg";
      }
      const obj = {
        InsuranceImg: insuranceImg,
        InsuranceFrom: PlanDetail?.InsurerName,
        InsuranceType: "Comprehensive Plan",
        isNew: true,
        CoverAmount: PlanDetail?.TotalPremiumAmount,
        amountPerMonth: `₹ ${Math.floor(PlanDetail?.TotalPremiumAmount / 12) || 0
          }`,
        correlationId: PlanDetail?.Insurer_Unique_Transaction_Id,
        Tenure: PlanDetail?.TPPolicyTenure,
        BasicTPPremium: PlanDetail?.BasicTPPremium,
        NewNcbDiscountAmount: PlanDetail?.NewNcbDiscountAmount,
        TaxAmount: PlanDetail?.TaxAmount,
        BasicODPremium: PlanDetail?.BasicODPremium,
      };
      quoteContainer.push(obj);
    }
  }, [PlanDetail]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (quoteRef.current && componentRef.current) {
  //       const quotePosition = quoteRef.current.getBoundingClientRect();
  //       const componentPosition = componentRef.current.getBoundingClientRect();
  //       console.log(quotePosition, "quotePosition");

  //       // Scroll up: make the component fixed at the bottom until it reaches quoteRef

  //       console.log(componentPosition, "componentPosition");
  //       // if (componentPosition.bottom > quotePosition.bottom) {
  //       //   setIsFixed(false);
  //       // } else {
  //       //   setIsFixed(true);
  //       // }

  //       if (quotePosition.bottom <= window.innerHeight) {
  //         setIsFixed(false);
  //       } else {
  //         setIsFixed(true);
  //       }
  //     }

  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}
      {!showPlanDetails && !showRTU && !showVechileDetails ? (
        <>
          <Container className={styles.QuoteContainer} ref={quoteRef}>
            <Container className={styles.vehicleInsuranceDetailsAndFilters}>
              <Container className={styles.vehicleInsuranceDetailsContainer}>
                <Container className={styles.vehicleInsuranceDetails}>
                  <Text appearance="body-s-bold" className={styles.rtoNumber}>
                    RJ28-XX-XXXX
                  </Text>
                  <Text
                    appearance="body-xxs-bold"
                    className={styles.vehicleInfo}
                  >
                    Hero Passion Pro BS5 CAST (100 CC)
                  </Text>
                </Container>
                <Text
                  appearance="body-xs-bold"
                  className={styles.viewDetailsText}
                  onClick={() => {
                    setIsEditDetailsBS(true);
                  }}
                >
                  View Details
                </Text>
              </Container>
              <Container className={styles.filtersContainer}>
                <Container className={styles.filterContainer}>
                  <Text appearance="body-xs" style={{ width: "max-content" }}>
                    Policy type:
                  </Text>
                  <Text
                    appearance="body-xs-bold"
                    style={{ width: "max-content", fontWeight: "600" }}
                  >
                    {policyTypeValue}
                  </Text>
                  <IcChevronDown
                    className={styles.iconDown}
                    onClick={() => {
                      setIsPolicyTypeBS(!isPolicyTypeBS);
                    }}
                  />
                </Container>
                <Container className={styles.filterContainer}>
                  <Text appearance="body-xs" style={{ width: "max-content" }}>
                    IDV:
                  </Text>
                  <Text
                    appearance="body-xs-bold"
                    style={{ width: "max-content", fontWeight: "600" }}
                  >
                    {coverValue}
                  </Text>
                  <IcChevronDown
                    className={styles.iconDown}
                    onClick={() => {
                      setIsIDVBSBS(!isIDVBSBS);
                    }}
                  />
                </Container>
                <Container className={styles.filterContainer}>
                  <Text appearance="body-xs" style={{ width: "max-content" }}>
                    NCB:
                  </Text>
                  <Text
                    appearance="body-xs-bold"
                    style={{ width: "max-content", fontWeight: "600" }}
                  >
                    {existingPolicyPercentage}
                  </Text>
                  <IcChevronDown
                    className={styles.iconDown}
                    onClick={() => {
                      setIsNBCBS(!isNBCBS);
                    }}
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles.planCardsSection}>
              <Container className={styles.plansFoundContainer}>
                <Text appearance="body-s-bold" className={styles.plansCount}>
                  {quoteContainer.length || 0} Plans found
                </Text>
                <Text appearance="body-xxs-bold" className={styles.orderId}>
                  Order ID: MH28XK08H92
                </Text>
              </Container>
              <Container className={styles.planCardsContainer}>
                {quoteContainer.map((item, index) => (
                  <Container key={index}>
                    <InsurancePlanCard
                      item={item}
                      setShowPlanDetails={setShowPlanDetails}
                      showPlanDetails={showPlanDetails}
                      setSelectedPlan={setSelectedPlan}
                    />
                  </Container>
                ))}
              </Container>
            </Container>
          </Container>
          <Container
            ref={componentRef}
            className={styles.addonAndFilters}
            style={{ position: isFixed ? "fixed" : "static" }}
            displayOn="tablet"
          >
            <Container
              className={styles.addOn}
              onClick={() => setOpenAddOn(true)}
            >
              <Icon ic="IcMedicalInsurance" style={{ color: "white" }} />
              <Text appearance="body-s" style={{ color: "white" }}>
                Add-Ons +
              </Text>
            </Container>
            <Text appearance="body-s" style={{ color: "white" }}>
              |
            </Text>
            <Container
              className={styles.filter}
              onClick={() => setOpenFilters(true)}
            >
              <Icon ic="IcFilter" style={{ color: "white" }} />
              <Text style={{ color: "white" }}>Filters</Text>
            </Container>
          </Container>
        </>
      ) : (
        <>
          {showPlanDetails && (
            <PlanDetails
              setShowPlanDetails={setShowPlanDetails} selectedPlan={selectedPlan}
              basicCover={basicCover}
              DiscountAmount={DiscountAmount}
              TaxAmount={TaxAmount}
              NCBValue={formData?.NCBValue}
            />
          )}
          {showRTU && (
            <EditCityRtu
              selectedCity={selectedCity}
              selectedRtu={selectedRtu}
              setSelectedCity={setSelectedCity}
              setSelectedRtu={setSelectedRtu}
              setIsEditDetailsBS={setIsEditDetailsBS}
              setShowRTU={setShowRTU}
            />
          )}
          {showVechileDetails && (
            <EditBikeDetails
              setIsEditDetailsBS={setIsEditDetailsBS}
              setShowVechileDetails={setShowVechileDetails}
              vechileType={vechileType}
            />
          )}
        </>
      )}
      <BottomSheet
        close={!isPolicyTypeBS}
        kind="overlay"
        onClose={() => setIsPolicyTypeBS(false)}
      >
        <PolicyType
          policyTypeValue={policyTypeValue}
          setPolicyTypeValue={setPolicyTypeValue}
          setIsPolicyTypeBS={setIsPolicyTypeBS}
        />
      </BottomSheet>
      <BottomSheet
        close={!isIDVBSBS}
        kind="overlay"
        onClose={() => setIsIDVBSBS(false)}
      >
        <CoverValue
          coverValue={coverValue}
          setCoverValue={setCoverValue}
          setIsIDVBSBS={setIsIDVBSBS}
        />
      </BottomSheet>
      <BottomSheet
        close={!isNBCBS}
        kind="overlay"
        onClose={() => setIsNBCBS(false)}
      >
        <NCB
          existingPolicyPercentage={existingPolicyPercentage}
          setExistingPolicyPercentage={setExistingPolicyPercentage}
          setIsNBCBS={setIsNBCBS}
        />
      </BottomSheet>
      <BottomSheet
        close={!isEditDetailsBS}
        kind="overlay"
        onClickPrimary={() => {
          setIsEditDetailsBS(false);
        }}
        onClose={() => setIsEditDetailsBS(false)}
        primaryCTA={{
          title: "Update Plan",
        }}
      >
        <VehicleEditDetails
          selectedCity={selectedCity}
          selectedRtu={selectedRtu}
          setIsEditDetailsBS={setIsEditDetailsBS}
          setShowRTU={setShowRTU}
          setShowVechileDetails={setShowVechileDetails}
          vechileType={vechileType}
          selectedYear={selectedYear}
          selectedBrand={selectedBrand}
          selectedModal={selectedModal}
          selectedPolicy={selectedPolicy}
        />
      </BottomSheet>
      <BottomSheet
        close={!openAddOn}
        kind="overlay"
        onClose={() => setOpenAddOn(false)}
      >
        <AddonFilter />
      </BottomSheet>
      <BottomSheet
        close={!openFilters}
        kind="overlay"
        onClose={() => setOpenFilters(false)}
      >
        <AddOns />
      </BottomSheet>
    </>
  );
};

export default QuotePage;
