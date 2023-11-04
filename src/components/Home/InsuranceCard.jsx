import React, { useEffect, useState } from "react";
import styles from "../../styles/Home/InsuranceCard.module.scss";
import { Button, Container, Icon, Input, Text } from "@jds/core";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../Redux/action";

const InsuranceCard = (props) => {
  const {
    setView,
    insuranceType,
    setIsHealth,
    isHealth,
    setIsBike,
    setIsConfirmationBS,
    setIsCar,
    setIsConfirmationModal,
  } = props;
  const genderOptions = [
    { icon: "IcMale", gender: "Male" },
    { icon: "IcFemale", gender: "Female" },
    { icon: "IcFemaleMale", gender: "Other" },
  ];
  const [genderIndex, setGenderIndex] = useState(0);
  const [gender, setGender] = useState("Male");
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData);
  const [isCheckBox, setCheckBox] = useState(true);
  const [code, setCode] = useState('+91');

  function regexCheck(regex, data) {
    if (regex.test(data)) {
      console.log("valid regex");
      return true;
    } else {
      console.log(" not valid regex");
      return false;
    }
  }

  useEffect(() => {
    getBikeInsurance();
  }, []);

  const getBikeInsurance = async () => {
    var myHeaders = new Headers();
    myHeaders.append("MerchantKey", "RELIANCE");
    myHeaders.append("SecretToken", "W935xKVK5I2rVxoezXD21w==");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      MasterKey: "RTOCODE",
      AgentCode: "TWC19459",
      PolicyType: "Comprehensive",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // redirect: 'follow'
    };

    await fetch(
      "https://uatcp.hdfcergo.com/TWOnline/ChannelPartner/GetMasterData",
      requestOptions
    )
      .then((response) => {
        response.text();
        console.log(response, "response====>");
      })
      .then((result) => console.log(result, "result====>"))
      .catch((error) => console.log("error", error));
    // fetch('https://uatcp.hdfcergo.com/TWOnline/ChannelPartner/GetMasterData', {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         "MerchantKey": "RELIANCE",
    //         "SecretToken": "W935xKVK5I2rVxoezXD21w=="
    //     },
    //     body: {
    //         "MasterKey": "RTOCODE",
    //         "AgentCode": "TWC19459",
    //         "PolicyType": "Comprehensive"
    //     }
    // }).then((res) => {
    //     console.log("response", res);
    //   })
    //   .catch((err) => {
    //     console.log("AXIOS ERROR: ", err);
    //   });
  };
  return (
    <>
      <Container className={styles.card}>
        <Text appearance="heading-xxs" className={styles.title}>
          Buy{" "}
          <span style={{ color: "var(--primary-color-50)" }}>
            {insuranceType} Insurance
          </span>{" "}
          with upto{" "}
          <span style={{ color: "var(--primary-color-50)" }}>20% discount</span>
        </Text>
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
          <Container className={styles.inputFieldContainer}>
            {/* <Text appearance='body-xs-bold'>Registration Number</Text>    */}
            <Input
              type="text"
              label="Registration Number"
              value={formData?.registrationNumber}
              onChange={(e) => {
                const { value } = e.target;
                dispatch(updateField("registrationNumber", value.toUpperCase()));
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
        <Container className={styles.inputFieldContainer}>
          {/* <Text appearance='body-xs-bold'>Mobile Number</Text>   */}
          {/* <Input
            type="number"
            label="Tell your mobile number"
            value={formData?.mobileNumber}
            onChange={(e) => {
              const { value } = e.target;
              dispatch(updateField("mobileNumber", value));
            }}
            // state={
            //   formData?.mobileNumber.length > 0 &&
            //   !regexCheck(/^[6-9]\d{9}$/, formData.mobileNumber)
            //     ? "error"
            //     : ""
            // }
            // stateConfig={{
            //   errorText: "Enter valid mobile number",
            // }}
            size="medium"
          /> */}
          <Container style={{ display: "flex" }}>
            <Input
              type="dropdown"
              style={{ width: "4rem" }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              typeConfig={{
                dropdown: {
                  items: [
                    {
                      disabled: false,
                      label: "+91",
                      prefix: undefined,
                      value: "+91",
                    },
                    {
                      type: "divider",
                    },
                    {
                      disabled: false,
                      label: "+83",
                      prefix: undefined,
                      value: "+83",
                    },
                    {
                      type: "divider",
                    },
                  ],
                },
              }}
            />
            <Input
              type="number"
              label="Tell your mobile number"
              onChange={(e) => {
                const { value } = e.target;
                dispatch(updateField("mobileNumber", value));
              }}
              value={formData?.mobileNumber}
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
              style={{ width: "100%" }}
            />
          </Container>
        </Container>
        {insuranceType != "Health" && insuranceType != "Life" && (
          <Container className={styles.termsAndConditionsContainer}>
            <Input
              type="checkbox"
              size="small"
              onChange={(e) => {
                const { checked } = e.target;
                dispatch(updateField("agree", checked));
                setCheckBox(!isCheckBox);
              }}
              checked={isCheckBox}
            />
            <Text className={styles.termsAndConditionText}>
              I agree to{" "}
              <span style={{ color: "var(--primary-color-50)" }}>
                terms and conditions
              </span>
            </Text>
          </Container>
        )}
        <Container className={styles.btnDividerText}>
          <Container displayOn={"desktop"}>
            <Button
              title="View plans"
              kind="primary"
              size="medium"
              className={styles.btn}
              onClick={() => {
                if (insuranceType === "Health") {
                  setIsHealth(true);
                  setView(true);
                } else if (insuranceType === "Bike") {
                  setIsConfirmationModal(true);
                  // setIsBike(true);
                } else if (insuranceType === "Car") {
                  // setIsCar(true);
                  setIsConfirmationModal(true);
                }
              }}
            ></Button>
          </Container>
          <Container displayOn={"tablet"} style={{width:"100%"}}>
            <Button
              title="View plans"
              kind="primary"
              size="medium"
              className={styles.btn}
              onClick={() => {
                if (insuranceType === "Health") {
                  setIsHealth(true);
                  // setView(true);
                } else if (insuranceType === "Bike") {
                  setIsConfirmationBS(true);
                  getBikeInsurance();
                } else if (insuranceType === "Car") {
                  setIsConfirmationBS(true);
                }
              }}
            ></Button>
          </Container>
          {insuranceType != "Health" && (
            <Container className={styles.divider}>
              <hr className={styles.line}></hr>
              <Text appearance="body-xs-bold" className={styles.orText}>
                Or
              </Text>
              <hr className={styles.line}></hr>
            </Container>
)}
          {insuranceType != "Health" && (<>
            <Container displayOn="desktop" >
            <Button
              title={`Bought a New ${insuranceType} ?`}
              kind="tertiary"
              onClick={() => {
                if (insuranceType === "Bike") {
                  setIsBike(true);
                } else if (insuranceType === "Car") {
                  setIsCar(true);
                }
              }}
            />
            </Container>
             <Container displayOn="tablet">
             <Button
               title={`Bought a New ${insuranceType} ?`}
               kind="tertiary"
               onClick={() => {
                 if (insuranceType === "Bike") {
                   setIsBike(true);
                   setView(true)
                 } else if (insuranceType === "Car") {
                   setIsCar(true);
                   setView(true);
                 }
               }}
             />
             </Container>
             </>
          )}
        </Container>
     </Container>

       
        </>
    );
};

export default InsuranceCard;
