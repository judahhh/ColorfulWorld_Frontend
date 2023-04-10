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
  const checkEmail = (e) => {
    if (email !== "" && !email.includes("@") && !email.includes("."))
      alert("올바르지 않은 이메일 형식입니다.");
  };

  const navigate = useNavigate();

  //회원가입 제출했을시 함수
  const onSubmit = async (e) => {
    e.preventDefault();

    if (email === "") alert("이메일을 입력해주세요.");
    else if (password === "") alert("비밀번호를 입력해주세요.");
    else if (passwordConfirm === "") alert("비밀번호 확인을 입력해주세요");
    else if (password !== passwordConfirm)
      alert("비밀번호와 비밀번호 확인이 같지 않습니다.\n다시 입력해주세요.");
    else if (checkEmail(email) === false)
      alert("이메일 형식을 다시 확인해주세요.");
    else if (password !== "" && password.length < 8)
      alert(
        "비밀번호는 영문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다."
      );
    else {
      await axios
        .post("/join", {
          email: email,
          password: password,
          intensity: "1",
        })
        .then((response) => {
          console.log("서버에 전송", response);
          if (response.status === 200) {
            alert("회원가입에 성공하셨습니다. 로그인을 진행해주세요! ");
            navigate("/login");
          } else {
            alert("이미 회원가입 완료한 이메일입니다.");
          }
        })
        .catch((error) => console.error("에러 : ", error));
    }
  };

  return (
    <StyleLoginForm onSubmit={onSubmit}>
      <StyleInput
        label="이메일"
        placeholder="example@coloful.world"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={checkEmail}
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

      <FormBtn value="JOIN" />
    </StyleLoginForm>
  );
};

export default JoinForm;
