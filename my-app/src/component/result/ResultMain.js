import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const ImgBtn = lazy(() => import("../commons/ImgBtn"));
const ResultSurveyCard = lazy(() => import("./ResultSurveyCard"));

const StyledSurvetAndBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleImg = styled.img`
  width: 320px;
  height: auto;
  margin-right: 80px;
`;

/*fallback html 처리*/
const ResultMain = ({ Resource }) => {
  const navigate = useNavigate();
  const imageFile = Resource.image.read();
  const imageDownload = () => {
    //image 다운로드 함수
    let link = document.createElement("a");
    link.href = URL.createObjectURL(imageFile);
    link.download = imageFile.name;
    link.click();
  };
  const TransformAnotherImage = () => {
    navigate("/change");
    window.location.reload();
  };
  return (
    <>
      <StyleImg src={URL.createObjectURL(imageFile)} alt="transfer" />
      <StyledSurvetAndBtn>
        <ResultSurveyCard imageFile={imageFile} />
        <ImgBtn label="DOWNLOAD" clickfuc={imageDownload} />
        <ImgBtn label="다른 이미지 변환" clickfuc={TransformAnotherImage} />
      </StyledSurvetAndBtn>
    </>
  );
};

export default ResultMain;
