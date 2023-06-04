import styled from "styled-components";
import HomeBtn from "./HeaderHomeBtn";
import LoginBtn from "./HeaderLoginBtn";
import JoinBtn from "./HeaderJoinBtn";
import LogoutBtn from "./HeaderLogoutBtn";
import { useState, useRef } from "react";
import { useEffect } from "react";

const StyleHeader = styled.header`
  width: 100%;
  min-height: 70px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  .LoginJoin {
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: space-between;
    margin-right: 25px;
  }
  .hamburger {
    display: none;
  }
  @media (max-width: 786px) {
    //모바일 반응형
    margin-bottom: 0;
    position: fixed;
    min-height: 5.5vh;
    justify-content: center;
    flex-direction: column;
    .homeAndHam {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 5.5vh;
    }
    .LoginJoin {
      display: none;
      flex-direction: column;
      width: 20%;
      margin-right: 5%;
    }
    .hamburger {
      display: block;
      margin-right: 5%;
    }
  }
`;

const Header = () => {
  let [isLogin, setIsLogin] = useState();
  useEffect(() => {
    setIsLogin(localStorage.getItem("loginState"));
  }, [isLogin]);
  const ref = useRef();
  const hamburgerClick = () => {
    //햄버거 클릭시 처리
    const current = ref.current;
    if (current.style.display === "" || current.style.display === "none")
      current.style.display = "flex";
    else current.style.display = "none";
  };
  return (
    <StyleHeader className="header">
      <div className="homeAndHam">
        <HomeBtn />
        <i
          className=" fas fa-solid fa-bars hamburger"
          onClick={hamburgerClick}
        />
      </div>
      <div className="LoginJoin" ref={ref}>
        {isLogin === null ? (
          <>
            <LoginBtn />
            <JoinBtn />
          </>
        ) : (
          <LogoutBtn />
        )}
      </div>
    </StyleHeader>
  );
};
export default Header;
