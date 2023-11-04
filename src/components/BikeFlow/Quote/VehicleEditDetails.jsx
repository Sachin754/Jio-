import React, { useState } from "react";
import HeadingSection from "@/components/HealthFlow/Proposal/HeadingSection";
import styles from "@/styles/BikeFlow/Quote/VehicleEditDetails.module.scss";
import { IcChevronDown, IcChevronRight } from "@jds/core-icons";
import { Button, Container, Divider, Icon, Input, InputDate, Text } from "@jds/core";
import CityDropdown from "./CityDropdown";
import ModelDropdown from "./ModelDropdown";
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from "@/components/Redux/action";

const VehicleEditDetails = (props) => {
  const {
    setIsEditDetailsBS,
    setShowRTU,
    setShowVechileDetails,
    selectedCity,
    selectedRtu,
    vechileType,
    selectedYear,
    selectedBrand,
    selectedModal,
    setIsEditDetailsModal,
    setShowModal,
    setEditRTU,
    onState,
    setEditmodelDetails
  } = props;

  const [selectedExsistingPolicy, setSelectedExsistingPolicy] = useState(null);
  const ncbValues = [
    { percent: "0%" },
    { percent: "20%" },
    { percent: "25%" },
    { percent: "35%" },
    { percent: "45%" },
    { percent: "50%" },
  ];
  const years = [
    { year: 2023 },
    { year: 2022 },
    { year: 2021 },
    { year: 2020 },
    { year: 2019 },
    { year: 2018 },
    { year: 2017 },
    { year: 2016 },
    { year: 2015 },
    { year: 2014 },
    { year: 2013 },
    { year: 2012 },
    { year: 2011 },
    { year: 2010 },
    { year: 2009 },
    { year: 2008 },
    { year: 2007 },
    { year: 2006 },
    { year: 2005 },
    { year: 2004 },
    { year: 2003 },
  ];
  const vechileDetails = [
    { label: "Suzuki Gixer", value: "Suzuki Gixer" },
    {
      label: "Bajaj Avenger 160 Street (160CC)",
      value: "Bajaj Avenger 160 Street (160CC)",
    },
    {
      label: "Hero Honda Passion Plus Spock Kick Disc (100CC)",
      value: "Hero Honda Passion Plus Spock Kick Disc (100CC)",
    },
  ];

  const cityDetails = [
    { label: "RJ20 -Kota", value: "RJ20 -Kota" },
    { label: "RJ21- Kota", value: "RJ21 -Kota" },
  ];
  const [selectedNCBValue, setSelectedNCBValue] = useState(0);
  const [displayedYears, setDisplayedYears] = useState(8);
  const [isPolicyDate, setIsPolicyDate] = useState(true);
  const dispatch = useDispatch();
  const [openCityDropdown, setOpenCityDropdown] = useState(false);
  const [openModelDropdown, setOpenModelDropdown] = useState(false);
  const [selectedRegYear, setSelectedregYear] = useState(null);
  const content =
    selectedCity != "" && selectedRtu != ""
      ? `${selectedRtu} (${selectedCity})`
      : "RJ-20 (Kota)";

  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  return (
    <>
      <Container className={styles.vehicleEditDetailsContainer}>
        <HeadingSection title={`Your ${vechileType} details`} />

        <Container className={styles.rtoVehicleDetails}>
          <Container className={styles.rtoCityIconContainer}>
            <Container
              className={styles.rtoCityContainer}
              style={{ position: "relative" }}
              displayOn="tablet"
            >
              <Text appearance="body-xs" className={styles.rtoField}>
                Select RTO or City{" "}
              </Text>
              <Text appearance="body-s-bold" className={styles.rtoValue}>
                {content}
              </Text>
              {openCityDropdown && (
                <CityDropdown style={{ position: "absolute" }} />
              )}
            </Container>

            <Container displayOn="desktop" style={{ display: "flex", alignItems: "center", position: "relative" }}>
              <Input type="text" label="Select RTU or City" value="RJ-20-Kota" readOnly />
              <Icon ic={openCityDropdown === true ? 'IcChevronUp' : 'IcChevronDown'}
                className={styles.iconStyling}
                onClick={() => {
                  setShowRTU(true);
                  setIsEditDetailsBS(false);
                  // setIsEditDetailsModal(false);
                  // setShowModal(true);
                  // setEditRTU(true);
                  setOpenCityDropdown((prev) => !prev);

                }}
              />
              {openCityDropdown && <CityDropdown style={{ position: "absolute" }} />}

            </Container>
            <Container displayOn="tablet">
              <IcChevronRight
                className={styles.iconStyling}
                onClick={() => {
                  setShowRTU(true);
                  setIsEditDetailsBS(false);
                }}
              />
            </Container>
          </Container>
          <Container displayOn="tablet">
            <Divider />
          </Container>
          <Container className={styles.rtoCityIconContainer}>
            <Container
              className={styles.rtoCityContainer}
              style={{ position: "relative" }}
              displayOn="tablet"
            >
              <Text appearance="body-xs" className={styles.rtoField}>
                Vehicle details
              </Text>
              <Text appearance="body-s-bold" className={styles.rtoValue}>
                {`${formData?.bikeCompany || ''} (${formData?.bikeModel || ''})`}
              </Text>

            </Container>

            <Container displayOn="desktop" style={{ display: "flex", alignItems: "center", position: "relative" }}>
              <Input type="text" value='Suzuki Gixxer PLUS Petrol 150CC' label="Vechile Details" readOnly />
              <Icon ic={openModelDropdown == true ? 'IcChevronUp' : "IcChevronDown"}
                className={styles.iconStyling}
                onClick={() => {
                  setShowVechileDetails(true);
                  setIsEditDetailsBS(false);
                  // setIsEditDetailsModal(false);
                  // setShowModal(true);
                  // setEditmodelDetails(true);
                  setOpenModelDropdown((prev) => !prev);
                }}
              />
              {openModelDropdown && (
                <ModelDropdown style={{ position: "absolute" }} />
              )}
            </Container>
            <Container displayOn="tablet">
              <IcChevronRight
                className={styles.iconStyling}
                onClick={() => {
                  setShowVechileDetails(true);
                  setIsEditDetailsBS(false);
                }}
              />
            </Container>
          </Container>
        </Container>
        <Container displayOn="tablet">
          <Divider />
        </Container>
        <Container className={styles.registrationYearsContainer}>
          <Text appearance="body-xs" className={styles.title}>
            Registration Year
          </Text>
          <Container className={styles.years}>
            {years.slice(0, displayedYears).map((item, index) => (
              <>
                {item.year === 2016 ? (
                  <Container
                    className={
                      selectedRegYear == item.year
                        ? styles.selectedYearStyling
                        : styles.year
                    }
                    onClick={() => {
                      setSelectedregYear(item.year);
                      setDisplayedYears(20);
                      dispatch(updateField('registrationYear', item.year));
                    }}
                  >
                    <Text appearance="body-xs" className={styles.title}>
                      {displayedYears > 9 ? item.year : "More"}
                    </Text>
                  </Container>
                ) : (
                  <Container
                    className={
                      selectedRegYear == item.year
                        ? styles.selectedYearStyling
                        : styles.year
                    }
                    key={index}
                    onClick={() => {
                      setSelectedregYear(item.year);
                      dispatch(updateField('registrationYear', item.year));
                    }}
                  >
                    <Text appearance="body-xs" className={styles.title}>
                      {item.year}
                    </Text>
                  </Container>
                )}
              </>
            ))}
          </Container>
        </Container>
        <Container displayOn="desktop">
          <Divider />
        </Container>
        <Container className={styles.policyTypeDate}>
          <Input
            className={styles.inputField}
            type="dropdown"
            label="Policy you want to buy"
            style={{ width: "100%" }}
            value={formData?.bikePolicy}
            onChange={(e) => {
              dispatch(updateField('bikePolicy', e.target.value));
            }}
            typeConfig={{
              dropdown: {
                items: [
                  {
                    disabled: false,
                    label: "Comprehensive Policy",
                    prefix: undefined,
                    value: "comprehensive policy",
                  },
                  {
                    type: "divider",
                  },
                  {
                    disabled: false,
                    label: "Third Party",
                    prefix: undefined,
                    value: "third party",
                  },
                  {
                    type: "divider",
                  },
                ],
              },
            }}
          />
          {isPolicyDate ? (
            <Container className={styles.inputFieldWithText}>
              <InputDate
                className={styles.inputField}
                id="prevExpiryDate"
                label="Previous expiry date"
                name="prevExpiryDate"
                value={formData?.prevExpiryDate}
                onChange={(e) => {
                  dispatch(updateField('prevExpiryDate', e));
                }}
                // required
                datePicker
                //   onChange={(e) =>
                //     setFormData((prev) => ({ ...prev, dateOfBirth: e }))
                //   }
                max={
                  new Date(
                    new Date().getFullYear() - 18,
                    new Date().getMonth(),
                    new Date().getDate()
                  )
                } // Set min to 18 years ago
                min={
                  new Date(
                    new Date().getFullYear() - 100,
                    new Date().getMonth(),
                    new Date().getDate()
                  )
                } // Set max to 100 years ago
                // value={formData.dateOfBirth}
                type="date"
                size="small"
              />
              <Text
                appearance="body-xs-bold"
                className={styles.policyText}
                onClick={() => {
                  setIsPolicyDate(false);
                }}
              >
                Don’t know policy expired date
              </Text>
            </Container>
          ) : (
            <Container className={styles.inputFieldWithText}>
              <Input
                className={styles.inputField}
                label="When did you policy expired"
                value={formData?.prevExpiryDate}
                max={100}
                maxLength={250}
                min={0}
                name="policyExpired"
                onChange={(e) => {
                  dispatch(updateField('prevExpiryDate', e));
                }}
                type="dropdown"
                typeConfig={{
                  dropdown: {
                    items: [
                      {
                        disabled: false,
                        label: "Not Expired",
                        prefix: undefined,
                        value: "Not Expired",
                      },
                      {
                        type: "divider",
                      },
                      {
                        disabled: false,
                        label: "Expired in last 90 Days",
                        prefix: undefined,
                        value: "Expired in last 90 Days",
                      },
                      {
                        type: "divider",
                      },
                      {
                        disabled: false,
                        label: "Expired more then 90 days ago",
                        prefix: undefined,
                        value: "Expired more then 90 days ago",
                      },
                      {
                        type: "divider",
                      },
                      {
                        disabled: false,
                        label: "Don’t remember",
                        prefix: undefined,
                        value: "Don’t remember",
                      },
                      {
                        type: "divider",
                      },
                    ],
                  },
                }}
              />
              <Text
                appearance="body-xs-bold"
                className={styles.policyText}
                onClick={() => {
                  setIsPolicyDate(true);

                }}
              >
                I know policy expired date
              </Text>
            </Container>
          )}
        </Container>
        <Container displayOn="tablet">
          <Divider />
        </Container>
        <Container className={styles.prevPolicyTypeInsurer}>
          <Input
            className={styles.inputField}
            label="Previous policy type"
            max={100}
            maxLength={250}
            min={0}
            name="Previous policy type"
            onChange={(e) => {
              dispatch(updateField('previousPolicyType', e.target.value))
            }}
            value={formData?.previousPolicyType}
            type="dropdown"
            typeConfig={{
              dropdown: {
                items: [
                  {
                    disabled: false,
                    label: "Comprehensive policy",
                    prefix: undefined,
                    value: "Comprehensive policy",
                  },
                  {
                    type: "divider",
                  },
                  {
                    disabled: false,
                    label: "Third Party",
                    prefix: undefined,
                    value: "Third Party",
                  },
                  {
                    type: "divider",
                  },
                  {
                    disabled: false,
                    label: "Standalone Own Damage",
                    prefix: undefined,
                    value: "Standalone Own Damage",
                  },
                ],
              },
            }}
          />
          <Input
            className={styles.inputField}
            label="Previous Insurer"
            max={100}
            maxLength={250}
            min={0}
            name="previousPolicyInsurer"
            value={formData?.previousPolicyInsurer}
            onChange={(e) => {
              dispatch(updateField('previousPolicyInsurer', e.target.value))
            }}
            type="dropdown"
            typeConfig={{
              dropdown: {
                items: [
                  {
                    disabled: false,
                    label: "National Insurance",
                    prefix: undefined,
                    value: "National Insurance",
                  },
                  {
                    type: "divider",
                  },
                  // {
                  //   disabled: false,
                  //   label: "Arunachal Pradesh",
                  //   prefix: undefined,
                  //   value: "arunachal pradesh",
                  // },
                  // {
                  //   type: "divider",
                  // },
                  // {
                  //   disabled: false,
                  //   label: "Assam",
                  //   prefix: undefined,
                  //   value: "assam",
                  // },
                  // {
                  //   type: "divider",
                  // },
                ],
              },
            }}
          />
        </Container>
        <Container className={styles.exsistingPolicy}>
          <Input
            className={styles.inputField}
            label="Existing Policy Claim Status"
            max={100}
            maxLength={250}
            min={0}
            value={formData?.policyClaim}
            name="ExistingPolicyStatus"
            onChange={(e) => {
              dispatch(updateField('policyClaim', e.target.value));
              setSelectedExsistingPolicy(e.target.value)
            }}
            type="dropdown"
            typeConfig={{
              dropdown: {
                items: [
                  {
                    disabled: false,
                    label: "Yes",
                    prefix: undefined,
                    value: "Yes",
                  },
                  {
                    type: "divider",
                  },
                  {
                    disabled: false,
                    label: "No",
                    prefix: undefined,
                    value: "No",
                  },
                  {
                    type: "divider",
                  },
                ],
              },
            }}
          />
          {selectedExsistingPolicy === "No" && (
            <Container className={styles.ncbContainer}>
              <Text
                appearance="body-s"
                style={{ color: "var(--secondary-color-80)" }}
              >
                Select your Exisiting NCB
              </Text>
              <Container className={styles.valuesContainer}>
                {ncbValues.map((item, index) => (
                  <Container
                    className={
                      item.percent == selectedNCBValue
                        ? styles.activeValueBorder
                        : styles.valueBorder
                    }
                    key={index}
                    onClick={() => {
                      setSelectedNCBValue(item.percent);
                      dispatch(updateField('NCBValue', item.percent))
                    }}
                  >
                    <Text appearance="body-s">{item.percent}</Text>
                  </Container>
                ))}
              </Container>
            </Container>
          )}
        </Container>
      </Container>
    </>
  );
};

export default VehicleEditDetails;
