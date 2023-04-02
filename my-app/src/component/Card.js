import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden;
`;

const Box = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 7px;
  display: flex;
  background-color: whitesmoke;
  display: flex;
  transition: all 1s ease;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 5px 5px lightgray;
  position: relative;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px; */
`;

const CardText = styled.p`
  align-items: center;
  color: darkgray;
  font-family: "Noto Sans KR", sans-serif;
`;

const Img = styled.div``;

const Card = () => {
  return (
    <>
      <Container>
        <Box>
          <CardText>Introduce Page</CardText>
        </Box>
      </Container>
    </>
  );
};

export default Card;
