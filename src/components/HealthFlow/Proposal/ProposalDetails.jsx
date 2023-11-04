import React, { useState } from "react";
import {
  Text,
  Container,
  Stepper,
  StepItem,
  Button,
  ContentBlock,
  Input,
} from "@jds/core";
import { IcUser } from "@jds/core-icons";
import { IcHeartRate, IcPartner, IcProtection } from "@jds/extended-icons";
import ProposerDetails from "./ProposerDetails";
import MedicalHistory from "./MedicalHistory";
import NomineeDetails from "./NomineeDetails";

const ProposalDetails = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  console.log(activeStep, "step");
  return (
    <>
      {/* <Stepper
        ref={{
          current: "[Circular]",
        }}
        itemsType="icon"
        layout="full-width"
        onActiveChange={function noRefCheck() {

        }}
        onComplete={function noRefCheck() {}}
        onStepDataChange={function noRefCheck() {}}
        orientation="horizontal"
      >
        <StepItem icon={<IcUser />} label="Login"></StepItem>
        <StepItem icon={< IcProtection/>} label="Choose a plan"></StepItem>
        <StepItem icon={<IcHeartRate />} label="Next Steps"></StepItem>
        <StepItem icon={<IcPartner />} label="Next Steps"></StepItem>
      </Stepper>
      <Button title="nextStep" onClick={handleNext} />
      <ProposerDetails/> */}
       <ProposerDetails/>
    </>
  );
};

export default ProposalDetails;
