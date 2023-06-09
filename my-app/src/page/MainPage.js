import Header from "../component/header/Header";
import IntroduceCard from "../component/main/IntroduceCard";
import FormBtn from "../component/commons/FormBtn";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyleMain = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 786px) {
    padding-top: 10vh;
    height: 100%;
    width: 100%;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  const gotochange = () => {
    navigate("/change");
  };
  return (
    <>
      <Header />
      <StyleMain>
        <IntroduceCard />
        <FormBtn ClickFun={gotochange} value="IMAGE" />
      </StyleMain>
    </>
  );
};

export default MainPage;
