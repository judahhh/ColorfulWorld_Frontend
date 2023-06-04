import React, { lazy, useContext } from "react";
import { ImageContext } from "../../App";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const ImgBtn = lazy(() => import("../commons/ImgBtn"));
const ResultSurveyCard = lazy(() => import("./ResultSurveyCard"));

const StyledSurvetAndBtn = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 786px) {
    align-items: center;
  }
`;

const StyleImgBox = styled.div`
  display: flex;
  @media (max-width: 786px) {
    width: 80vw;
    justify-content: space-between;
    margin-bottom: 5vh;
  }
`;

const StyleImg = styled.img`
  width: auto;
  height: 280px;
  margin-right: 80px;
  @media (max-width: 786px) {
    width: 36vw;
    height: auto;
    margin-right: 0;
  }
`;

/*fallback html 처리*/
const ResultMain = ({ Resource }) => {
  const { image } = useContext(ImageContext);
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
    //새로운 이미지 변환시 돌아간다.
    navigate("/change");
    window.location.reload();
  };
  return (
    <>
      <StyleImgBox>
        <StyleImg src={URL.createObjectURL(image)} alt="origin" />
        <StyleImg src={URL.createObjectURL(imageFile)} alt="transfer" />
      </StyleImgBox>
      <StyledSurvetAndBtn>
        <ResultSurveyCard imageFile={imageFile} />
        <ImgBtn label="DOWNLOAD" clickfuc={imageDownload} />
        <ImgBtn label="다른 이미지 변환" clickfuc={TransformAnotherImage} />
      </StyledSurvetAndBtn>
    </>
  );
};

export default ResultMain;
