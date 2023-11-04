import React, { useEffect, useState } from "react";
import { Button, Container, Input, InputDate, Text } from "@jds/core";
import HeadingSection from "@/components/HealthFlow/Proposal/HeadingSection";
import styles from "@/styles/BikeFlow/PreQuote/BottomSheetsPreQuote.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";

const PrevInsuranceDetailsBS = (props) => {
  const { setPrevInsuranceBS, setIsExistingPolicyClaim } = props;
  const [isPolicyDate, setIsPolicyDate] = useState(true);
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
  const [fieldsCompleted, setFieldsCompleted] = useState(false);
  const [fieldValues, setFieldValues] = useState({
    prevExpiryDate: "",
    previousPolicyType: "",
    previousPolicyInsurer: "",
  });

  useEffect(() => {
    const allFieldsCompleted = Object.values(fieldValues).every(Boolean);
    setFieldsCompleted(allFieldsCompleted);
  }, [fieldValues]);

  return (
    <>
      <Container className={styles.prevInsuranceDetailsContainer}>
        <HeadingSection
          title="Previous Insurance Details"
          subTitle="2 step away from insurance policies"
        />
        <Container className={styles.inputFieldsContainer}>
          {isPolicyDate ? (
            <Container className={styles.inputFieldWithText}>
              <InputDate
                className={styles.inputField}
                id="prevExpiryDate"
                label="Previous expiry date"
                name="prevExpiryDate"
                required
                value={formData?.prevExpiryDate}
                datePicker       
                onChange={(e) => {
                  // setFormData((prev) => ({ ...prev, dateOfBirth: e }))
                  dispatch(updateField("prevExpiryDate", e));
                  setFieldValues({ ...fieldValues, prevExpiryDate: e });
                }}
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
                max={100}
                maxLength={250}
                min={0}
                name="policyExpired"
                value={formData?.prevExpiryDate}
                onChange={(e) => {
                  dispatch(updateField("prevExpiryDate", e.target.value));
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
          <Input
            className={styles.inputField}
            label="Previous policy type"
            max={100}
            maxLength={250}
            min={0}
            name="PreviousPolicyType"
            value={formData?.previousPolicyType}
            onChange={(e) => {
              dispatch(updateField("previousPolicyType", e.target.value));
              setFieldValues({
                ...fieldValues,
                previousPolicyType: e.target.value,
              });
            }}
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
            required
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
              dispatch(updateField("previousPolicyInsurer", e.target.value));
              setFieldValues({
                ...fieldValues,
                previousPolicyInsurer: e.target.value,
              });
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
                 
                ],
              },
            }}
            required
          />
          <Button
            title="Confirm"
            onClick={() => {
              setPrevInsuranceBS(false), setIsExistingPolicyClaim(true);
            }}
            disabled={!fieldsCompleted}
          />
        </Container>
      </Container>
    </>
  );
};

export default PrevInsuranceDetailsBS;
