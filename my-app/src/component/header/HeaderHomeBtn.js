import styled from "styled-components";
import { Link } from "react-router-dom";

const StyleHomeBtn = styled.p`
  font-family: "Noto Serif KR", serif;
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  color: #f0dd22;
  margin-left: 40px;
  @media (max-width: 786px) {
    width: 100%;
    font-size: 100%;
    margin-left: 20%;
  }
`;

const HeaderHomeBtn = () => {
  //누르면 main으로 간다.
  return (
    <Link to="/">
      <StyleHomeBtn>Colorful World</StyleHomeBtn>
    </Link>
  );
};

export default HeaderHomeBtn;
