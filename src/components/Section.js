import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1
          style={{
            fontSize: 44,
            color: "#393C41",
            fontWeight: "bold",
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: 17, marginTop: 5, opacity: 0.9 }}>
          {description}
        </p>
      </ItemText>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content; space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`}
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 450px;
`;

const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.9);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: black;
`;
const DownArrow = styled.img`
  height: 50px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  margin-top: 30px;
`;
