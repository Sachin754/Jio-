import React, { useState } from "react";
import styles from "@/styles/BikeFlow/Proposal/ContactDetails.module.scss";
import { Container, Input, Text } from "@jds/core";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "@/components/Redux/action";
import regexCheck from "@/components/regexCheck";

const ContactDetails = (props) => {
  const [addresses, setAddresses] = useState([
    {
      type: "Communication",
      registeredAddress: "",
      pincode: "",
      city: "",
    },
    {
      type: "Permanent",
      registeredAddress: "",
      pincode: "",
      city: "",
    },
    // Add more addresses as needed
  ]);
  const { isHideHeading } = props;
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.insuranceDetails.bikeData)

  return (
    <>
      <Container className={styles.contactDetailsContainer}>
        {isHideHeading ? "" : <Text appearance="heading-xs">Contact Details</Text>}
        <Container className={styles.fieldsContainer}>
          <Input
            className={styles.inputField}
            id="Name"
            label="Owner's Full name"
            max={100}
            maxLength={150}
            min={0}
            value={formData?.fullName}
            onChange={(e) => {
              dispatch(updateField("fullName", e.target.value));
            }}
            state={
              formData?.fullName?.length > 0 &&
                !regexCheck(/^[A-Za-z\s]+$/, formData.fullName)
                ? "error"
                : ""
            }
            stateConfig={{
              errorText: "Enter valid Full name",
            }}
            name="fullName"
            required
            size="small"
            helperText="As mentioned on RC"
          />
          <Container className={styles.mobileEmail}>
            <Input
              className={styles.inputField}
              id="phoneNumber"
              label="Mobile number"
              maxLength={10}
              min={0}
              name="mobileNumber"
              size="small"
              value={formData?.mobileNumber}
              onChange={(e) => {
                dispatch(updateField("mobileNumber", e.target.value));
              }}
              state={
                formData?.mobileNumber?.length > 0 &&
                  !regexCheck(/^[6-9]\d{9}$/, formData.mobileNumber)
                  ? "error"
                  : ""
              }
              stateConfig={{
                errorText: "Enter valid mobile number",
              }}
              type="number"
              required
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
              value={formData?.email}
              onChange={(e) => {
                dispatch(updateField("email", e.target.value));
              }}
              state={
                formData?.email?.length > 0 &&
                  !regexCheck(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, formData.email)
                  ? "error"
                  : ""
              }
              stateConfig={{
                errorText: "Enter valid mail",
              }}
              required
              type="email"
            />
          </Container>
          {addresses.map((address, index) => (
            <Container className={styles.permanentAddress} key={index}>
              {index === 1 && (
                <Input
                  style={{ marginTop: "1rem" }}
                  id="sameAddress"
                  label="Same as per Communication address"
                  max={100}
                  maxLength={250}
                  min={0}
                  name="address"
                  checked={formData?.sameAddress}
                  onChange={(e) => {
                    dispatch(updateField('sameAddress', e.target.checked))
                  }}
                  size="small"
                  type="checkbox"
                  required
                />
              )}
              <Input
                id="registeredaddress"
                label={
                  index === 0 ? "Registered Address" : "Communication Address"
                }
                max={100}
                maxLength={150}
                min={0}
                value={index === 1 ? formData?.permanentAddress?.communicationAddress :
                  (formData?.permanentAddress?.address_line_1 ? formData?.permanentAddress.address_line_1 : '')
                }
                onChange={(e) => {
                  dispatch(updateField(index === 1 ? 'communicationAddress' : `address_line_1`, e.target.value))
                }}
                name="address"
                required
                type="textarea"
              />
              <Container className={styles.pinAndCity}>
                <Input
                  className={styles.inputField}
                  id="pinCode"
                  label="Pincode"
                  maxLength={6}
                  min={0}
                  name="Pincode"
                  value={index !== 0 ? formData?.permanentAddress?.pin_code_1 : formData?.permanentAddress?.pin_code}
                  onChange={(e) => {
                    dispatch(updateField(index !== 0 ? 'pin_code_1' : 'pin_code', e.target.value))
                  }}
                  state={
                    index !== 0 ?
                      (formData?.permanentAddress?.pin_code_1?.length > 0 &&
                        !regexCheck(/^[0-9]{6}$/, formData?.permanentAddress?.pin_code_1)
                        ? "error"
                        : "")
                      : (formData?.permanentAddress?.pin_code?.length > 0 &&
                        !regexCheck(/^[0-9]{6}$/, formData?.permanentAddress?.pin_code)
                        ? "error"
                        : "")
                  }
                  stateConfig={{
                    errorText: "Enter valid pincode",
                  }}
                  required
                  type="number"
                />
                <Input
                  className={styles.inputField}
                  id="city"
                  label="City"
                  max={100}
                  maxLength={150}
                  min={0}
                  type="text"
                  value={index === 0 ? formData?.permanentAddress?.city : formData?.permanentAddress?.city_1}
                  onChange={(e) => {
                    dispatch(updateField(index === 0 ? 'city' : 'city_1', e.target.value))
                  }}
                  state={
                    index !== 0 ?
                      (formData?.permanentAddress?.city_1?.length > 0 &&
                        !regexCheck(/^[A-Za-z\s]+$/, formData?.permanentAddress?.city_1)
                        ? "error"
                        : "") :
                      (formData?.permanentAddress?.city?.length > 0 &&
                        !regexCheck(/^[A-Za-z\s]+$/, formData?.permanentAddress?.city)
                        ? "error"
                        : "")
                  }
                  stateConfig={{
                    errorText: "Enter valid City",
                  }}
                  name="city"
                  required
                />
              </Container>
            </Container>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default ContactDetails;
