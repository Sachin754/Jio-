import React,{useState} from "react";
import styles from "@/styles/HealthFlow/Proposal/InsurerDetails.module.scss";
import HeadingSection from "./HeadingSection";
import { Container,Text,Input,InputDate } from "@jds/core";

const InsurerDetails = () => {

  const [formData, setFormData] = useState({
    person1: {
      fullName: '',
      dateOfBirth: '',
      heightFeet: '',
      heightInches: '',
      weight: '',
    },
    person2: {
      fullName: '',
      dateOfBirth: '',
      heightFeet: '',
      heightInches: '',
      weight: '',
    }
  });

  return (
    <>
      <Container className={styles.insuredDetailsContainer}>
          <HeadingSection
            title="Insured Details"
            subTitle="Tell us about family member"
          />
            
          <Container className={styles.fieldsContainer}>
            <Text className={styles.title} appearance="body-m-bold">Self (30 yrs)</Text>
            <Container className={styles.inputFields}>
              <Container className={styles.nameDOB}>
                <Input
                  className={styles.nameField}
                  id="Name"
                  label="Full Name "
                  max={100}
                  maxLength={150}
                  min={0}
                  // state={
                  //   formData.fullName.length > 0 &&
                  //     !regexCheck(/^[A-Za-z\s]+$/, formData.fullName)
                  //     ? "error"
                  //     : ""
                  // }
                  // stateConfig={{
                  //   errorText: "Enter valid Full name",
                  // }}
                  name="fullName"
                  // onChange={(e) =>
                  //   setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                  // }
                  // value={formData.fullName}
                  // required
                  size="small"
                />
                <InputDate
                  className={styles.DOBField}
                  id="dob"
                  label="Date of birth"
                  name="dateOfBirth"
                  // required
                  datePicker
                  //   onChange={(e) =>
                  //     setFormData((prev) => ({ ...prev, dateOfBirth: e }))
                  //   }
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
              </Container>
              <Container className={styles.heightWeight}>
                <Container className={styles.height}>
                  <Input
                    className={styles.heightField}
                    id="height_feets"
                    label="Height(In Feet)"
                    max={100}
                    maxLength={250}
                    min={0}
                    name="heightInFeets"
                    onChange={function noRefCheck() {}}
                    size="small"
                    state="error"
                    stateConfig={{
                      errorText: "Enter valid",
                    }}
                    type="dropdown"
                    typeConfig={{
                      dropdown: {
                        items: [
                          {
                            disabled: false,
                            label: "1 Feet",
                            prefix: undefined,
                            value: "1feet",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "2 Feet",
                            prefix: undefined,
                            value: "2feet",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "3 Feet",
                            prefix: undefined,
                            value: "3feet",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "4 Feet",
                            prefix: undefined,
                            value: "4feet",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "5 Feet",
                            prefix: undefined,
                            value: "5feet",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "6 Feet",
                            prefix: undefined,
                            value: "6feet",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "7 Feet",
                            prefix: undefined,
                            value: "7feet",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "8 Feet",
                            prefix: undefined,
                            value: "8feet",
                          },
                        ],
                      },
                    }}
                    value=""
                  />
                  <Input
                    className={styles.heightField}
                    id="height_inches"
                    label="Height(in inch)"
                    max={100}
                    maxLength={250}
                    min={0}
                    name="heightinInches"
                    onChange={function noRefCheck() {}}
                    size="small"
                    state="error"
                    stateConfig={{
                      errorText: "Enter valid",
                    }}
                    type="dropdown"
                    typeConfig={{
                      dropdown: {
                        items: [
                          {
                            disabled: false,
                            label: "0 Inch",
                            prefix: undefined,
                            value: "0inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "1 Inch",
                            prefix: undefined,
                            value: "1inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "2 Inch",
                            prefix: undefined,
                            value: "2inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "3 Inch",
                            prefix: undefined,
                            value: "3inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "4 Inch",
                            prefix: undefined,
                            value: "4inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "5 Inch",
                            prefix: undefined,
                            value: "5inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "6 Inch",
                            prefix: undefined,
                            value: "6inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "7 Inch",
                            prefix: undefined,
                            value: "7inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "8 Inch",
                            prefix: undefined,
                            value: "8inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "9 Inch",
                            prefix: undefined,
                            value: "9inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "10 Inch",
                            prefix: undefined,
                            value: "10inch",
                          },
                          {
                            type: "divider",
                          },
                          {
                            disabled: false,
                            label: "11 Inch",
                            prefix: undefined,
                            value: "11inch",
                          },
                        ],
                      },
                    }}
                    value=""
                  />
                </Container>
                <Container>
                <Input className={styles.weightField}
                  id="weight"
                  label="Weight (in kg)"
                  max={150}
                  maxLength={250}
                  min={30}
                  name="weight"
                  onChange={function noRefCheck() {}}
                  stateConfig={{
                    errorText: "Enter valid ",
                  }}
                  type="number"
                />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
    </>
  );
};

export default InsurerDetails;
