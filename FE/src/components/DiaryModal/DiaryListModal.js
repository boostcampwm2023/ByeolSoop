/* eslint-disable */

import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import diaryAtom from "../../atoms/diaryAtom";
import shapeAtom from "../../atoms/shapeAtom";
import zoomIn from "../../assets/zoomIn.svg";
import search from "../../assets/search.svg";

function DiaryListModal() {
  const [selectedDiary, setSelectedDiary] = React.useState(null);
  const [diaryState, setDiaryState] = useRecoilState(diaryAtom);
  const shapeState = useRecoilValue(shapeAtom);
  const [filterState, setFilterState] = React.useState({
    date: {
      start: "",
      end: "",
    },
    emotion: {
      positive: false,
      neutral: false,
      negative: false,
    },
    shape: [],
    tag: [],
  });

  useLayoutEffect(() => {
    if (diaryState.diaryList) {
      setSelectedDiary(diaryState.diaryList[0]);
    }
  }, [diaryState.diaryList]);

  useEffect(() => {
    if (selectedDiary) {
      setDiaryState((prev) => ({
        ...prev,
        diaryUuid: selectedDiary?.uuid,
        diaryPoint: `${selectedDiary?.coordinate.x},${selectedDiary?.coordinate.y},${selectedDiary?.coordinate.z}`,
      }));
    }
  }, [selectedDiary]);

  return (
    <DiaryListModalWrapper>
      <DiaryListModalItem justifyContent='center'>
        <DiaryListModalFilterWrapper>
          <DiaryTitleListHeader>날짜</DiaryTitleListHeader>
          <DiaryListModalFilterContent>
            <FilterDateInput type='date' />
            <FilterDateInput type='date' />
          </DiaryListModalFilterContent>
        </DiaryListModalFilterWrapper>
        <DiaryListModalFilterWrapper>
          <DiaryTitleListHeader>감정</DiaryTitleListHeader>
          <DiaryListModalFilterContent>
            <FilterEmotionButton>긍정</FilterEmotionButton>
            <FilterEmotionButton>중립</FilterEmotionButton>
            <FilterEmotionButton>부정</FilterEmotionButton>
          </DiaryListModalFilterContent>
        </DiaryListModalFilterWrapper>
        <DiaryListModalFilterWrapper>
          <DiaryTitleListHeader>모양</DiaryTitleListHeader>
          <DiaryListModalFilterContent height='10rem'>
            <ShapeWrapper>
              {shapeState?.map((shape) => (
                <ShapeSelectBoxItem
                  key={shape.uuid}
                  onClick={() => {
                    setFilterState((prev) => ({
                      ...prev,
                      shape: [...prev.shape, shape.uuid],
                    }));
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: shape.data }} />
                </ShapeSelectBoxItem>
              ))}
            </ShapeWrapper>
          </DiaryListModalFilterContent>
        </DiaryListModalFilterWrapper>
        <DiaryListModalFilterWrapper>
          <DiaryTitleListHeader>태그</DiaryTitleListHeader>
          <DiaryListModalFilterContent height='15rem' flexDirection='column'>
            <FilterTagInputWrapper>
              <FilterTagInputIcon>
                <img src={search} alt='search' />
              </FilterTagInputIcon>
              <FilterTagInput
                type='text'
                placeholder='태그를 입력하세요'
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (!filterState.tag.includes(e.target.value)) {
                      setFilterState((prev) => ({
                        ...prev,
                        tag: [...prev.tag, e.target.value],
                      }));
                    }
                  }
                }}
              />
            </FilterTagInputWrapper>
            <FilterTagWrapper>
              {filterState.tag.map((tag) => (
                <FilterTagItem
                  key={tag}
                  onClick={() => {
                    setFilterState((prev) => ({
                      ...prev,
                      tag: prev.tag.filter((item) => item !== tag),
                    }));
                  }}
                >
                  {tag}
                </FilterTagItem>
              ))}
            </FilterTagWrapper>
          </DiaryListModalFilterContent>
        </DiaryListModalFilterWrapper>
      </DiaryListModalItem>
      <DiaryListModalItem>
        <DiaryTitleListHeader>제목</DiaryTitleListHeader>
        <DiaryTitleListItemWrapper
          onMouseEnter={(e) => {
            e.target.focus();
          }}
        >
          {diaryState.diaryList?.map((diary) => (
            <DiaryTitleListItem
              key={diary.uuid}
              onClick={() => {
                setSelectedDiary(diary);
              }}
            >
              {diary.title}
            </DiaryTitleListItem>
          ))}
        </DiaryTitleListItemWrapper>
      </DiaryListModalItem>
      <DiaryListModalItem width='50%'>
        <DiaryTitle>
          {selectedDiary?.title}
          <DiaryTitleImg
            src={zoomIn}
            alt='zoom-in'
            onClick={() => {
              setDiaryState((prev) => {
                window.history.pushState(
                  {
                    ...prev,
                    isRead: true,
                    isList: false,
                  },
                  "",
                  "",
                );
                return {
                  ...prev,
                  isRead: true,
                  isList: false,
                };
              });
            }}
          />
        </DiaryTitle>
        <DiaryContent>{selectedDiary?.content}</DiaryContent>
      </DiaryListModalItem>
    </DiaryListModalWrapper>
  );
}

const DiaryListModalWrapper = styled.div`
  width: 95%;
  height: 97.5%;
  padding: 0 2.5%;
  position: absolute;
  top: 2.5%;
  z-index: 1001;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1%;
`;

const DiaryListModalItem = styled.div`
  width: ${(props) => props.width || "25%"};
  height: 85%;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "flex-start"};

  font-size: 1.3rem;
  color: #ffffff;

  animation: modalFadeIn 0.5s;
  @keyframes modalFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  overflow: hidden;
  overflow-y: auto;
`;

const DiaryListModalFilterWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1rem 0;
  gap: 0.5rem;

  font-size: 1.1rem;
`;

const DiaryListModalFilterContent = styled.div`
  width: 100%;
  height: ${(props) => props.height || "7rem"};
  padding: 0 1rem;

  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: space-evenly;
  align-items: center;
`;

const FilterDateInput = styled.input`
  width: 40%;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;

  font-family: "Pretendard-Medium";
  font-size: 1.1rem;
  text-align: center;
`;

const FilterEmotionButton = styled.button`
  width: 25%;
  height: 3rem;

  border: none;
  border-radius: 0.5rem;

  font-family: "Pretendard-Medium";
  font-size: 1.1rem;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const ShapeWrapper = styled.div`
  width: 90%;
  height: 10rem;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  background-color: #3b455e;
  border-radius: 0.5rem;

  overflow: auto;
  overflow-x: hidden;
`;

const ShapeSelectBoxItem = styled.div`
  width: 5rem;

  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.25s;
  }
`;

const FilterTagInputWrapper = styled.div`
  width: 88%;
  height: 3rem;

  border: none;
  border-radius: 1.5rem;

  background-color: rgba(255, 255, 255, 0.6);

  font-family: "Pretendard-Medium";
  font-size: 1.1rem;

  padding: 0.5rem 1rem;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 1rem;
`;

const FilterTagInputIcon = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterTagInput = styled.input`
  width: 100%;
  height: 3rem;

  border: none;
  border-radius: 1.5rem;

  background-color: transparent;

  font-family: "Pretendard-Medium";
  font-size: 1.1rem;

  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const FilterTagWrapper = styled.div`
  width: 90%;
  height: 10rem;

  display: flex;
  flex-wrap: wrap;

  background-color: transparent;
  border-radius: 0.5rem;

  overflow: auto;
  overflow-x: hidden;
`;

const FilterTagItem = styled.div`
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;

  padding: 0 1rem;
  margin: 0.5rem;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const DiaryTitleListHeader = styled.div`
  width: 100%;
  height: 3.5rem;
  padding-left: 3rem;

  display: flex;
  align-items: center;

  flex-shrink: 0;

  font-size: 1.3rem;
`;

const DiaryTitleListItemWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
`;

const DiaryTitleListItem = styled.div`
  width: 100%;
  height: 4.5rem;
  border-top: 0.5px solid #ffffff;

  display: block;
  text-align: center;
  line-height: 4.5rem;

  padding: 0 1rem;
  box-sizing: border-box;

  flex-shrink: 0;

  cursor: pointer;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const DiaryTitle = styled.div`
  width: 85%;
  height: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.6rem;
`;

const DiaryTitleImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;

  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.25s;
  }
`;

const DiaryContent = styled.div`
  width: 85%;
  height: 70%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 1.1rem;
  line-height: 1.8rem;

  overflow-y: auto;

  white-space: pre-wrap;
`;

export default DiaryListModal;
