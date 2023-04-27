import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleJoinBtn = styled.p`
  font-family: "Noto Serif KR", serif;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #f0dd22;
`;

const HeaderLogoutBtn = () => {
  return (
    <Link to="/login">
      <StyleJoinBtn>LOGOUT</StyleJoinBtn>
    </Link>
  );
};

export default HeaderLogoutBtn;
