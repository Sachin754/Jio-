import React, { useState } from "react";
import styles from "@/styles/BikeFlow/Proposal/PersonalDetails.module.scss";
import { Container, Input, InputDate, Text } from "@jds/core";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";
import regexCheck from "@/components/regexCheck";


const PersonalDetails = (props) => {
  const { isHideHeading } = props;
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  return (
    <>
      <Container className={styles.personalDetailsContainer}>
        {isHideHeading ? "" : <Text appearance="heading-xs">Personal Details</Text>}
        <Container className={styles.fieldsContainer}>
          <Text appearance="body-s-bold">Select Gender</Text>
          <Container className={styles.prosperInputFields}>
            <Container className={styles.prosperLabelContainer}>
              <Input
                className={styles.prosperInputField}
                id="male"
                label="Male"
                max={100}
                maxLength={250}
                min={0}
                name="Gender"
                value="male"
                size="small"
                //   onChange={(e) =>
                //     setFormData((prev) => ({
                //       ...prev,
                //       prosper: e.target.value,
                //     }))
                //   }
                onInvalid={function noRefCheck() {}}
                checked={formData?.gender === "male"}
                onChange={(e) => {
                  dispatch(updateField("gender", e.target.value));
                }}
                placeholder=""
                type="radio"
              />
            </Container>
            <Container className={styles.prosperLabelContainer}>
              <Input
                className={styles.prosperInputField}
                id="female"
                label="Female"
                max={100}
                maxLength={250}
                min={0}
                name="Gender"
                value="Female"
                size="small"
                //   onChange={(e) =>
                //     setFormData((prev) => ({
                //       ...prev,
                //       prosper: e.target.value,
                //     }))
                //   }
                onInvalid={function noRefCheck() {}}
                onPrefixClick={function noRefCheck() {}}
                onSuffixClick={function noRefCheck() {}}
                checked={formData?.gender === "Female"}
                onChange={(e) => {
                  dispatch(updateField("gender", e.target.value));
                }}
                placeholder=""
                type="radio"
              />
            </Container>
          </Container>
          <Container className={styles.panAndDOB}>
            <Input
              className={styles.inputField}
              id="PanNumber"
              label="Valid PAN card number"
              max={100}
              maxLength={250}
              min={0}
              name="PanNumber"
              value={formData?.panNumber}
              onChange={(e) => {
                dispatch(updateField("panNumber", e.target.value.toUpperCase()));
              }}
              type="text"
              size="small"
              state={
                formData?.panNumber?.length > 0 &&
                  !regexCheck(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, formData.panNumber)
                  ? "error"
                  : ""
              }
              stateConfig={{
                errorText: "Enter a valid PAN card number",
              }}
              required
            />
            <InputDate
              className={styles.inputField}
              id="dob"
              label="Date of birth (DOB)"
              name="dateOfBirth"
              value={formData?.dob}
              onChange={(e) => {
                dispatch(updateField("dob", e));
              }}
              required
              datePicker
              max={new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())} // Set min to 18 years ago
              min={new Date(new Date().getFullYear() - 100, new Date().getMonth(), new Date().getDate())} // Set max to 100 years ago
              state={formData?.dob?.length > 0 && !regexCheck(/^\d{4}-\d{2}-\d{2}$/, formData?.dob)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid date of birth",
              }}
              type="date"
              size="small"
            />
          </Container>
          <Container className={styles.GSTNumAndAadhar}>
            <Input
              className={styles.inputField}
              id="GSTNumber"
              label="Enter GST No. (Optional)"
              max={100}
              maxLength={250}
              min={0}
              name="GSTNumber"
              value={formData?.GSTNumber}
              onChange={(e) => {
                dispatch(updateField("GSTNumber", e.target.value));
              }}
              type="number"
              state={
                formData?.GSTNumber?.length > 0 &&
                  !regexCheck(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[Z]{1}[A-Z\d]{1}$/, formData.GSTNumber)
                  ? "error"
                  : ""
              }
              stateConfig={{
                errorText: "Enter a valid GST number",
              }}
              required
            />
            <Input
              className={styles.inputField}
              id="aadharNumber"
              label="Aadhar No. (Optional)"
              max={100}
              maxLength={250}
              min={0}
              name="aadharNumber"
              value={formData?.aadharNumber}
              onChange={(e) => {
                dispatch(updateField("aadharNumber", e.target.value));
              }}
              type="number"
              state={
                formData?.aadharNumber?.length > 0 &&
                  !regexCheck(/^\d{12}$/, formData.aadharNumber)
                  ? "error"
                  : ""
              }
              stateConfig={{
                errorText: "Enter a valid Aadhar card number",
              }}
              required
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default PersonalDetails;
