import styled from "styled-components";

const StyleLoading = styled.div`
  display: flex;
  height: 800px;
  align-items: center;
  justify-content: center;
`;
const StyleImage = styled.div`
  background: linear-gradient(to bottom, #eeeeee 10%, #dddddd 28%, #eeeeee 53%);
  width: 320px;
  height: 320px;
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
`;
const StyleForm = styled.div`
  background: linear-gradient(to bottom, #eeeeee 10%, #dddddd 28%, #eeeeee 53%);
  width: 400px;
  height: 140px;
  border-radius: 10px;
  margin-bottom: 25px;
  @keyframes loadingAnimation {
    0% {
      background-position: 0 -20rem;
    }
    100% {
      background-position: 0 20rem;
    }
  }
  animation: 5s loadingAnimation forwards infinite linear;
`;
const StyleBtn = styled.div`
  background: linear-gradient(to bottom, #eeeeee 10%, #dddddd 28%, #eeeeee 53%);
  width: 400px;
  height: 56px;
  border-radius: 10px;
  margin-bottom: 25px;
  @keyframes loadingAnimation {
    0% {
      background-position: 0 -20rem;
    }
    100% {
      background-position: 0 20rem;
    }
  }
  animation: 5s loadingAnimation forwards infinite linear;
`;

const StyleFormAndBtn = styled.div``;

const Loading = () => {
  return (
    <StyleLoading>
      <StyleImage />
      <StyleImage />
      <StyleFormAndBtn>
        <StyleForm />
        <StyleBtn />
        <StyleBtn />
      </StyleFormAndBtn>
    </StyleLoading>
  );
};

export default Loading;
