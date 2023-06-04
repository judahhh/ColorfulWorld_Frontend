import Header from "../component/header/Header";
import JoinCard from "../component/join/JoinCard";
import styled from "styled-components";

const StyleLogin = styled.div`
  height: 980px;
  display: flex;
  justify-content: center;
  @media (max-width: 786px) {
    width: 100%;
    padding-top: 10vh;
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
