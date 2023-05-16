import { useState, useEffect } from "react";
import Header from "../component/header/Header";
import ChangeCard from "../component/change/ChangeCard";
import styled from "styled-components";
import ImgBtn from "../component/commons/ImgBtn";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const StyleChange = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChangePage = () => {
  const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("loginState");
  //페이지 렌더링 시에 로그인이 안 되어 있을 경우 로그인 페이지로 이동
  // useEffect(() => {
  //   if (!isLogin) navigate("/login");
  // }, [isLogin]);
  /*const image = useContext(imageContext);
  const onClick = () => {
    console.log(image.images);
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0amd1czU5MzVAZ21haWwuY29tIiwiaWF0IjoxNjgzNjEwNDY1LCJleHAiOjE2ODM2MTIyNjUsInR5cGUiOiJhY2Nlc3MifQ.JQz8u0-ZEYvl_cIQWXg9wROzc-9vAgMvC-zF2RZn0HTg_OIMOT-FCK-S_gfNbgCo";
    const formData = new FormData();
    formData.append("image", image.images);
    axios.post("/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  };*/
  const getImageUrl = (image) => {
    setImageUrl(() => image);
  };
  return (
    <>
      <Header />
      <StyleChange>
        <ChangeCard getImageUrl={getImageUrl} />
        <Link to={`/result/${imageUrl}`}>
          <ImgBtn label="RESULT" />
        </Link>
      </StyleChange>
    </>
  );
};

export default ChangePage;
