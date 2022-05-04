import React, { useRef, useState, useEffect, memo } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../Assests/Styles/ScrollList.css";

function ScrollList(props: any) {
  const listRef = useRef({} as any);
  //   const totalWidth = props.list?.length * 240;
  const slideWidth = window.innerWidth;
  let [currentPosition, setCurrentPosition] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  useEffect(() => {
    setTotalWidth(props.listLen * 240);
  }, [props.listLen]);
  useEffect(() => {
    listRef.current.style.transition = "transform 1s ease-in-out";
    listRef.current.style.transform = "translateX(-" + currentPosition + "px)";
  }, [currentPosition]);
  const handleScrollRight = () => {
    if (
      currentPosition < totalWidth &&
      totalWidth - (currentPosition + slideWidth) > slideWidth
    ) {
      setCurrentPosition(currentPosition + slideWidth);
    } else if (
      currentPosition < totalWidth &&
      totalWidth - (currentPosition + slideWidth) <= slideWidth
    ) {
      setCurrentPosition(
        currentPosition + totalWidth - (currentPosition + slideWidth)
      );
    }
  };
  const handleScrollLeft = () => {
    if (currentPosition > 0 && currentPosition > slideWidth) {
      setCurrentPosition(currentPosition - slideWidth);
      setCurrentPosition(currentPosition - slideWidth);
    } else if (currentPosition > 0 && currentPosition <= slideWidth) {
      currentPosition = 0;
      setCurrentPosition(0);
    }
  };
  return (
    <div className="scroll__list">
      <div className="scroll__list__content" ref={listRef}>
        {props.content}
      </div>
      <div className="scroll__list_action">
        <div
          className="List__scroll__arrow List__scroll__left"
          onClick={handleScrollLeft}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div
          className="List__scroll__arrow List__scroll__right"
          onClick={handleScrollRight}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default memo(ScrollList);
