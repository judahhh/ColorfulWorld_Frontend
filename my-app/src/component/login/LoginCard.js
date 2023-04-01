import styled from "styled-components";
import LoginForm from "./LoginForm";

const StyleLoginCard = styled.main`
width: 480px;
height: 640px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
border-radius: 10px;box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
background-color:#FFFFFF;
display:flex;
flex-direction:column;
align-items:center;
`
const StyleLoginTitle = styled.p`
font-size:28px;
font-family: 'Noto Serif KR', serif;
color:#F0DD22;
`


const LoginCard = () =>{
    return(
        <StyleLoginCard>
            <StyleLoginTitle>Colorful World</StyleLoginTitle>
            <LoginForm/>
        </StyleLoginCard>
    )
}

export default LoginCard;