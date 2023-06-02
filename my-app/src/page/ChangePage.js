import { useContext } from "react";
import { ImageContext } from "../App";
import Header from "../component/header/Header";
import ChangeCard from "../component/change/ChangeCard";
import styled from "styled-components";
import ImgBtn from "../component/commons/ImgBtn";
import { useNavigate } from "react-router-dom";

const StyleChange = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 786px) {
    height: 100%;
    width: 100%;
  }
`;

const ChangePage = () => {
  const { image } = useContext(ImageContext);
  const navigate = useNavigate();
  const clickfuc = () => {
    if (!image) {
      alert("이미지를 업로드 해주세요!");
      return;
    }
    navigate(`/result`);
  };

  return (
    <>
      <Header />
      <StyleChange>
        <ChangeCard />
        <ImgBtn label="RESULT" clickfuc={clickfuc} />
      </StyleChange>
    </>
  );
};

export default ChangePage;
