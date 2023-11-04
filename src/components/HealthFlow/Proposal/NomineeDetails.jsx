import React, { useState } from "react";
import styles from "@/styles/HealthFlow/Proposal/NomineeDetails.module.scss";
import { Button, Container, Input, InputDate, Text } from "@jds/core";
import HeadingSection from "./HeadingSection";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";


const NomineeDetails = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `Enter a valid  ${fieldName}`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
    }
  };

  return (
    <>
      <Container className={styles.nomineeDetailsContainer}>
        <Container className={styles.nomineeDetails}>
          {type === "bike" ? (
            <Text appearance="heading-xs">Nominee Details</Text>
          ) : (
            <HeadingSection
              title="Add nominee details"
              subTitle="God forbid, in case of any mishappening to the proposer, nominee is the person who gets the benefits."
            />
          )}
          <Container className={styles.nomineeInputFields}>
            <Container className={styles.nameDOB}>
              <Input
                className={styles.inputField}
                id="Name"
                label="Nominee's Name "
                max={100}
                maxLength={150}
                min={0}
                value={formData?.nomineeName}
                onChange={(e) => {
                  dispatch(updateField("nomineeName", e.target.value));
                  validateField("nomineeName", e.target.value);
                }}
                state={errors["nomineeName"] ? "error" : ""}
                stateConfig={{
                  errorText: errors["nomineeName"],
                }}
                name="fullName"
                required
                size="small"
              />
              <InputDate
                className={styles.inputField}
                id="dob"
                label="Nominee's Date of birth"
                name="dateOfBirth"
                required
                value={formData?.nomineeDoB}
                onChange={(e) => {
                  dispatch(updateField("nomineeDoB", e));
                  validateField("nomineeDoB", e);
                }}
                datePicker
                state={errors["nomineeDoB"] ? "error" : ""}
                stateConfig={{
                  errorText: errors["nomineeDoB"],
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
                type="date"
                size="small"
              />
            </Container>
            <Input
              className={styles.inputFieldDropdown}
              id="nominees_relationship"
              label="Nominee's Relationship"
              max={100}
              maxLength={250}
              min={0} 
              name="nomineeRelationship"
              value={formData?.nomineeRelationship}
              onChange={(e) => {
                dispatch(updateField("nomineeRelationship", e.target.value));
                validateField("nomineeRelationship", e.target.value);
              }}
              size="small"
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
                      label: "Father",
                      prefix: undefined,
                      value: "father",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Mother",
                      prefix: undefined,
                      value: "mother",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Brother",
                      prefix: undefined,
                      value: "brother",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Sister",
                      prefix: undefined,
                      value: "sister",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Son",
                      prefix: undefined,
                      value: "son",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "Daughter",
                      prefix: undefined,
                      value: "daughter",
                    },
                    {
                      type: "divider",
                    },
                  ],
                },
                range: {
                  editableTextBox: true,
                },
                toggle: {
                  labelPosition: "left",
                },
              }}
              required
              state={errors["nomineeRelationship"] ? "error" : ""}
              stateConfig={{
                errorText: errors["nomineeRelationship"],
              }}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default NomineeDetails;
