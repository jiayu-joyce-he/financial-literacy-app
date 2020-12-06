import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { StyledNextSection } from "./styled-wrapper";

const LoadingButton = ({ setCurrentStep, currentStep, totalSteps }) => {
  const [isLoading, setLoading] = useState(false);

  const simulateNetworkRequest = () => {
    return new Promise(resolve => setTimeout(resolve, 350));
  };

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        currentStep + 1 <= totalSteps && setCurrentStep(currentStep + 1);
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
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
