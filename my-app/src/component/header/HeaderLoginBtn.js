import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLoginBtn = styled.span`
  font-family: "Noto Serif KR", serif;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #f0dd22;
  @media (max-width: 786px) {
    font-size: 12px;
  }
`;

const HeaderLoginBtn = () => {
  return (
    <Link to="/login">
      <StyleLoginBtn>LOGIN</StyleLoginBtn>
    </Link>
  );
};

export default HeaderLoginBtn;
