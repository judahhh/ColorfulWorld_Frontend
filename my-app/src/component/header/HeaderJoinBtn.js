import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleJoinBtn = styled.span`
  font-family: "Noto Serif KR", serif;
  font-size: 20px;
  font-weight: bold;
  color: #f0dd22;
  @media (max-width: 786px) {
    font-size: 12px;
  }
`;

const HeaderJoinBtn = () => {
  return (
    <Link to="/join">
      <StyleJoinBtn>JOIN</StyleJoinBtn>
    </Link>
  );
};

export default HeaderJoinBtn;
