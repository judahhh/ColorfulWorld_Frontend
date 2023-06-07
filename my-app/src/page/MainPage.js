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
    height: 100vh;
    width: 100%;
  }
`;

const StyleBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const MainPage = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("loginState");
  //페이지 렌더링 시에 로그인이 안 되어 있을 경우 로그인 페이지로 이동
  // useEffect(() => {
  //   if (!isLogin) navigate("/login");
  // }, [isLogin]);
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
