import React, { useState } from "react";
import styles from "../../../styles/BikeFlow/Quote/CoverValue.module.scss";
import { Badge, Button, Container, Input, Text } from "@jds/core";
const CoverValue = (props) => {
  const { coverValue, setCoverValue, setIsIDVBSBS,setIsIDVBSModal } = props;
  return (
    <Container className={styles.coverValueCard}>
      <Text appearance="heading-xs" className={styles.heading}>
        Cover value (IDV)
      </Text>
      <Container className={styles.options}>
        <Container className={styles.option}>
          <Input
            type="radio"
            label="Lowest IDV"
            value="Lowest IDV"
            onChange={(e) => setCoverValue(e.target.value)}
            checked={"Lowest IDV" === coverValue}
            size="small"
          />
        </Container>
        <Container className={styles.option}>
          <Container
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Input
              type="radio"
              label="Best Deal"
              value="Best Deal"
              onChange={(e) => setCoverValue(e.target.value)}
              checked={"Best Deal" === coverValue}
              size="small"
            />
            <Badge label="Recommended" size="small" />
          </Container>
        </Container>
        <Container className={styles.option}>
          <Input
            type="radio"
            label="Choose My Own (4 Plans)"
            value="Choose My Own"
            onChange={(e) => setCoverValue(e.target.value)}
            checked={"Choose My Own" === coverValue}
            size="small"
          />
          {coverValue === "Choose My Own" && (
            <Container className={styles.range}>
              <Input
                type="range"
                label="Select IDV Amount"
                max={345678}
                maxLength={250}
                min={167600}
              />
            </Container>
          )}
        </Container>
      </Container>
      <Container displayOn="tablet">
        <Button
          title="Update"
          className={styles.btn}
          onClick={() => {
            setIsIDVBSBS(false);
          }}
        />
      </Container>
      <Container displayOn="desktop">
        <Button
          title="Update"
          className={styles.btn}
          onClick={() => {
            setIsIDVBSModal(false);
          }}
        />
      </Container>
    </Container>
  );
};

export default CoverValue;
