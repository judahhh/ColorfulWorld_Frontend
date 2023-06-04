import styled from "styled-components";

const StyleLoading = styled.div`
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
  @media (max-width: 786px) {
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
`;
const StyleImgBox = styled.div`
  display: flex;
  @media (max-width: 786px) {
    width: 80vw;
    justify-content: space-between;
    margin-bottom: 5vh;
  }
`;

const StyleImage = styled.div`
  background: linear-gradient(to bottom, #eeeeee 10%, #dddddd 28%, #eeeeee 53%);
  width: 320px;
  height: 280px;
  margin-right: 80px;
  border-radius: 10px;
  @keyframes loadingAnimation {
    0% {
      background-position: 0 -20rem;
    }
    100% {
      background-position: 0 20rem;
    }
  }
  animation: 5s loadingAnimation forwards infinite linear;
  @media (max-width: 786px) {
    width: 36vw;
    height: 36vw;
    margin-right: 0;
  }
`;
const StyleForm = styled.div`
  background: linear-gradient(to bottom, #eeeeee 10%, #dddddd 28%, #eeeeee 53%);
  width: 400px;
  height: 140px;
  border-radius: 10px;
  @keyframes loadingAnimation {
    0% {
      background-position: 0 -20rem;
    }
    100% {
      background-position: 0 20rem;
    }
  }
  animation: 5s loadingAnimation forwards infinite linear;
  @media (max-width: 786px) {
    width: 80vw;
  }
`;
const StyleBtn = styled.div`
  background: linear-gradient(to bottom, #eeeeee 10%, #dddddd 28%, #eeeeee 53%);
  width: 400px;
  height: 56px;
  border-radius: 10px;
  @keyframes loadingAnimation {
    0% {
      background-position: 0 -20rem;
    }
    100% {
      background-position: 0 20rem;
    }
  }
  animation: 5s loadingAnimation forwards infinite linear;
  @media (max-width: 786px) {
    width: 80vw;
    height: 5vh;
  }
`;

const StyleFormAndBtn = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 786px) {
    align-items: center;
  }
`;

const Loading = () => {
  return (
    <StyleLoading>
      <StyleImgBox>
        <StyleImage />
        <StyleImage />
      </StyleImgBox>
      <StyleFormAndBtn>
        <StyleForm />
        <StyleBtn />
        <StyleBtn />
      </StyleFormAndBtn>
    </StyleLoading>
  );
};

export default Loading;
