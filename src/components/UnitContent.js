import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { Tab, ListGroup, Row, Col, ProgressBar, Alert } from "react-bootstrap";
import {
  StyledSideBar,
  StyledUnitBannerWrapper,
} from "./SharedStyledComponents";
import LearningGoals from "./LearningGoals";
import LoadingButton from "./LoadingButton";
import SectionContent from "./SectionContent";

const UnitContent = ({
  unitId,
  unitTitle,
  learningGoals,
  content,
  progress,
  setProgress,
}) => {
  const sectionSequence = content.map(e => e.sectionId);

  const [currentSection, setCurrentSection] = useState("learning_goals");

  useEffect(() => {
    // Set steps to current section
    if (currentSection != "learning_goals") {
      setCurrentStep(progress[currentSection][0]);
      setTotalSteps(progress[currentSection][1]);
    } else if (progress["learning_goals"]) {
      setCurrentStep(progress["learning_goals"][0]);
      setTotalSteps(progress["learning_goals"][1]);
    }
  }, [currentSection]);

  const [currentStep, setCurrentStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(1);
  const [progressShown, setProgressShown] = useState(0);
  const [tabKey, setTabKey] = useState("#learning_goals");

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

  let messagesEnd;
  const scrollToBottom = () => {
    console.log("scrolling");
    messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    currentStep !== 0 && scrollToBottom();
    setProgressShown(
      currentStep / totalSteps <= 1 ? (currentStep / totalSteps) * 100 : 100
    );
    // Update progress every time we click the continue button
    if (currentStep) {
      const currentProgress = { ...progress };
      currentProgress[currentSection] = [currentStep, totalSteps];
      setProgress(currentProgress);
    }
  }, [currentStep]);

  const handleSelect = key => {
    setTabKey(key);
    setCurrentSection(key.split("#")[1]);
  };

  const NextButton = () => {
    if (
      sectionSequence[sectionSequence.length - 1] == currentSection &&
      unitId < 4
    ) {
      return (
        <Alert variant="success">
          Creat job! Let's move on to{" "}
          <Alert.Link onClick={() => navigate(`unit${unitId + 1}`)}>
            next unit
          </Alert.Link>
          !
        </Alert>
      );
    } else if (currentStep != totalSteps) {
      return (
        <LoadingButton
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      );
    } else {
      return (
        <Alert variant="success">
          Creat job! Let's move on to{" "}
          <Alert.Link
            onClick={() =>
              handleSelect(
                `#${
                  sectionSequence[sectionSequence.indexOf(currentSection) + 1]
                }`
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
      );
    }
  };

  return (
    <StyledSideBar>
      <Tab.Container defaultActiveKey="#learning_goals" activeKey={tabKey}>
        <Row>
          <Col sm={3} id="leftbar-wrapper">
            <div className="sidebar-heading">{unitTitle} </div>
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
                  <SectionContent
                    currentUnit={unitId}
                    currentSection={currentSection}
                    progress={progress}
                    setProgress={setProgress}
                    currentStep={currentStep}
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
            <NextButton />
            <div
              style={{ float: "left", clear: "both" }}
              ref={el => {
                messagesEnd = el;
              }}
            ></div>
          </Col>
        </Row>
      </Tab.Container>
    </StyledSideBar>
  );
};

export default UnitContent;
