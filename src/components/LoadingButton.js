import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { StyledNextSection } from "./SharedStyledComponents";

const LoadingButton = ({ setCurrentStep, currentStep, totalSteps }) => {
  const [isLoading, setLoading] = useState(false);

  const simulateNetworkRequest = () => {
    return new Promise(resolve => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    // if (sectionSequence[sectionSequence.length - 1] != currentSection) {
    setLoading(true);
    currentStep + 1 <= totalSteps && setCurrentStep(currentStep + 1);
    // }
    // else {
    //   //TODO:redirect to next unit
    // }
  };

  return (
    <StyledNextSection>
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Loading…" : "Continue"}
      </Button>
    </StyledNextSection>
  );
};

export default LoadingButton;
