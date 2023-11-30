/* eslint-disable */

import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import diaryAtom from "../atoms/diaryAtom";
import shapeAtom from "../atoms/shapeAtom";
import userAtom from "../atoms/userAtom";
import DiaryCreateModal from "../components/DiaryModal/DiaryCreateModal";
import DiaryReadModal from "../components/DiaryModal/DiaryReadModal";
import DiaryListModal from "../components/DiaryModal/DiaryListModal";
import DiaryUpdateModal from "../components/DiaryModal/DiaryUpdateModal";
import DiaryLoadingModal from "../components/DiaryModal/DiaryLoadingModal";
import StarPage from "./StarPage";
import preventBeforeUnload from "../utils/utils";

function MainPage() {
  const [diaryState, setDiaryState] = useRecoilState(diaryAtom);
  const [userState, setUserState] = useRecoilState(userAtom);
  const setShapeState = useSetRecoilState(shapeAtom);
  const [loaded, setLoaded] = React.useState(false);

  const { refetch } = useQuery(
    ["diaryList", userState.accessToken],
    () => {
      console.log(userState.accessToken);
      return fetch("http://localhost:3005/diaries", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userState.accessToken}`,
        },
      }).then((res) => {
        if (res.status === 200) {
          setLoaded(true);
          return res.json();
        }
        if (res.status === 403) {
          alert("로그인이 만료되었습니다. 다시 로그인해주세요.");

          localStorage.removeItem("accessToken");
          sessionStorage.removeItem("accessToken");
          window.removeEventListener("beforeunload", preventBeforeUnload);
        }
        if (res.status === 401) {
          return fetch("http://localhost:3005/auth/reissue", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userState.accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (localStorage.getItem("accessToken")) {
                localStorage.setItem("accessToken", data.accessToken);
              }
              if (sessionStorage.getItem("accessToken")) {
                sessionStorage.setItem("accessToken", data.accessToken);
              }
              setUserState((prev) => ({
                ...prev,
                accessToken: data.accessToken,
              }));
            });
        }
        return {};
      });
    },
    {
      onSuccess: (data) => {
        setDiaryState((prev) => ({ ...prev, diaryList: data }));
      },
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    setDiaryState((prev) => {
      const newState = {
        ...prev,
        isCreate: false,
        isRead: false,
        isUpdate: false,
        isList: false,
      };
      window.history.pushState(newState, "", "");
      return newState;
    });

    async function getShapeFn() {
      return fetch("http://localhost:3005/shapes/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userState.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then(async (data) => {
          setShapeState(() => {
            const shapeList = Object.keys(data).map((key) => ({
              uuid: data[key].uuid,
              data: data[key].svg.replace(/<\?xml.*?\?>/, ""),
            }));
            return shapeList;
          });
        });
    }

    if (loaded) {
      getShapeFn();
    }
  }, [loaded]);

  return (
    <div>
      {loaded ? (
        <>
          <MainPageWrapper
            onClick={(e) => {
              e.preventDefault();
              setDiaryState((prev) => ({
                ...prev,
                isCreate: true,
                isRead: false,
                isUpdate: false,
                isList: false,
              }));
            }}
          />
          <StarPage />
          {diaryState.isCreate ? <DiaryCreateModal refetch={refetch} /> : null}
          {diaryState.isRead ? <DiaryReadModal refetch={refetch} /> : null}
          {diaryState.isUpdate ? <DiaryUpdateModal refetch={refetch} /> : null}
          {diaryState.isList ? <DiaryListModal /> : null}
          {diaryState.isLoading ? <DiaryLoadingModal /> : null}
        </>
      ) : null}
    </div>
  );
}

// TODO: 배경 이미지 제거하고 영상으로 대체할 것
const MainPageWrapper = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
