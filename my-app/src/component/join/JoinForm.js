import styled from "styled-components";
import StyleInput from "../commons/Input";
import FormBtn from "../commons/FormBtn";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyleLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 450px;
`;

const JoinForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    //회원가입 제출했을시 함수
    e.preventDefault();
    let body = {
      email: email,
      password: password,
    };
    await axios
      .post("/register", body)
      .then((response) => {
        if (response.status === 200) {
          alert("회원가입에 성공하셨습니다. 로그인을 진행해주세요! ");
          navigate("/login");
        } else {
          alert("이미 회원가입 완료한 이메일입니다.");
        }
      })
      .catch((err) => console.log("에러 : ", err));
  };
  return (
    <StyleLoginForm onSubmit={onSubmit}>
      <div>
        <StyleInput
          label="이메일"
          placeholder="example@coloful.world"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyleInput
          label="이메일 인증코드"
          placeholder="이메일 인증 코드를 입력하세요"
          type="text"
        />
        <StyleInput
          label="비밀번호"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyleInput
          label="비밀번호확인"
          placeholder="********"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>
      <FormBtn value="JOIN" />
    </StyleLoginForm>
  );
};

export default JoinForm;
