import { Badge, Button, Container, Input, Text } from "@jds/core";
import React, { useState } from "react";
import styles from "../../../styles/BikeFlow/Quote/PolicyType.module.scss";
import { IcTeam } from "@jds/extended-icons";
const PolicyType = (props) => {
  const {
    policyTypeValue,
    setPolicyTypeValue,
    setIsPolicyTypeBS,
    setIsPolicyTypeModal,
  } = props;
  return (
    <Container className={styles.policyTypeCard}>
      <Text appearance="heading-xs" className={styles.heading}>
        Policy Type
      </Text>
      <Container className={styles.options}>
        <Container className={styles.option}>
          <Input
            type="radio"
            label="All Policies (12 Plans)"
            value="All Policies"
            onChange={(e) => setPolicyTypeValue(e.target.value)}
            checked={policyTypeValue === "All Policies"}
            size="small"
          />
        </Container>
        <Container className={styles.option}>
          <Input
            type="radio"
            label="Comprehensive (4 Plans)"
            value="Comprehensive"
            onChange={(e) => setPolicyTypeValue(e.target.value)}
            checked={policyTypeValue === "Comprehensive"}
            size="small"
          />
          <Text className={styles.subText}>
            Own damage + Third party cover.
          </Text>
          <Badge
            size="small"
            className={styles.badge}
            icon={<IcTeam />}
            label="Choose by 32% people"
          />
        </Container>
        <Container className={styles.option}>
          <Input
            type="radio"
            label="Third Party (5 Plans)"
            value="Third Party"
            onChange={(e) => setPolicyTypeValue(e.target.value)}
            checked={policyTypeValue === "Third Party"}
            size="small"
          />
          <Text className={styles.subText}>
            Cover only damage to Third Party. This only covers other person or
            property from damage or injury caused by your vehicle. It is
            mandatory as per law.
          </Text>
        </Container>
      </Container>
      <Container displayOn="tablet">
        <Button
          title="Update"
          className={styles.btn}
          onClick={() => {
            setIsPolicyTypeBS(false);
          }}
        />
      </Container>
      <Container displayOn="desktop" >
        <Button
          title="Update"
          className={styles.btn}
          onClick={() =>{
            setIsPolicyTypeModal(false);
          }}
        />
      </Container>
    </Container>
  );
};

export default PolicyType;
