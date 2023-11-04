import React, { useState } from "react";
import { Container, Text, Input } from "@jds/core";
import styles from "@/styles/HealthFlow/Proposal/ProposerDetails.module.scss";
import HeadingSection from "./HeadingSection";

const ProposerDetails = () => {
  return (
    <>
      <Container className={styles.proposerDetailsContainer}>
        <Container className={styles.proposerDetails}>
        <HeadingSection title="Proposer Details" subTitle="Tax benefits are available to the proposer"/>
        <Container className={styles.inputFieldsContainer}>
          <Container className={styles.inputContainer1}>
            <Container className={styles.proposalContainer}>
              <Text appearance="body-s-bold">Select Proposer</Text>
              <Container className={styles.prosperInputFields}>
                <Container className={styles.prosperLabelContainer}>
                  <Input
                    className={styles.prosperInputField}
                    id="self"
                    label="Self"
                    max={100}
                    maxLength={250}
                    min={0}
                    name="prosper"
                    value="self"
                    size="small"
                    //   onChange={(e) =>
                    //     setFormData((prev) => ({
                    //       ...prev,
                    //       prosper: e.target.value,
                    //     }))
                    //   }
                    type="radio"
                  />
                </Container>
                <Container className={styles.prosperLabelContainer}>
                  <Input
                    className={styles.prosperInputField}
                    id="spouse"
                    label="Spouse"
                    max={100}
                    maxLength={250}
                    min={0}
                    name="prosper"
                    value="spouse"
                    size="small"
                    //   onChange={(e) =>
                    //     setFormData((prev) => ({
                    //       ...prev,
                    //       prosper: e.target.value,
                    //     }))
                    //   }
                    type="radio"
                  />
                </Container>
              </Container>
            </Container>
            <Container className={styles.genderPanContainer}>
              <Container className={styles.proposalContainer}>
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
                      type="radio"
                    />
                  </Container>
                </Container>
              </Container>
              <Input
                className={styles.inputField}
                id="panNumber"
                maxLength={10}
                label="PAN No."
                min={0}
                name="panNumber"
                size="small"
                state={
                  formData?.panNumber?.length > 0 &&
                    !regexCheck(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, formData.panNumber)
                    ? "error"
                    : ""
                }
                stateConfig={{
                  errorText: "Enter valid PAN number",
                }}
                // onChange={(e) =>
                //   setFormData((prev) => ({ ...prev, panNumber: e.target.value.toUpperCase() }))
                // }
                 value={formData?.panNumber.toUpperCase()}
                type="text"
              />
            </Container>

            <Container className={styles.mobileNumAndEmail}>
              <Input
                className={styles.inputField}
                id="phoneNumber"
                label="Mobile number"
                maxLength={10}
                min={0}
                name="mobileNumber"
                size="small"
                // onChange={(e) => {
                //   // if (e.target.value.length <= 10)
                //   setFormData((prev) => ({
                //     ...prev,
                //     mobileNumber: e.target.value,
                //   }));
                // }}
                state={
                  formData?.mobileNumber.length > 0 &&
                    !regexCheck(/^[6-9]\d{9}$/, formData.mobileNumber)
                    ? "error"
                    : ""
                }
                stateConfig={{
                  errorText: "Enter valid mobile number",
                }}
                type="text"
                // value={formData.mobileNumber}
              />
              <Input
                className={styles.inputField}
                id="email"
                label="Email Id"
                max={100}
                maxLength={250}
                min={0}
                name="email"
                size="small"
                //   state={
                //     formData.email.length > 0 &&
                //     !regexCheck(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, formData.email)
                //       ? "error"
                //       : ""
                //   }
                //   stateConfig={{
                //     errorText: "Enter valid mail",
                //   }}
                //   onChange={(e) =>
                //     setFormData((prev) => ({ ...prev, email: e.target.value }))
                //   }
                // required
                type="email"
              />
            </Container>
          </Container>
          <Container className={styles.permanentAddressContainer}>

          </Container>
          <Container
            className={styles.communicationAddressContainer}
          >

          </Container>
        </Container>
        </Container>
      </Container>
    </>
  );
};

export default ProposerDetails;
