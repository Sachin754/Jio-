import React, { useState } from "react";
import styles from "../../../styles/BikeFlow/Quote/Feedback.module.scss";
import { Button, Container, Input, Text } from "@jds/core";
const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState("");
  const feedback = {
    question: "Please share why you’re not continuing with the purchase",
    options: [
      { option: "Need More insurer options", phn: "true" },
      { option: "Prices are higher" },
      { option: "Are you looking for nearby Advisor" },
      { option: "Other reason" },
    ],
  };
  return (
    <Container className={styles.feedbackSection}>
      <Text appearance="heading-xs" className={styles.heading}>
        We are sad to see you leave!
      </Text>
      <Container className={styles.options}>
        <Text appearance="body-m-bold" className={styles.question}>
          {feedback.question}
        </Text>
        <Container className={styles.radioOptions}>
          {feedback.options.map((item, index) => (
            <>
              <Container className={styles.option}>
                <Input
                  type="radio"
                  label={item.option}
                  size="small"
                  value={item.option}
                  onChange={(e) => setFeedbackData(e.target.value)}
                  checked={feedbackData === item.option}
                />
              </Container>
              {feedbackData === "Need More insurer options" &&
                item.phn == "true" && (
                  <Input
                    type="text"
                    placeholder="Please Enter mobile number and Submit"
                  />
                )}
            </>
          ))}
        </Container>
      </Container>
      <Button title="Submit" className={styles.btn} />
    </Container>
  );
};

export default Feedback;
