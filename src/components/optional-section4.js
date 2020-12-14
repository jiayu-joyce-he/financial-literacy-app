import React from "react";
import styled from "styled-components";

const CalculatorQuizWrapper = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const OptionalSection4 = () => {
  const Step1 = () => {
    return (
      <CalculatorQuizWrapper>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfvvL45LsqZyxew6LVry-QazXfOL8aIkw_3fjmRa2OWTaN3mQ/viewform?embedded=true"
          width="640"
          height="570"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="unit-2-quiz"
        >
          Loading…
        </iframe>
      </CalculatorQuizWrapper>
    );
  };

  return (
    <>
      <Step1 />
    </>
  );
};

export default OptionalSection4;
