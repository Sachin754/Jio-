import React, { useEffect, useState } from "react";
import { Container, Text, Badge, Input, Modal, Icon, Button } from "@jds/core";
import styles from "@/styles/BikeFlow/Quote/QuotePageDesktop.module.scss";
import { IcChevronDown, IcChevronUp } from "@jds/core-icons";
import AddOns from "./AddOns";
import InsurancePlanCardDesktop from "./InsurancePlanCardDesktop";
import ContactDetailHelp from "../Proposal/ContactDetailHelp";
import PolicyType from "./PolicyType";
import VehicleEditDetails from "./VehicleEditDetails";
import PlanDetails from "./PlanDetails";
import CoverValue from "./CoverValue";
import NCB from "./NCB";
import LoadingScreen from "./LoadingScreen";
import EditCityRtu from "./EditCityRtu";
import EditBikeDetails from "./EditBikeDetails";
import VehicleModal from "../PreQuote/ModalComponent";
import { useSelector } from "react-redux";

const QuotePageDesktop = (props) => {
  const {
    setIsLoading,
    isLoading,
    isEditDetailsModal,
    setIsEditDetailsModal,
    isShowPlanDetailsModal,
    setIsShowPlanDetailsModal,
    showRTU,
    selectedModal,
    selectedBrand,
    selectedPolicy,
    selectedYear,
    setShowRTU,
    setSelectedCity,
    setShowVechileDetails,
    showVechileDetails,
    selectedCity,
    setSelectedRtu,
    selectedRtu,
    vechileType,
    setShowModal,
    showModal,
    setEditRTU,
    setEditmodelDetails,
    policyTypeValue,
    setPolicyTypeValue,
    coverValue,
    setCoverValue,
    existingPolicyPercentage,
    setExistingPolicyPercentage,
    PlanDetail
  } = props;

  const [isPolicyTypeModal, setIsPolicyTypeModal] = useState(false);
  const [isIDVBSModal, setIsIDVBSModal] = useState(false);
  const [isNBCModal, setIsNBCModal] = useState(false);
  const [isEditDetailsBS, setIsEditDetailsBS] = useState(false);
  const [quoteContainer, setQuoteContainer] = useState([])
  const [selectedPlan, setSelectedPlan] = useState([])
  const formData = useSelector((state) => state.insuranceDetails.bikeData)

  useEffect(() => {
    let insuranceImg = "";
    if (PlanDetail) {
      if (PlanDetail.InsurerName === 'ICICI') {
        insuranceImg = "/images/BikeFlow/bankImg.svg"
      } else if (PlanDetail.InsurerName === 'HDFC') {
        insuranceImg = "/images/LandingPage/Hdfc_Insurance_Plan.svg"
      } else if (PlanDetail.InsurerName === 'TATA') {
        insuranceImg = "/images/LandingPage/TATA_Insurance_Plan.svg"
      } else if (PlanDetail.InsurerName === 'Digit') {
        insuranceImg = "/images/LandingPage/digit_Insurance.svg"
      }
      const obj = {
        InsuranceImg: insuranceImg,
        InsuranceFrom: PlanDetail?.InsurerName,
        InsuranceType: "Comprehensive Plan",
        isNew: true,
        CoverAmount: PlanDetail?.TotalPremiumAmount,
        amountPerMonth: `₹ ${Math.floor(PlanDetail?.TotalPremiumAmount / 12) || 0}`,
        BasicTPPremium: PlanDetail?.BasicTPPremium,
        NewNcbDiscountAmount: PlanDetail?.NewNcbDiscountAmount,
        TaxAmount: PlanDetail?.TaxAmount,
        BasicODPremium: PlanDetail?.BasicODPremium
      }
      quoteContainer.push(obj)
    }
  }, [PlanDetail])



  const [activeDropDown, setActiveDropDown] = useState(false);

  return (
    <>
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}

      <Container className={styles.quotePageDesktopContainer}>
        <Container className={styles.vehicleInsuranceDetailsAndFilters}>
          <Container className={styles.vehicleInsuranceDetailsContainer}>
            <Container className={styles.vehicleInsuranceDetails}>
              <Text appearance="body-s-bold" className={styles.rtoNumber}>
                RJ28-XX-XXXX
              </Text>
              <Text appearance="body-xxs-bold" className={styles.vehicleInfo}>
                Hero Passion Pro BS5 CAST (100 CC)
              </Text>
            </Container>
            <Text
              appearance="body-xs-bold"
              className={styles.viewDetailsText}
              onClick={() => {
                setIsEditDetailsModal(true);
              }}
            >
              View Details
            </Text>
          </Container>
          <Container className={styles.filtersContainer}>
            <Container className={styles.filterContainer}>
              <Container className={styles.fieldValue}>
                <Text className={styles.field}>Policy type:</Text>
                <Text className={styles.value}>{policyTypeValue}</Text>
              </Container>
              <Icon
                className={styles.iconDown}
                ic={isPolicyTypeModal ? <IcChevronUp /> : <IcChevronDown />}
                onClick={() => {
                  setIsPolicyTypeModal(!isPolicyTypeModal);
                }}
              />
            </Container>
            <Container className={styles.filterContainer}>
              <Container className={styles.fieldValue}>
                <Text className={styles.field}>IDV:</Text>
                <Text className={styles.value}>{coverValue}</Text>
              </Container>
              <Icon
                className={styles.iconDown}
                ic={isIDVBSModal ? <IcChevronUp /> : <IcChevronDown />}
                onClick={() => {
                  setIsIDVBSModal(!isIDVBSModal);
                }}
              />
            </Container>
            <Container className={styles.filterContainer}>
              <Container className={styles.fieldValue}>
                <Text className={styles.field}>NCB:</Text>
                <Text className={styles.value}>{existingPolicyPercentage}</Text>
              </Container>
              <Icon
                className={styles.iconDown}
                ic={isNBCModal ? <IcChevronUp /> : <IcChevronDown />}
                onClick={() => {
                  setIsNBCModal(!isNBCModal);
                }}
              />
            </Container>
            <Modal
              kind="informational"
              onCloseCallback={() => setIsPolicyTypeModal(false)}
              onRequestClose={() => isPolicyTypeModal}
              size="s"
              closed={!isPolicyTypeModal}
            >
              <PolicyType
                policyTypeValue={policyTypeValue}
                setPolicyTypeValue={setPolicyTypeValue}
                setIsPolicyTypeModal={setIsPolicyTypeModal}
              />
            </Modal>

            <Modal
              kind="informational"
              onCloseCallback={() => setIsIDVBSModal(false)}
              onRequestClose={() => isIDVBSModal}
              size="s"
              closed={!isIDVBSModal}
            >
              <CoverValue
                coverValue={coverValue}
                setCoverValue={setCoverValue}
                setIsIDVBSModal={setIsIDVBSModal}
              />
            </Modal>
            <Modal
              kind="information"
              onCloseCallback={() => setIsNBCModal(false)}
              onRequestClose={() => isNBCModal}
              size="s"
              closed={!isNBCModal}
            >
              <NCB
                existingPolicyPercentage={existingPolicyPercentage}
                setExistingPolicyPercentage={setExistingPolicyPercentage}
                setIsNBCModal={setIsNBCModal}
              />
            </Modal>
          </Container>
        </Container>
        <Container className={styles.mainContainer}>
          <Container className={styles.filtersComponent}>
            <Container className={styles.quickfiltersContainer}>
              <Text appearance="heading-xxs">Quick filters </Text>
              <Container className={styles.quickfilter}>
                <Container className={styles.depricationContainer}>
                  <Input
                    size="small"
                    type="radio"
                    label="Zero Depreciation Cover"
                    name="depreciation"
                  />
                  <Text appearance="body-xs">
                    Also called &apos;Bumper-to-Bumper&apos; cover
                  </Text>
                </Container>
                <Container className={styles.radioBadge}>
                  <Input
                    size="small"
                    type="radio"
                    label="PA Cover"
                    name="PACover"
                  />
                  <Badge
                    label="Mandate by IRDAI"
                    className={styles.badge}
                    size="small"
                  />
                </Container>
              </Container>
            </Container>
            <AddOns />
          </Container>
          <Container className={styles.plansCardsSectionContainer}>
            <Container className={styles.plansCardsSectionHeading}>
              <Text appearance="heading-xs">{quoteContainer.length || 0} Plans found</Text>
              <Text className={styles.orderId}>Order ID: MH28XK08H92</Text>
            </Container>
            {quoteContainer.map((item, index) => (
              <Container key={index} className={styles.plansCardsSection}>
                <InsurancePlanCardDesktop
                  item={item}
                  setSelectedPlan={setSelectedPlan}
                  setIsShowPlanDetailsModal={setIsShowPlanDetailsModal}
                />
              </Container>
            ))}
            {/* <Container className={styles.plansCardsSection}>
              <InsurancePlanCardDesktop
                setIsShowPlanDetailsModal={setIsShowPlanDetailsModal}
              />
              <InsurancePlanCardDesktop
                setIsShowPlanDetailsModal={setIsShowPlanDetailsModal}
              />
              <InsurancePlanCardDesktop
                setIsShowPlanDetailsModal={setIsShowPlanDetailsModal}
              />
            </Container> */}
          </Container>
          <Container className={styles.contactHelpContainer}>
            <ContactDetailHelp />
          </Container>
        </Container>
      </Container>

      <Modal
        kind="informational"
        onCloseCallback={() => setIsEditDetailsModal(false)}
        onRequestClose={() => isEditDetailsModal}
        size="m"
        closed={!isEditDetailsModal}
      >
        <Container className={styles.editDetailsModal}>
          {
            <>
              <VehicleEditDetails
                selectedCity={selectedCity}
                selectedRtu={selectedRtu}
                setShowRTU={setShowRTU}
                setShowVechileDetails={setShowVechileDetails}
                setIsEditDetailsBS={setIsEditDetailsBS}
                vechileType={vechileType}
                selectedYear={selectedYear}
                selectedBrand={selectedBrand}
                selectedModal={selectedModal}
                selectedPolicy={selectedPolicy}
                setIsEditDetailsModal={setIsEditDetailsModal}
                setShowModal={setShowModal}
                setEditRTU={setEditRTU}
                setEditmodelDetails={setEditmodelDetails}
              />
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "0.5rem",
                }}
              >
                <Button title="Update Plan" style={{ width: "75%" }} />
              </Container>
            </>
          }
          {/* {showRTU && (
            <Container>
              <EditCityRtu
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedRtu={selectedRtu}
                setSelectedRtu={setSelectedRtu}
                setIsEditDetailsBS={setIsEditDetailsBS}
                setShowRTU={setShowRTU}
              />
            </Container>
          )} */}
          {/* {showVechileDetails && (
            <EditBikeDetails
              setIsEditDetailsBS={setIsEditDetailsBS}
              setShowVechileDetails={setShowVechileDetails}
            />
          )}  */}
        </Container>
      </Modal>
      {/* {showRTU && (
        <Container>
          <VehicleModal/>
        </Container>
      )} */}

      <Modal
        style={{ marginTop: "8rem" }}
        kind="informational"
        onCloseCallback={() => setIsShowPlanDetailsModal(false)}
        onRequestClose={() => isShowPlanDetailsModal}
        size="m"
        closed={!isShowPlanDetailsModal}
      >
        <Container className={styles.planDetailsModal}>
          <PlanDetails selectedPlan={selectedPlan}
            NCBValue={formData?.NCBValue}
          />
        </Container>
      </Modal>
    </>
  );
};

export default QuotePageDesktop;
