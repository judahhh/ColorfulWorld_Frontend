import Header from "../component/header/Header";
import LoginCard from "../component/login/LoginCard";
import styled from "styled-components";

const StyleLogin = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  @media (max-width: 786px) {
    height: 100%;
    width: 100%;
  }
`;

const LoginPage = () => {
  return (
    <>
      <Header />
      <StyleLogin>
        <LoginCard />
      </StyleLogin>
    </>
  );
};

export default LoginPage;
