import React, { useState } from "react";
import styles from "@/styles/BikeFlow/Proposal/TwoWheelerDetails.module.scss";
import { Container, Input, InputDate, Text } from "@jds/core";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";
import regexCheck from "@/components/regexCheck";

const TwoWheelerDetails = (props) => {
  const { isHideHeading } = props;
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  return (
    <>
      <Container className={styles.twoWheelerDetailsContainer}>
        {isHideHeading ? (
          ""
        ) : (
          <Text appearance="heading-xs">Your Two-Wheeler Details</Text>
        )}
        <Container className={styles.fieldsContainer}>
          <Container className={styles.registrationNumberAndDate}>
            <Input
              className={styles.inputField}
              id="registrationNumber"
              label="Registration Number"
              maxLength={10}
              min={0}
              name="registrationNumber"
              size="small"
              value={formData?.registrationNumber}
              // onChange={(e) => {
              //   // if (e.target.value.length <= 10)
              //   setFormData((prev) => ({
              //     ...prev,
              //     mobileNumber: e.target.value,
              //   }));
              // }}
              // state={
              //   formData.mobileNumber.length > 0 &&
              //     !regexCheck(/^[6-9]\d{9}$/, formData.mobileNumber)
              //     ? "error"
              //     : ""
              // }
              onChange={(e) => {
                dispatch(updateField("registrationNumber", e.target.value.toUpperCase()));
              }}
              state={formData?.registrationNumber?.length > 0 && !regexCheck(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/, formData?.registrationNumber)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid registration number",
              }}
              type="text"
              required
            />
            <InputDate
              className={styles.inputField}
              id="registrationDate"
              label="Registration Date"
              name="registrationDate"
              required
              value={formData?.registrationDate}
              onChange={(e) => {
                dispatch(updateField("registrationDate", e));
              }}
              datePicker
              state={formData?.registrationDate?.length > 0 && !regexCheck(/^\d{4}-\d{2}-\d{2}$/, formData?.registrationDate)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid date of registration",
              }}
              max={
                new Date(
                  new Date().getFullYear() - 18,
                  new Date().getMonth(),
                  new Date().getDate()
                )
              }
              min={
                new Date(
                  new Date().getFullYear() - 100,
                  new Date().getMonth(),
                  new Date().getDate()
                )
              }
              type="date"
              size="small"
            />
          </Container>
          <Container className={styles.engineAndChasisNumber}>
            <Input
              className={styles.inputField}
              id="engineNumber"
              label="Engine No."
              maxLength={10}
              min={0}
              name="engineNumber"
              size="small"
              value={formData?.engineNumber}
              // onChange={(e) => {
              //   // if (e.target.value.length <= 10)
              //   setFormData((prev) => ({
              //     ...prev,
              //     mobileNumber: e.target.value,
              //   }));
              // }}
              // state={
              //   formData.mobileNumber.length > 0 &&
              //     !regexCheck(/^[6-9]\d{9}$/, formData.mobileNumber)
              //     ? "error"
              //     : ""
              // }
              onChange={(e) => {
                dispatch(updateField("engineNumber", e.target.value));
              }}
              state={formData?.engineNumber?.length > 0 && !regexCheck(/^[A-Z0-9]{6,20}$/, formData?.engineNumber)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid engine number",
              }}
              type="text"
              required
            />
            <Input
              className={styles.inputField}
              id="chassisNumber"
              label="Chassis No."
              //maxLength={10}
              min={0}
              name="chassisNumber"
              size="small"
              value={formData?.chassisNumber}
              // onChange={(e) => {
              //   // if (e.target.value.length <= 10)
              //   setFormData((prev) => ({
              //     ...prev,
              //     mobileNumber: e.target.value,
              //   }));
              // }}
              // state={
              //   formData.mobileNumber.length > 0 &&
              //     !regexCheck(/^[6-9]\d{9}$/, formData.mobileNumber)
              //     ? "error"
              //     : ""
              // }
              onChange={(e) => {
                dispatch(updateField("chassisNumber", e.target.value));
              }}
              state={formData?.chassisNumber?.length > 0 && !regexCheck(/^[A-Z0-9]{17}$/, formData?.chassisNumber)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid chassis number",
              }}
              type="text"
              required
            />
          </Container>
          <Container className={styles.vehicleFinancedDetails}>
            <Container className={styles.radioBtnsContainer}>
              <Text appearance="body-s-bold">Is your bike financed?</Text>
              <Container className={styles.prosperInputFields}>
                <Container className={styles.prosperLabelContainer}>
                  <Input
                    className={styles.prosperInputField}
                    id="yes"
                    label="Yes"
                    max={100}
                    maxLength={250}
                    min={0}
                    name="Yes"
                    // value=""
                    size="small"
                    //   onChange={(e) =>
                    //     setFormData((prev) => ({
                    //       ...prev,
                    //       prosper: e.target.value,
                    //     }))
                    //   }
                    value="Yes"
                    checked={formData?.isBikeFinanced === "Yes"}
                    onChange={(e) => {
                      dispatch(updateField("isBikeFinanced", "Yes"));
                    }}
                    type="radio"
                  />
                </Container>
                <Container className={styles.prosperLabelContainer}>
                  <Input
                    className={styles.prosperInputField}
                    id="no"
                    label="No"
                    max={100}
                    maxLength={250}
                    min={0}
                    name="No"
                    size="small"
                    //   onChange={(e) =>
                    //     setFormData((prev) => ({
                    //       ...prev,
                    //       prosper: e.target.value,
                    //     }))
                    //   }
                    value="No"
                    checked={formData?.isBikeFinanced === "No"}
                    onChange={(e) => {
                      dispatch(updateField("isBikeFinanced", "No"));
                    }}
                    type="radio"
                  />
                </Container>
              </Container>
            </Container>
            <Input
              className={styles.inputField}
              id="financedBy"
              label="Financed by"
              maxLength={10}
              min={0}
              name="FinancedBy"
              size="small"
              // onChange={(e) => {
              //   // if (e.target.value.length <= 10)
              //   setFormData((prev) => ({
              //     ...prev,
              //     mobileNumber: e.target.value,
              //   }));
              // }}
              // state={
              //   formData.mobileNumber.length > 0 &&
              //     !regexCheck(/^[6-9]\d{9}$/, formData.mobileNumber)
              //     ? "error"
              //     : ""
              // }
              value={formData?.financedBy}
              onChange={(e) => {
                dispatch(updateField("financedBy", e.target.value));
              }}
              state={formData?.financedBy?.length > 0
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid finance source",
              }}
              type="text"
              required
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default TwoWheelerDetails;
