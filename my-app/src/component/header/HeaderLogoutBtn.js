import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyleJoinBtn = styled.p`
  font-family: "Noto Serif KR", serif;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #f0dd22;
`;

const HeaderLogoutBtn = () => {
  const navigate = useNavigate();
  const Logout = () => {
    if (window.confirm("로그아웃 하시겠습니까?"))
      axios
        .post(
          "/logout",
          {},
          {
            headers: {
              access_token: localStorage.getItem("jwt_accessToken"),
              refresh_token: localStorage.getItem("jwt_refreshToken"),
            },
          }
        )
        .then((response) => {
          console.log(response);
          localStorage.removeItem("atk");
          localStorage.removeItem("rtk");
          localStorage.setItem("loginState", false);
          alert("로그아웃 성공! 다음에 또 만나요");
          navigate("/login");
        })
        .catch((error) => console.log(error));
  };

  return (
    <Link to="/login">
      <StyleJoinBtn onClick={Logout}>LOGOUT</StyleJoinBtn>
    </Link>
  );
};

export default HeaderLogoutBtn;
