import React, { useState } from "react";
import styles from "@/styles/BikeFlow/PreQuote/Confirmation.module.scss";
import { Button, Container, Icon, Image, Input, Text } from "@jds/core";
import { useRouter } from "next/router";
const ConfirmationCard = (props) => {
  const router = useRouter();
  const {
    setView,
    setIsBike,
    setIsConfirmationBS,
    vechileType,
    setIsCar,
    setIsConfirmationModal,
  } = props;
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  return (
    <Container className={styles.confirmationCard}>
      <Container className={styles.successContainerWithDetails}>
        <Container className={styles.successContainer}>
          <Text appearance="heading-xs" className={styles.title}>
            We have found your {vechileType}
          </Text>
          <Container displayOn="desktop">
            <Button
              kind="secondary"
              title="Edit"
              className={styles.editBtn}
              onClick={() => {
                if (vechileType === "Bike") {
                  setIsBike(true);
                } else if (vechileType === "Car") {
                  setIsCar(true);
                }
                setIsConfirmationModal(false);
              }}
            />
          </Container>
          <Container displayOn="tablet">
            <Button
              kind="secondary"
              title="Edit"
              className={styles.editBtn}
              onClick={() => {
                if (vechileType === "Bike") {
                  setIsBike(true);
                } else if (vechileType === "Car") {
                  setIsCar(true);
                }
                setView(true);
                setIsConfirmationBS(false);
              }}
            />
          </Container>
        </Container>
        <Container className={styles.details}>
          <Container className={styles.vechileDetails}>
            <Text appearance="body-m-bold" className={styles.registeration}>
              RJ28SU4580
            </Text>
            <Text className={styles.vechileInfo}>
              {vechileType === "Bike"
                ? "Suzuki GIxxer sf abs 2021 - petrol, 325205"
                : "HYUNDAI Aura 1.2 kappadual vtvt sx (1197cc),325205"}
            </Text>
          </Container>
          <Container>
            <Image
              src={
                vechileType === "Bike"
                  ? "/images/BikeFlow/bikeImg.svg"
                  : "/images/BikeFlow/carImg.svg"
              }
              className={styles.vechileImg}
              alt="vehcileImg"
            />
          </Container>
        </Container>
      </Container>
      <Container className={styles.policyTypeContainer}>
        <Text appearance="heading-xs">
          What type of policy do you want to buy ?
        </Text>
        <Input
          type="dropdown"
          label="Policy type"
          onChange={(e) => setSelectedPolicy(e.target.value)}
          typeConfig={{
            dropdown: {
              items: [
                {
                  disabled: false,
                  label: "Comprehensive Policy",
                  prefix: undefined,
                  value: "comprehensive policy",
                },
                {
                  type: "divider",
                },
                {
                  disabled: false,
                  label: "Third Party",
                  prefix: undefined,
                  value: "third party",
                },
                {
                  type: "divider",
                },
                //  {
                //     disabled: false,
                //     label: 'Standalone Own Damage',
                //     prefix: undefined,
                //     value: 'standalone own damage'
                //   },
                //   {
                //       type: 'divider'
                //     },
              ],
            },
          }}
        />
      </Container>
      <Button
        title="Continue"
        className={styles.continueBtn}
        onClick={() => {
          router.push("/quote");
        }}
      />
    </Container>
  );
};

export default ConfirmationCard;
