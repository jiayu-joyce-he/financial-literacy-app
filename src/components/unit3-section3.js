import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Img from "gatsby-image";
import {
  Button,
  FormControl,
  InputGroup,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

const StyledInstructionalContent = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 2rem;

  .input-group {
    margin-top: 1rem;
  }

  .modal-body {
    text-align: center;
  }

  table {
    margin: 2rem auto;
  }

  .bubble {
    position: relative;
    background: #d9d9d9;
    border-color: #ffe599;
    border-radius: 1rem;
    padding: 1rem;
    text-align: left;
    color: #000;
  }

  .bubble-bottom-left:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 24px solid #d9d9d9;
    border-left: 12px solid transparent;
    border-top: 12px solid #d9d9d9;
    border-bottom: 20px solid transparent;
    left: -32px;
  }

  .bubble-bottom-up:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 24px solid #d9d9d9;
    border-left: 12px solid transparent;
    border-bottom: 12px solid #d9d9d9;
    border-top: 20px solid transparent;
    left: 32px;
    top: -24px;
  }

  .btn.active {
    background-color: #ffe599 !important;
    border-color: #434343 !important;
    color: #434343 !important;
  }

  .center {
    display: flex;
    margin-top: 1rem;
    button {
      margin: auto;
      width: 8rem;
      margin-bottom: 2rem;
    }
  }

  p {
    margin-top: 1rem;
  }

  .row {
    margin-top: 1rem;
  }

  .response {
    color: #434343;
    border-color: #434343;
    margin: 0.25rem;
    z-index: 1;

    #selected {
      background-color: #ffe599;
    }

    :active {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :hover {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
    :focus {
      background-color: #ffe599;
      border-color: #434343;
      color: #434343;
    }
  }

  .highlight {
    background-color: #ffe599;
  }

  #multiple-choice {
    min-width: 200px;
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
      color: white;
      font-size: 2rem;
      font-variant: petite-caps;
      margin: auto;
    }

    .choices {
      font-size: 1rem;
      color: #434343;
      border-color: #434343;
      margin-top: 1rem;
      z-index: 1;

      :active {
        background-color: #ffe599;
        border-color: #434343;
        color: 434343;
      }
      :hover {
        background-color: #ffe599;
        border-color: #434343;
        color: 434343;
      }
      :focus {
        background-color: #ffe599;
        border-color: #434343;
        color: 434343;
      }
    }
  }
`;

const DragDropContainer = styled.div`
  display: flex;
`;

const DragContainer = styled.div`
  margin: 0.5rem;
  border: 1px solid #434343;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.h4`
  padding: 8px;
`;
const OptionList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "#ffe599" : "none")};
  flex-grow: 1;
  min-height: 100px;
  min-width: ${props => (props.question !== "risk" ? "200px" : "130px")};
`;

const OptionContainer = styled.div`
  border: 1px solid #434343;
  border-radius: 0.25rem;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "#ffe599" : "none")};
`;

const DragList = ({ column, options, question }) => {
  return (
    <DragContainer>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => {
          return (
            <OptionList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              question={question}
            >
              {options.map((option, index) => (
                <Draggable
                  draggableId={option.id}
                  index={index}
                  key={option.id}
                  isDragDisabled={question === "answer"}
                >
                  {(provided, snapshot) => (
                    <OptionContainer
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      isDragging={snapshot.isDragging}
                    >
                      {option.content}
                    </OptionContainer>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </OptionList>
          );
        }}
      </Droppable>
    </DragContainer>
  );
};

let initialRiskData = {
  options: {
    "option-1": { id: "option-1", content: "Mix of hundreds of stocks" },
    "option-2": { id: "option-2", content: "Savings Accounts" },
    "option-3": { id: "option-3", content: "Mix of Stocks & Bonds" },
    "option-4": { id: "option-4", content: "Individual Stocks" },
    "option-5": { id: "option-5", content: "Bonds" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Choose From Here:",
      optionIds: ["option-1", "option-2", "option-3", "option-4", "option-5"],
    },
    "column-2": {
      id: "column-2",
      title: "Low Risk",
      optionIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Moderate Risk",
      optionIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "High Risk",
      optionIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

let riskAnswer = {
  options: {
    "option-1": { id: "option-1", content: "Mix of hundreds of stocks" },
    "option-2": { id: "option-2", content: "Savings Accounts" },
    "option-3": { id: "option-3", content: "Mix of Stocks & Bonds" },
    "option-4": { id: "option-4", content: "Individual Stocks" },
    "option-5": { id: "option-5", content: "Bonds" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Low Risk",
      optionIds: ["option-2", "option-5"],
    },
    "column-2": {
      id: "column-2",
      title: "Moderate Risk",
      optionIds: ["option-1", "option-3"],
    },
    "column-3": {
      id: "column-3",
      title: "High Risk",
      optionIds: ["option-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

let initialLiquidData = {
  options: {
    "option-1": { id: "option-1", content: "Retirement Accounts" },
    "option-2": { id: "option-2", content: "Savings Accounts" },
    "option-3": { id: "option-3", content: "Investment Accounts" },
    "option-4": { id: "option-4", content: "Individual Stocks" },
    "option-5": { id: "option-5", content: "Bonds" },
    "option-6": { id: "option-5", content: "Real Estate" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Choose From Here:",
      optionIds: ["option-1", "option-2", "option-3", "option-4", "option-5"],
    },
    "column-2": {
      id: "column-2",
      title: "Liquid",
      optionIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Not Liquid",
      optionIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

let liquidityAnswer = {
  options: {
    "option-1": { id: "option-1", content: "Retirement Accounts" },
    "option-2": { id: "option-2", content: "Savings Accounts" },
    "option-3": { id: "option-3", content: "Investment Accounts" },
    "option-4": { id: "option-4", content: "Individual Stocks" },
    "option-5": { id: "option-5", content: "Bonds" },
    "option-6": { id: "option-5", content: "Real Estate" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Liquid",
      optionIds: ["option-2", "option-4", "option-5", "option-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Not Liquid",
      optionIds: ["option-1", "option-5", "option-3"],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

const DragNDrop = (initialData, question) => {
  const [dragState, setDragState] = useState(initialData);
  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }
    if (
      destination.droppableId == source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = dragState.columns[source.droppableId];
    const finish = dragState.columns[destination.droppableId];

    if (start === finish) {
      const newOptionIds = Array.from(start.optionIds);
      newOptionIds.splice(source.index, 1);
      newOptionIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        optionIds: newOptionIds,
      };

      const newState = {
        ...dragState,
        columns: {
          ...dragState.columns,
          [newColumn.id]: newColumn,
        },
      };
      setDragState(newState);
      if (question === "risk") {
        initialRiskData = newState;
      } else if (question === "liquidity") {
        initialLiquidData = newState;
      }
    } else {
      // Moving from one list to another
      const startOptionIds = Array.from(start.optionIds);
      startOptionIds.splice(source.index, 1);
      const newStart = {
        ...start,
        optionIds: startOptionIds,
      };

      const finishOptionIds = Array.from(finish.optionIds);
      finishOptionIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        optionIds: finishOptionIds,
      };

      const newState = {
        ...dragState,
        columns: {
          ...dragState.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      setDragState(newState);
      if (question === "risk") {
        initialRiskData = newState;
      } else if (question === "liquidity") {
        initialLiquidData = newState;
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DragDropContainer>
        {dragState.columnOrder.map(columnId => {
          const column = dragState.columns[columnId];
          const options = column.optionIds.map(
            optionId => dragState.options[optionId]
          );
          return (
            <DragList
              key={column.id}
              column={column}
              options={options}
              question={question}
            />
          );
        })}
      </DragDropContainer>
    </DragDropContext>
  );
};

const Unit3Section1 = ({ progress, setProgress, changeSection }) => {
  const data = useStaticQuery(
    graphql`
      query {
        agent1: file(relativePath: { eq: "agent-1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const Step1 = () => {
    return (
      <Row>
        <Col sm={2}>
          <Img fluid={data.agent1.childImageSharp.fluid} />
        </Col>
        <Col sm={10}>
          <StyledInstructionalContent>
            <div className="bubble bubble-bottom-left">
              <p>
                Before we show you anything, why don’t you give it a try
                matching the different kinds of investments with their relative
                amount of risk, using your intuitions?{" "}
              </p>
              <p>
                Don't worry if you don't know how yet, we will go over them
                soon!
              </p>
            </div>{" "}
            <div> {DragNDrop(initialRiskData, "risk")}</div>
          </StyledInstructionalContent>
        </Col>
      </Row>
    );
  };

  const Step2 = () => {
    return (
      <Row>
        <StyledInstructionalContent>
          <div className="bubble bubble-bottom-up">
            <p>
              Risk isn’t the only consideration we have to make when choosing
              where to save. We should also consider <strong>liquidity</strong>.
            </p>
            <p>
              Tell me what you think, is <i>buying a boat</i> considered a
              liquid asset? Why or why not?
            </p>
          </div>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>My thoughts:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </StyledInstructionalContent>
      </Row>
    );
  };
  const Step3 = () => {
    return (
      <StyledInstructionalContent>
        <div className="bubble highlight">
          <p>
            Liquidity refers to the ease with which an asset or security can be
            converted into <strong>cash</strong> without affecting its market
            price.{" "}
          </p>

          <p>
            So even though a boat floats in liquid, it is not a liquid asset.
          </p>
        </div>
      </StyledInstructionalContent>
    );
  };

  const Step4 = () => {
    return (
      <Row>
        <Col sm={2}>
          <Img fluid={data.agent1.childImageSharp.fluid} />
        </Col>
        <Col sm={10}>
          <StyledInstructionalContent>
            <div className="bubble bubble-bottom-left">
              <p>
                Let's try this again, using your intuition to match these
                investment tools into these categories!
              </p>
              <p>We will go over them next!</p>
            </div>
            <div> {DragNDrop(initialLiquidData, "liquidity")}</div>
          </StyledInstructionalContent>
        </Col>
      </Row>
    );
  };

  const Step5 = () => {
    const choices = [
      {
        choice: "Retirement Accounts",
        reflection: "How much risk and liquidity do retirement accounts have?",
        link: "https://www.youtube.com/embed/vMJ2dkSc8Ok",
        index: 0,
      },
      {
        choice: "Savings  Accounts",
        reflection: "How much risk and liquidity do savings accounts have?",
        link: "https://www.youtube.com/embed/LsDKT7P_iws",
        index: 1,
      },
      {
        choice: "Stock Market",
        reflection: "How much risk and liquidity do stocks have?",
        link: "https://www.youtube.com/embed/249Gc7FDWRI",
        index: 2,
      },
      {
        choice: "Bonds",
        reflection: "How much risk and liquidity do bonds have?",
        link: "https://www.youtube.com/embed/IuyejHOGCro",
        index: 3,
      },
    ];

    const [show, setShow] = useState(null);
    const [newChoices, setNewChoices] = useState(choices);

    useEffect(() => {
      if (choices[show]) {
        console.log("choices[show]", choices[show]);
        const newChoicesTemp = [...choices];
        newChoicesTemp.splice(choices[show].index, 1);
        setNewChoices(newChoicesTemp);
      }
    }, [show]);

    return (
      <StyledInstructionalContent>
        <div className="bubble bubble-bottom-up">
          <p>
            Now it's time to learn about these accounts! Click on one of the
            names to learn more.
          </p>
        </div>
        <div id="multiple-choice">
          {choices.map((e, index) => (
            <Button
              variant="outline-primary"
              size="lg"
              className="response"
              key={index}
              onClick={() => setShow(index)}
            >
              {e.choice}
            </Button>
          ))}
        </div>
        <Modal
          show={typeof show === "number"}
          onHide={() => setShow(false)}
          size="xl"
          centered
        >
          {choices[show] && (
            <>
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  {choices[show].choice}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col md={12} xl={8}>
                    <iframe
                      src={choices[show].link}
                      title={"Time Value"}
                      width={"729"}
                      height={"409.5"}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="1"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    />
                  </Col>
                  <Col md={12} xl={4}>
                    <StyledInstructionalContent>
                      <div className="bubble">{choices[show].reflection}</div>
                      <p>Learn more about:</p>

                      <div id="multiple-choice">
                        {newChoices.map((e, index) => (
                          <Button
                            variant="outline-primary"
                            className="response"
                            key={index}
                            onClick={() => setShow(e.index)}
                          >
                            {e.choice}
                          </Button>
                        ))}
                      </div>
                    </StyledInstructionalContent>
                  </Col>
                </Row>
              </Modal.Body>
            </>
          )}
        </Modal>
      </StyledInstructionalContent>
    );
  };

  const Step6 = () => {
    return (
      <Row>
        <Col sm={2}>
          <Img fluid={data.agent1.childImageSharp.fluid} />
        </Col>
        <Col sm={10}>
          <StyledInstructionalContent>
            <div className="bubble bubble-bottom-left">
              <p>
                After watching those videos, do you now have a better
                understanding of these different investment tools?
              </p>
              <p>
                Here is my answer to the first question about risk of these
                investment tools, how do they compare to yours?
              </p>
            </div>
            <div> {DragNDrop(riskAnswer, "answer")}</div>
            <div className="bubble highlight">
              <p>
                Treasury bonds and bank accounts hold the least risk. A variety
                of stocks and bonds have moderate risk. And individual stocks
                hold the highest risk.
              </p>
            </div>
          </StyledInstructionalContent>
        </Col>
      </Row>
    );
  };

  const Step7 = () => {
    return (
      <Row>
        <Col sm={2}></Col>
        <Col sm={10}>
          <StyledInstructionalContent>
            <div className="bubble bubble-bottom-up">
              <p>
                Here is my answer to second question on the liquidity of these
                investment tools, how do they compare to yours?
              </p>
            </div>
            <div> {DragNDrop(liquidityAnswer, "answer")}</div>
            <div className="bubble highlight">
              <p>
                Savings accounts, stocks, and bonds are liquid. Retirement
                accounts and real estate are not liquid. Investment accounts can
                be both.
              </p>
            </div>
          </StyledInstructionalContent>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Step1 />
      {progress["section3"][0] >= 1 && <Step2 />}
      {progress["section3"][0] >= 2 && <Step3 />}
      {progress["section3"][0] >= 3 && <Step4 />}
      {progress["section3"][0] >= 4 && <Step5 />}
      {progress["section3"][0] >= 5 && <Step6 />}
      {progress["section3"][0] >= 6 && <Step7 />}
    </>
  );
};

export default Unit3Section1;
