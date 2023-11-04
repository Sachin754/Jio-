import React, { useState } from "react";
import { Spinner, Container, BottomSheet } from "@jds/core";
import styles from "@/styles/LoadingScreen.module.scss";
import overlayStyles from "@/styles/Overlay.module.scss";
import PrevInsuranceDetailsBS from "../PreQuote/PrevInsuranceDetailsBS";
import ExistingPolicyClaimBS from "../PreQuote/ExistingPolicyClaimBS";
import { IcStatusLoading } from "@jds/extended-icons";

const LoadingScreen = (props) => {
  const { setIsLoading } = props;
  const [isPrevInsuranceBS, setPrevInsuranceBS] = useState(true);
  const [isExistingPolicyClaim, setIsExistingPolicyClaim] = useState(false);
  return (
    <>
      <Container className={styles.LoadingScreen}>
        <Spinner
          className={styles.spinner}
          style={{ color: "white" }}
          appearance="vibrant"
          label="Fetching best Insurance Policies for you..."
        />
      </Container>
      <Container className={overlayStyles.modelOverlay}></Container>
      {isPrevInsuranceBS && (
        <PrevInsuranceDetailsBS
          setPrevInsuranceBS={setPrevInsuranceBS}
          setIsExistingPolicyClaim={setIsExistingPolicyClaim}
        />
      )}
      {isExistingPolicyClaim && (
        <>
          <ExistingPolicyClaimBS
            setIsLoading={setIsLoading}
            setIsExistingPolicyClaim={setIsExistingPolicyClaim}
          />
        </>
      )}
    </>
  );
};

export default LoadingScreen;
