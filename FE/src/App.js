/* eslint-disable no-unused-vars */

import React, { useEffect, useLayoutEffect } from "react";
import Reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import userAtom from "./atoms/userAtom";
import diaryAtom from "./atoms/diaryAtom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import "./assets/fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  ${Reset}

  body {
    font-family: "Pretendard-Medium";
  }

  * {

    &::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background: #ffffff;
      border-radius: 1rem;
    }
  }
`;

function App() {
  const [userState, setUserState] = useRecoilState(userAtom);
  const setDiaryState = useSetRecoilState(diaryAtom);

  useLayoutEffect(() => {
    let accessToken = localStorage.getItem("accessToken");
    accessToken = accessToken || sessionStorage.getItem("accessToken");
    if (accessToken) {
      setUserState({ ...userState, isLogin: true, accessToken });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = "";
    });

    window.onpopstate = (event) => {
      console.log(event.state);
      if (event.state) {
        setDiaryState(event.state);
      }
    };
  }, []);

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      {userState.isLogin ? <MainPage /> : <HomePage />}
    </div>
  );
}

export default App;
