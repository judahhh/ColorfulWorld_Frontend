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

const StyleEmailConfirmBtn = styled.button`
  width: 100px;
  height: 40px;
  border: solid 1px #ebd500;
  font-family: "Noto Sans KR", sans-serif;
  background-color: white;
  color: #ebd500;
  border-radius: 10px;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;

const JoinForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [code, setCode] = useState("");
  const [same, setSame] = useState(false);
  let responseCode = "";

  const checkEmail = (e) => {
    if (email !== "" && !email.includes("@") && !email.includes("."))
      alert("올바르지 않은 이메일 형식입니다.");
  };
  //이메일 인증코드 전송 버튼 클릭 시 함수
  const emailConfirm = async (e) => {
    await axios
      .get(`/checkEmail?email=${email}`)
      .then((response) => {
        console.log(response);
        responseCode = response.data;
      })
      .catch((err) => console.log(err));
  };

  //이메일 인증코드 동일한지 확인 함수
  const emailCodeConfirm = () => {
    if (code === responseCode) {
      setSame(true);
      alert("인증코드 확인이 완료되었습니다.");
    }
  };

  //회원가입 제출했을시 함수
  const onSubmit = async (e) => {
    e.preventDefault();

    if (email === "") alert("이메일을 입력해주세요.");
    else if (same === false) alert("인증코드가 올바르지 않습니다.");
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
    <>
      <StyleLoginForm onSubmit={onSubmit}>
        <StyleInput
          label="이메일"
          placeholder="example@coloful.world"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={checkEmail}
        />
        <StyleEmailConfirmBtn onClick={emailConfirm}>
          인증코드 전송
        </StyleEmailConfirmBtn>
        <StyleInput
          label="이메일 인증코드"
          placeholder="이메일 인증 코드를 입력하세요"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <StyleEmailConfirmBtn onClick={emailCodeConfirm}>
          인증코드 확인
        </StyleEmailConfirmBtn>
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
    </>
  );
};

export default JoinForm;
