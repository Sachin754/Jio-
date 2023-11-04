import React, { useState } from "react";
import styles from "@/styles/InsuranceCardLandingPage.module.scss";
import { Button, Container, Divider, Icon, Input, Text } from "@jds/core";
import { IcArrowNext } from "@jds/core-icons";
import { updateField } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const InsuranceCardLandingPage = (props) => {
  const { insuranceType } = props;
  const genderOptions = [
    { icon: "IcMale", gender: "Male" },
    { icon: "IcFemale", gender: "Female" },
    { icon: "IcFemaleMale", gender: "Other" },
  ];
  const [genderIndex, setGenderIndex] = useState(0);
  const [gender, setGender] = useState("Male");
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);

  return (
    <>
      <Container className={styles.insuranceCardContainer}>
        {insuranceType === "Health" || insuranceType === "Car" ? (
          <Text className={styles.title} appearance="heading-xxs">
            Buy or renew {insuranceType} insurance online with upto 20% discount
          </Text>
        ) : (
          <Text className={styles.title} appearance="heading-xxs">
            Buy or renew bike/scooter insurance online without any paperwork!
          </Text>
        )}
        <Container className={styles.card}>
          {insuranceType === "Health" || insuranceType === "Life" ? (
            <Container className={styles.healthInput}>
              <Container displayOn="mobile">
                <Text appearance="body-xs-bold">Select Your Gender</Text>
              </Container>
              <Container className={styles.genderOptions}>
                {genderOptions.map((item, index) => (
                  <Container
                    className={
                      genderIndex === index
                        ? styles.genderOption
                        : styles.inactiveGenderOption
                    }
                    key={index}
                    onClick={() => {
                      setGender(item.gender);
                      setGenderIndex(index);
                    }}
                  >
                    <Icon
                      ic={item.icon}
                      className={
                        genderIndex === index
                          ? styles.activeIcon
                          : styles.inactiveIcon
                      }
                    />
                    <Text
                      appearance="body-xs"
                      style={{
                        color: genderIndex === index ? "black" : "#B5B5B5",
                      }}
                    >
                      {item.gender}
                    </Text>
                  </Container>
                ))}
              </Container>
            </Container>
          ) : (
            <Container style={{ marginTop: "1.5rem", }}>
              {/* <Text appearance="body-xs-bold">Registration Number</Text> */}
              <Input
                className={styles.inputField}
                type="text"
                label="Registration Number"
                style={{ marginTop: "-0.1rem" }}
                value={formData?.registrationNumber}
                onChange={(e) => {
                  const { value } = e.target;
                  dispatch(updateField("registrationNumber", value));
                }}
                state={formData?.registrationNumber?.length > 0 && !regexCheck(/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/, formData?.registrationNumber)
                ? "error"
                : ""
              }
              stateConfig={{
                errorText: "Enter a valid registration number",
              }}
                required
              />
            </Container>
          )}
          <Container style={{ marginTop: "1rem",display:"flex" }}>
            {/* <Text appearance="body-xs-bold">Mobile Number</Text> */}
            <Input type='dropdown' style={{width:"4rem"}}  typeConfig={{
   
   dropdown: {
     items: [
       {
         disabled: false,
         label: '+91',
         prefix: undefined,
         value: '+91'
       },
       {
         type: 'divider'
       },
       {
           disabled: false,
           label: '+83',
           prefix: undefined,
           value: '+83'
         },
         {
           type: 'divider'
         },
      
     ]
   },}}/>
            <Input
              className={styles.inputField}
              type="number"
              label="Tell your mobile number"
              style={{width:"100%"}}
              value={formData?.mobileNumber}
              onChange={(e) => {
                const { value } = e.target;
                dispatch(updateField("mobileNumber", value));
              }}
              state={
                formData?.mobileNumber?.length > 0 &&
                  !regexCheck(/^[6-9]\d{9}$/, formData?.mobileNumber)
                  ? "error"
                  : ""
              }
              stateConfig={{
                errorText: "Enter valid mobile number",
              }}
              required
            />
          </Container>
          {insuranceType != "Health" && insuranceType != "Life" && (
            <Container style={{ display: "flex", gap: "0.25rem" }}>
              <Input type="checkbox" size="small" />
              <Text>
                I agree to{" "}
                <span style={{ color: "rgba(23, 118, 206, 0.65)" }}>
                  terms and conditions
                </span>
              </Text>
            </Container>
          )}
          <Button
            title="View plans"
            kind="primary"
            size="medium"
            className={styles.btn}
          ></Button>
          <Container className={styles.divider}>
            <hr className={styles.hr} />
            <Text className={styles.orText} appearance="body-xs-bold">Or</Text>
            <hr className={styles.hr} />
          </Container>
          <Text appearance="body-s-bold" className={styles.boughtCar}>Bought a New Bike ?</Text>
        </Container>
        {insuranceType != "Health" && (
          <>
            <Container
              className={styles.plansBtnOuterContainer}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Container
                className={styles.plansBtnContainer}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Text className={styles.title} appearance="heading-xs">
                  Want to insure your brand new {insuranceType.toLowerCase()}?
                </Text>
                <Text className={styles.description}>
                  Get upto 20% savings on your first purchase
                </Text>
                <Container>
                  <Button
                    icon={<IcArrowNext />}
                    size="small"
                    title="See plans"
                    kind="secondary"
                    className={styles.seePlansBtn}
                  />
                </Container>
              </Container>
            </Container>
          </>
        )}
        <Container className={styles.alreadyBoughtContainer}>
          <Text className={styles.alreadyText}>Already bought a policy?</Text>
          <Container className={styles.renewContainer}>
            <Text className={styles.renewText}>Renew now</Text>
            <IcArrowNext className={styles.arrowNextIcon} />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default InsuranceCardLandingPage;
