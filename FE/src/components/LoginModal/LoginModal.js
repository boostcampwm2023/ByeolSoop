import React from "react";
import styled from "styled-components";
import ModalBackground from "../ModalBackground.js/ModalBackground";

function LoginModal() {
  return (
    <LoginModalWrapper>
      로그인 모달
      <ModalBackground />
    </LoginModalWrapper>
  );
}

const LoginModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  width: 50vw;
  height: 50vh;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
`;

export default LoginModal;
