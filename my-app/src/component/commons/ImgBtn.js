import styled from "styled-components";

const StyleImgBtn = styled.button`
  width: 400px;
  height: 56px;
  border-radius: 10px;
  border: none;
  background-color: #ebd500;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 786px) {
    width: 60vw;
    height: 5vh;
  }
`;
const StyleLabel = styled.p`
  font-size: 20px;
  font-family: "Noto Serif KR", serif;
  color: #ffffff;
  margin: 0;
  @media (max-width: 786px) {
    font-size: 100%;
  }
`;

const ImgBtn = (props) => {
  const { label, clickfuc } = props;
  return (
    <StyleImgBtn onClick={clickfuc}>
      <StyleLabel>{label}</StyleLabel>
    </StyleImgBtn>
  );
};

export default ImgBtn;
