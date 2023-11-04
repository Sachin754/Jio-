import React, { useState } from "react";
import { BottomSheet, Container, Input, InputDate, Text } from "@jds/core";
import styles from "@/styles/BikeFlow/Proposal/PreviousPolicyDetails.module.scss";
import InspectionRequired from "./InspectionRequired";

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";
import regexCheck from "@/components/regexCheck";

const PreviousPolicyDetails = (props) => {
  const { inspectionBS, setInspectionBS, isHideHeading } = props;

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  const [errors, setErrors] = useState({});

  return (
    <>
      <Container className={styles.policyDetailsContainer}>
        {isHideHeading ? (
          ""
        ) : (
          <Text appearance="heading-xs">Previous policy details</Text>
        )}
        <Container className={styles.fieldsContainer}>
          <InputDate
            className={styles.inputField}
            id="policytaken"
            label="Previous policy expired date"
            name="policydate"
            value={formData?.prevExpiryDate}
            onChange={(e) => {
              dispatch(updateField("prevExpiryDate", e));
            }}
            required
            datePicker
            state={formData?.prevExpiryDate?.length > 0 && !regexCheck(/^\d{4}-\d{2}-\d{2}$/, formData?.prevExpiryDate)
              ? "error"
              : ""
            }
            stateConfig={{
              errorText: "Enter a valid date",
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
          <Input
            id="expireddays"
            label="Expired more then 90 days ago"
            max={100}
            maxLength={250}
            min={0}
            name="expiredDaysCheck"
            //value={formData?.expiredDaysCheck}
            onChange={(e) => {
              dispatch(updateField('expiredDaysCheck', e.target.checked))
            }}

            // value=""
            size="small"
            //   onChange={(e) =>
            //     setFormData((prev) => ({
            //       ...prev,
            //       prosper: e.target.value,
            //     }))
            //   }
            type="checkbox"
            required
          />
          <Container className={styles.prepolicy}>
            <Input
              className={styles.inputField}
              id="previouspolicynumber"
              label="Previous policy number"
              max={100}
              maxLength={250}
              min={0}
              name="policyNumber"
              value={formData?.prePolicyNumber}
              onChange={(e) => {
                dispatch(updateField("prePolicyNumber", e.target.value));
              }}
              type="text"
              required
              state={formData?.prePolicyNumber?.length > 0 && !regexCheck(/^[A-Za-z0-9]{1,10}$/, formData?.prePolicyNumber)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid policy number",
              }}
            />
            <Input
              className={styles.inputField}
              label="TP Policy Insurer"
              max={100}
              maxLength={250}
              min={0}
              name="policyInsurer"
              value={formData?.policyInsurer}
              onChange={(e) => {
                dispatch(updateField("policyInsurer", e.target.value));
              }}
              type="dropdown"
              typeConfig={{
                checkbox: {
                  indeterminate: false,
                },
                code: {
                  length: 6,
                },
                dropdown: {
                  items: [
                    {
                      disabled: false,
                      label: "Bajaj Allianz",
                      prefix: undefined,
                      value: "Bajaj Allianz",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Arunachal Pradesh",
                      prefix: undefined,
                      value: "arunachal pradesh",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Assam",
                      prefix: undefined,
                      value: "assam",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Bihar",
                      prefix: undefined,
                      value: "bihar",
                    },
                    {
                      type: "divider",
                    },
                  ],
                },
              }}
              required
            />
          </Container>
        </Container>
      </Container>
      {inspectionBS && (
        <>
          <BottomSheet
            close={!inspectionBS}
            kind="overlay"
            onClickPrimary={function noRefCheck() { }}
            onClose={() => setInspectionBS(false)}
          // onRequestClose={() => {
          //   insuranceInfoBS;
          // }}
          >
            <InspectionRequired />
          </BottomSheet>
        </>
      )}
    </>
  );
};

export default PreviousPolicyDetails;
