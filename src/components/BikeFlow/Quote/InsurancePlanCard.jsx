import React from "react";
import { Container, Text, Badge, Button } from "@jds/core";
import Image from "next/image";
import styles from "@/styles/BikeFlow/Quote/InsurancePlanCard.module.scss";
import { IcChevronRight } from "@jds/core-icons";
import { useDispatch, useSelector } from 'react-redux';
import { updateField } from "@/components/Redux/action";

const InsurancePlanCard = (props) => {
   const {item, setShowPlanDetails,setSelectedPlan}=props;
   const dispatch = useDispatch();
   
  return (
    <>
      <Container className={styles.insurancePlanContainer}>
        <Container className={styles.insurancePlanNameImage}>
          <Image
            src={item.InsuranceImg}
            alt="Insurance_Plan_Image"
            className={styles.insurancePlanImage}
            width={64}
            height={64}
          />
          <Container className={styles.insurancePlanNameType}>
            <Text
              className={styles.insurancePlanName}
              appearance="body-xs-bold"
            >
              {/* Tata AGI Insurance */}
              {item.InsuranceFrom}
            </Text>
            <Text className={styles.insuranceType} appearance="body-xs">
              {item.InsuranceType}
            </Text>
          </Container>
          <Container style={{ marginLeft: "auto" }}>
            {item.isNew && (
              <Badge label="New" className={styles.badge} size="small" />
            )}
          </Container>
        </Container>
        <Container className={styles.amountInMonthYear}>
          <Container className={styles.amountInYear}>
            <Text className={styles.planAmountText} appearance="body-xs">
              Cover Amount (IDV)
            </Text>
            <Text className={styles.amount} appearance="body-s-bold">
            ₹ {item.CoverAmount}
            </Text>
          </Container>
          <Container className={styles.amountInMonth}>
            <Button
              title={item.amountPerMonth}
              onClick={()=>{setShowPlanDetails(true);
                setSelectedPlan(item);
                dispatch(updateField('selectedPlan', item));
              }}
              appearance="body-xxs"
              className={styles.btn}
              size="small"
              icon={<IcChevronRight style={{ color: "white" }} />}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default InsurancePlanCard;
