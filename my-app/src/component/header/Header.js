import styled from "styled-components";
import HomeBtn from "./HeaderHomeBtn";
import LoginBtn from "./HeaderLoginBtn";
import JoinBtn from "./HeaderJoinBtn";
import LogoutBtn from "./HeaderLogoutBtn";
import { useState } from "react";
import { useEffect } from "react";

const StyleHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 100px;
  justify-content: space-between;
  .LoginJoin {
    display: flex;
    align-items: center;
    width: 150px;
    justify-content: space-between;
    margin-right: 25px;
  }
  @media (max-width: 786px) {
    margin-bottom: 10vh;
    .LoginJoin {
      width: 20%;
      margin-right: 5%;
    }
  }
`;

const Header = () => {
  let [isLogin, setIsLogin] = useState();

  useEffect(() => {
    setIsLogin(localStorage.getItem("loginState"));
  }, [isLogin]);

  return (
    <StyleHeader>
      <HomeBtn />
      <div className="LoginJoin">
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
