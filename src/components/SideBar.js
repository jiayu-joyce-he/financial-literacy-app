import React, { useState, useEffect } from "react";
import { Tab, ListGroup, Row, Col, ProgressBar, Alert } from "react-bootstrap";
import {
  StyledSideBar,
  StyledUnitBannerWrapper,
} from "../components/SharedStyledComponents";
import LearningGoals from "./LearningGoals";
import LoadingButton from "./LoadingButton";

const SideBar = ({
  unitTitle,
  learningGoals,
  content,
  progress,
  setProgress,
  //   sectionNum,
  //   setSectionNum,
  //   totalSectionNum,
}) => {
  console.log("progress", progress);

  const currentSection = (typeof window !== "undefined"
    ? window.location.href
    : ""
  ).split("#")[1];

  console.log("currentSection", currentSection);
  const currentSectionProgress =
    currentSection == "learning_goals" ? [0, 1] : progress[currentSection];
  console.log("currentSectionProgress", currentSectionProgress);

  let sectionNum = 1;
  let totalSectionNum = 3;
  const progressShown = (1 / 3) * 100;
  const SectionProgress = () => {
    return (
      <StyledUnitBannerWrapper>
        <p>Section Progress:</p>
        <ProgressBar
          variant="success"
          now={progressShown}
          label={`${progressShown.toFixed(2)}%`}
        />
      </StyledUnitBannerWrapper>
    );
  };

  return (
    <StyledSideBar>
      <Tab.Container defaultActiveKey="#learning_goals">
        <Row>
          <Col sm={3} id="leftbar-wrapper">
            <div class="sidebar-heading">{unitTitle} </div>
            <ListGroup>
              <ListGroup.Item action href="#learning_goals">
                Learning Goals
              </ListGroup.Item>
              {content.map(e => (
                <ListGroup.Item action href={`#${e.sectionId}`}>
                  {e.sectionName}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={9}>
            <SectionProgress />
            <Tab.Content>
              <Tab.Pane eventKey="#learning_goals">
                <LearningGoals learningGoals={learningGoals} />
              </Tab.Pane>
              {content.map(e => (
                <Tab.Pane action eventKey={`#${e.sectionId}`}>
                  {`content of ${e.sectionName}`}
                </Tab.Pane>
              ))}
            </Tab.Content>
            {sectionNum !== totalSectionNum ? (
              <LoadingButton
              // setSectionNum={setSectionNum}
              // sectionNum={sectionNum}
              // stepNum setStepNum totalSteps
              />
            ) : (
              <Alert variant="success">
                Creat job! Let's move on to the next section!
              </Alert>
            )}
          </Col>
        </Row>
      </Tab.Container>
    </StyledSideBar>
  );
};

export default SideBar;
