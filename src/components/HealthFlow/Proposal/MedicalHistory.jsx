import React, { useState } from "react";
import { Container, Input, Text } from "@jds/core";
import styles from "@/styles/HealthFlow/Proposal/MedicalHistory.module.scss";
import HeadingSection from "./HeadingSection";

const MedicalHistory = () => {
  const [formData, setFormData] = useState({
    questions: [
      {
        id: 1,
        text: "Does any person(s) to be insured have a personal habit of smoking /alcohol /gutkha /tobacco /paan?",
        options: [
          { label: "Not Applicable", value: false },
          { label: "Self", value: false },
          { label: "Spouse", value: false },
          { label: "Son", value: false },
        ],
      },
      {
        id: 2,
        text: "Does any person(s) to be insured??",
        options: [
          { label: "Not Applicable", value: false },
          { label: "Self", value: false },
          { label: "Spouse", value: false },
          { label: "Son", value: false },
        ],
      },
    ],
  });
  console.log(formData, "formData");
  const handleCheckboxChange = (questionId, optionIndex) => {
    setFormData((prevData) => {
      const updatedQuestions = prevData.questions.map((question) => {
        if (question.id === questionId) {
          const updatedOptions = [...question.options];
          updatedOptions[optionIndex] = {
            ...updatedOptions[optionIndex],
            value: !updatedOptions[optionIndex].value,
          };
          return { ...question, options: updatedOptions };
        }
        return question;
      });
      return { ...prevData, questions: updatedQuestions };
    });
  };

  return (
    <Container className={styles.medicalHistoryContainer}>
      <Container className={styles.medicalHistoryDetails}>
      <HeadingSection title=" Tell us about any health conditions" subTitle="We'll only ask for details insurers need" />
        <Container className={styles.medicalHistorySurvey}>
          {formData.questions.map((question,index) => (
            <Container
              className={styles.questionAnswerContainer}
              key={`question-${question.id}`}
            >
              <Text
                className={styles.questionText}
                appearance="body-s-bold"
              >{`Q ${question.id}. ${question.text}`}</Text>
              <Container className={styles.optionsContainer}>
                {question.options.map((option, optionIndex) => (
                  <Input
                  key={optionIndex}
                    label={option.label}
                    name={`question${question.id}`}
                    type="checkbox"
                    checked={option.value}
                    size="small"
                    onChange={() =>
                      handleCheckboxChange(question.id, optionIndex)
                    }
                  />
                ))}
              </Container>
              {index === 0 && <Input type="textarea" label="Describe Conditon"/>}
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default MedicalHistory;
