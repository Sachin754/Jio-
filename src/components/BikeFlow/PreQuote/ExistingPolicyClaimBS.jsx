import React, { useState } from "react";
import { Button, Container, Heading, Input, InputDate, Text } from "@jds/core";
import HeadingSection from "@/components/HealthFlow/Proposal/HeadingSection";
import styles from "@/styles/BikeFlow/PreQuote/BottomSheetsPreQuote.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";

const ExistingPolicyClaimBS = (props) => {
  const { setIsLoading, setIsExistingPolicyClaim } = props;
  const [selectedNCBValue, setSelectedNCBValue] = useState("");
  const ncbValues = [
    { percent: "0%" },
    { percent: "20%" },
    { percent: "25%" },
    { percent: "35%" },
    { percent: "45%" },
    { percent: "50%" },
  ];
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
  const [policyClaim, setPolicyClaim] = useState("");

  return (
    <>
      <Container className={styles.existingPolicyClaimContainer}>
        <HeadingSection
          title="Did you make a claim in your existing policy?"
          subTitle=""
        />
        <Container className={styles.inputFieldsContainer}>
          <Container className={styles.prosperInputFields}>
            <Container className={styles.prosperLabelContainer}>
              <Input
                className={styles.prosperInputField}
                id="Yes"
                label="Yes"
                max={100}
                maxLength={250}
                min={0}
                name="policyClaim"
                value="Yes"
                size="small"
                onChange={(e) => {
                  // setFormData((prev) => ({
                  //   ...prev,
                  //   prosper: e.target.value,
                  // }))
                  dispatch(updateField("policyClaim", e.target.value));
                  setPolicyClaim("Yes");
                }}
                onInvalid={function noRefCheck() {}}
                placeholder=""
                type="radio"
              />
            </Container>
            <Container className={styles.prosperLabelContainer}>
              <Input
                className={styles.prosperInputField}
                id="No"
                label="No"
                max={100}
                maxLength={250}
                min={0}
                name="policyClaim"
                value="No"
                size="small"
                onChange={(e) => {
                  // setFormData((prev) => ({
                  //   ...prev,
                  //   prosper: e.target.value,
                  // }))
                  dispatch(updateField("policyClaim", e.target.value));
                  setPolicyClaim("No");
                }}
                onInvalid={function noRefCheck() {}}
                onPrefixClick={function noRefCheck() {}}
                onSuffixClick={function noRefCheck() {}}
                type="radio"
              />
            </Container>
          </Container>
          {policyClaim === "No" && (
            <Container className={styles.ncbContainer}>
              <Text appearance="body-m-bold">Select your Exisiting NCB</Text>
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
                      dispatch(updateField("NCBValue", item.percent));
                    }}
                  >
                    <Text appearance="body-s">{item.percent}</Text>
                  </Container>
                ))}
              </Container>
            </Container>
          )}
        </Container>
        <Button
          title="Confirm"
          onClick={() => {
            setIsExistingPolicyClaim(false), setIsLoading(false);
          }}
          disabled={policyClaim==="No" ? !policyClaim && !selectedNCBValue :  !policyClaim }
        />
      </Container>
    </>
  );
};

export default ExistingPolicyClaimBS;
