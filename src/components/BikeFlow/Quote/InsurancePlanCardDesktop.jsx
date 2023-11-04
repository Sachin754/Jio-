import React from "react";
import {
  Container,
  Text,
  Badge,
  Button,
  Image,
  Icon,
  Divider,
} from "@jds/core";
import styles from "@/styles/BikeFlow/Quote/InsurancePlanCardDesktop.module.scss";
import { IcChevronRight, IcSuccessColored } from "@jds/core-icons";
import { useDispatch } from "react-redux";
import { updateField } from "@/components/Redux/action";


const InsurancePlanCardDesktop = (props) => {
 const {setIsShowPlanDetailsModal, item, setSelectedPlan}=props;
 const dispatch = useDispatch();
  return (
    <>
      <Container className={styles.insurancePlanCardDesktopContainer}>
        <Container className={styles.planTopMainDetails}>
          <Container className={styles.insurancePlanNameImage}>
            <Container className={styles.insurerLogoContainer}>
              <Image
                src={item?.InsuranceImg}
                alt="Insurance_Plan_Image"
                className={styles.insurerLogo}
                width={64}
                height={64}
                aspectRatio="16:9"
              />
            </Container>
            <Container className={styles.insurancePlanNameType}>
              <Text
                className={styles.insurancePlanName}
                appearance="body-xs-bold"
              >
                {item?.InsuranceFrom}
              </Text>
              <Text className={styles.insuranceType} appearance="body-xs">
              {item.InsuranceType}
              </Text>
            </Container>
          </Container>
          <Container className={styles.amountInCoverMonthYear}>
            <Container className={styles.coverAmountContainer}>
              <Text className={styles.coverAmountText} appearance="body-xxs">
                Cover Amount (IDV)
              </Text>
              <Text className={styles.coverAmount} appearance="body-s-bold">
                ₹ {item.CoverAmount || 0}
              </Text>
            </Container>
              <Button
                title={item?.amountPerMonth}
                onClick={() => {setIsShowPlanDetailsModal(true)
                  setSelectedPlan(item)
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

export default InsurancePlanCardDesktop;
