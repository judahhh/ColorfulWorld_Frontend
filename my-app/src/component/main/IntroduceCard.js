import React from "react";
import { useState } from "react";
import styled from "styled-components";
import main from "../img/main.png";
import main2 from "../img/main2.png";

const StyleIntroduceCard = styled.main`
  width: 480px;
  height: 480px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 786px) {
    width: 80vw;
    height: 85vw;
  }
`;

const StyleIntroduceTitle = styled.p`
  font-size: 28px;
  font-family: "Noto Serif KR", serif;
  color: #f0dd22;
  @media (max-width: 786px) {
    font-size: 20px;
  }
`;

const StyleImg = styled.img`
  width: 260px;
  height: 260px;
  @media (max-width: 786px) {
    width: 33vw;
    height: 33vw;
  }
`;
const StyleCardText = styled.p`
  font-size: 16px;
  align-items: center;
  color: black;
  font-family: "Noto Sans KR", sans-serif;
  padding: 0px;
  margin-bottom: 0px;
  @media (max-width: 786px) {
    padding: 2%;
    font-size: 25%;
  }
`;
const StyleBtnContainer = styled.div`
  text-align: center;
  margin: 20px;
  @media (max-width: 786px) {
    margin: 0;
  }
`;
const StyleSlideBtn = styled.button`
  width: 10px;
  height: 12px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: none;
  display: inline-block;
  margin: 5px;
  :hover {
    cursor: pointer;
  }
  &.active {
    background-color: #ebd500;
  }
  @media (max-width: 786px) {
    width: 25%;
    height: 50%;
  }
`;

const IntroduceCard = () => {
  let [btnState, setBtnState] = useState(1);
  return (
    <>
      <StyleIntroduceCard>
        <StyleIntroduceTitle>Welcome!</StyleIntroduceTitle>
        {btnState === 1 ? (
          <StyleImg src={main}></StyleImg>
        ) : (
          <StyleImg src={main2}></StyleImg>
        )}
        {btnState === 1 ? (
          <StyleCardText>
            색각이상자 분들에게 보다 <br /> 다채로운 세상을 선물하겠습니다.
          </StyleCardText>
        ) : (
          <StyleCardText>
            일반인과 색각이상자 모두가
            <br /> 이질감 없이 함께 볼 수 있는 서비스!
          </StyleCardText>
        )}

        <StyleBtnContainer>
          <StyleSlideBtn
            onClick={() => setBtnState(1)}
            className={btnState === 1 ? "active" : ""}
          ></StyleSlideBtn>
          <StyleSlideBtn
            onClick={() => setBtnState(2)}
            className={btnState === 2 ? "active" : ""}
          ></StyleSlideBtn>
        </StyleBtnContainer>
      </StyleIntroduceCard>
    </>
  );
};

export default IntroduceCard;
