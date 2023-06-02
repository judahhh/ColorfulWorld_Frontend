import Header from "../component/header/Header";
import JoinCard from "../component/join/JoinCard";
import styled from "styled-components";

const StyleLogin = styled.div`
  height: 980px;
  display: flex;
  align-items: center;
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
        <JoinCard />
      </StyleLogin>
    </>
  );
};

export default LoginPage;
