import React from "react";
import styled from "styled-components";

const Style404Card = styled.div`
  width: 480px;
  height: 480px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Style404Text = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`;

const StyleGoHomeBtn = styled.button`
  width: 100px;
  height: 40px;
  border: solid 1px #ebd500;
  font-family: "Noto Sans KR", sans-serif;
  background-color: white;
  color: #ebd500;
  border-radius: 5px;
`;

const NotFoundPage = () => {
  return (
    <Style404Card>
      <Style404Text>존재하지 않는 페이지입니다.</Style404Text>
      <StyleGoHomeBtn>메인 홈으로 이동</StyleGoHomeBtn>
    </Style404Card>
  );
};

export default NotFoundPage;
