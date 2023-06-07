import React, { useState } from "react";
import styled from "styled-components";
import Header from "../component/header/Header";
import JoinIntensity from "../component/join/JoinIntensity";
import FormBtn from "../component/commons/FormBtn";
import axios from "axios";

const StyleMyIntensity = styled.div`
  width: 480px;
  height: 600px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 786px) {
    width: 80%;
    height: auto;
  }
`;

const StyleMyInfo = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 786px) {
    height: 100vh;
    width: 100%;
  }
`;

const MyInfoPage = () => {
  const [intensity, setIntensity] = useState(localStorage.getItem("index"));
  const updateIndex = () => {
    const body = {
      intensity: intensity,
    };
    axios
      .post("https://api.colorfulworld.site/api/update", body, {
        headers: {
          access_token: localStorage.getItem("atk"),
          refresh_token: localStorage.getItem("rtk"),
        },
      })
      .then((res) => {
        localStorage.setItem("index", res.headers.intensity);
        alert("정상적으로 변환되었습니다!");
      })
      .then((error) => console.log(error));
  };
  return (
    <>
      <Header />
      <StyleMyInfo>
        <StyleMyIntensity>
          <JoinIntensity setIntensity={setIntensity} />
          <FormBtn value={"변환하기"} ClickFun={updateIndex} />
        </StyleMyIntensity>
      </StyleMyInfo>
    </>
  );
};

export default MyInfoPage;
