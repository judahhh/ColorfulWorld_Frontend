import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleJoinBtn = styled.span`
  font-family: "Noto Serif KR", serif;
  font-size: 20px;
  font-weight: bold;
  color: #f0dd22;
  @media (max-width: 786px) {
    font-size: 12px;
    height: 3.5vh;
    margin-left: 25%;
  }
`;

const HeaderMyInfoBtn = () => {
  return (
    <Link to="/myInfo">
      <StyleJoinBtn>MY</StyleJoinBtn>
    </Link>
  );
};

export default HeaderMyInfoBtn;
