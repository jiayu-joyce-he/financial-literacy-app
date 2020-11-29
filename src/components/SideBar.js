import React, { useState, useEffect } from "react";
import {
  Nav,
  Tab,
  ListGroup,
  Row,
  Col,
  ProgressBar,
  Alert,
} from "react-bootstrap";
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
  const sectionSequence = content.map(e => e.sectionId);

  const currentSection = window.location.href.split("#")[1]
    ? window.location.href.split("#")[1]
    : "learning_goals";

  useEffect(() => {
    // Set steps to current section
    if (currentSection != "learning_goals") {
      console.log("new currentSection", currentSection);
      setCurrentStep(progress[currentSection][0]);
      setTotalSteps(progress[currentSection][1]);
    }
  }, [currentSection]);

  const initialSectionProgress =
    currentSection == "learning_goals" ? [0, 1] : progress[currentSection];

  const [currentStep, setCurrentStep] = useState(initialSectionProgress[0]);
  const [totalSteps, setTotalSteps] = useState(initialSectionProgress[1]);
  const [tabKey, setTabKey] = useState("learning_goals");

  const progressShown =
    currentStep / totalSteps < 1 ? (currentStep / totalSteps) * 100 : 100;

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

  useEffect(() => {
    // Update progress every time we click the continue button
    if (currentStep) {
      const currentProgress = new Object();
      currentProgress[currentSection] = [currentStep, totalSteps];
      setProgress({ ...progress, currentProgress });
    }
  }, [currentStep]);

  const handleSelect = key => {
    console.log("selecting key!!!!", key);
    setTabKey(key);
  };

  console.log("activeKey", tabKey);
  return (
    <StyledSideBar>
      <Tab.Container
        defaultActiveKey="#learning_goals"
        activeKey={`#${tabKey}`}
      >
        <Row>
          <Col sm={3} id="leftbar-wrapper">
            <div class="sidebar-heading">{unitTitle} </div>
            <ListGroup>
              <ListGroup.Item
                onSelect={handleSelect}
                action
                href="#learning_goals"
              >
                Learning Goals
              </ListGroup.Item>
              {content.map(e => (
                <ListGroup.Item
                  action
                  href={`#${e.sectionId}`}
                  onSelect={handleSelect}
                >
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
            {currentStep + 1 < totalSteps ? (
              <LoadingButton
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                totalSteps={totalSteps}
              />
            ) : (
              <Alert variant="success">
                Creat job! Let's move on to{" "}
                <Alert.Link
                  //   eventKey={`#${
                  //     sectionSequence[sectionSequence.indexOf(currentSection) + 1]
                  //   }`}
                  onClick={() =>
                    handleSelect(
                      sectionSequence[
                        sectionSequence.indexOf(currentSection) + 1
                      ]
                    )
                  }
                  href={`#${
                    sectionSequence[sectionSequence.indexOf(currentSection) + 1]
                  }`}
                >
                  the next section
                </Alert.Link>
                !
              </Alert>
            )}
          </Col>
        </Row>
      </Tab.Container>
    </StyledSideBar>
  );
};

export default SideBar;
