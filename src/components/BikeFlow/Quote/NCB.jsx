import React, { useState } from "react";
import styles from "../../../styles/BikeFlow/Quote/NCB.module.scss";
import {
  Button,
  Container,
  DatePicker,
  Input,
  InputDate,
  Text,
} from "@jds/core";
const NCB = (props) => {
  const ncb = [
    {
      question: " Did you make a claim in your existing policy?",
      options: [{ value: "Yes" }, { value: "No" }],
    },
    {
      question: " Existing Policy Type",
      options: [{ value: "Comprehensive" }, { value: "Third Party" }],
    },
  ];
  const {setExistingPolicyPercentage, setIsNBCModal,setIsNBCBS } =
    props;
  const [policyType, setPolicyType] = useState("");
  const [policyClaimed, setPolicyClaimed] = useState(false);


  return (
    <Container className={styles.ncbSection}>
      <Text appearance="heading-xs" className={styles.heading}>
        NCB Value
      </Text>
      <Container className={styles.options}>
        <Container className={styles.questionAndOptions}>
          <Text className={styles.question} appearance="body-xs-bold">
            Did you make a claim in your existing policy?
          </Text>
          <Container className={styles.radioOptions}>
            <Container className={styles.option}>
              <Input
                label="Yes"
                type="radio"
                size="small"
                value="Yes"
                onChange={(e) => setPolicyClaimed(e.target.value)}
                checked={policyClaimed === "Yes"}
              />
            </Container>
            <Container className={styles.option}>
              <Input
                label="No"
                type="radio"
                size="small"
                value="No"
                onChange={(e) => setPolicyClaimed(e.target.value)}
                checked={policyClaimed === "No"}
              />
            </Container>
          </Container>
          {policyClaimed === "No" && (
            <Input
              style={{ cursor: "pointer" }}
              className={styles.inputField}
              type="dropdown"
              label="Select your Existing NCB"
              onChange={(e) => setExistingPolicyPercentage(e.target.value)}
              typeConfig={{
                dropdown: {
                  items: [
                    {
                      disabled: false,
                      label: "0%",
                      prefix: undefined,
                      value: "0%",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "20%",
                      prefix: undefined,
                      value: "20%",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "25%",
                      prefix: undefined,
                      value: "25%",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "35%",
                      prefix: undefined,
                      value: "35%",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "45%",
                      prefix: undefined,
                      value: "45%",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "50%",
                      prefix: undefined,
                      value: "50%",
                    },
                  ],
                },
              }}
            />
          )}
        </Container>

        <Container className={styles.questionAndOptions}>
          <Text className={styles.question} appearance="body-xs-bold">
            Existing Policy Type
          </Text>
          <Container className={styles.radioOptions}>
            <Container className={styles.option}>
              <Input
                label="Comprehensive"
                type="radio"
                size="small"
                value="Comprehensive"
                onChange={(e) => setPolicyType("Comprehensive")}
                checked={policyType === "Comprehensive"}
              />
            </Container>
            <Container className={styles.option}>
              <Input
                label="Third Party"
                type="radio"
                size="small"
                value="Third Party"
                onChange={(e) => setPolicyType("Third Party")}
                checked={policyType === "Third Party"}
              />
            </Container>
          </Container>
        </Container>
        <Input type="dropdown" label="Select Exisiting Insurer" />
        <InputDate
          datePicker
          label="Registration Date"
          //  onChange={(date) => handleChange(item, date)}
        />
        <InputDate
          datePicker
          label="Manufacturing Month"
          //  onChange={(date) => handleChange(item, date)}
        />
      </Container>
      <Container displayOn="tablet">
        <Button
          title="Update Quotes"
          className={styles.btn}
          onClick={() => {
            setIsNBCBS(false);
          }}
        />
      </Container>
      <Container displayOn="desktop">
        <Button
          title="Update Quotes"
          className={styles.btn}
          onClick={() => {
            setIsNBCModal(false);
          }}
        />
      </Container>
    </Container>
  );
};

export default NCB;
