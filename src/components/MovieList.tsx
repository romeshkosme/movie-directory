import React, { useEffect, useRef, useState } from "react";
import "../Assests/Styles/List.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { connect } from "react-redux";
import Card from "./Card";

function MovieList(props: any): any {
  const listRef = useRef({} as any);
  const totalWidth = props.list.length * 240;
  const slideWidth = window.innerWidth;
  let [currentPosition, setCurrentPosition] = useState(0);
  useEffect(() => {
    listRef.current.style.transition = "transform 0.5s ease-in-out";
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
    <div className="List">
      <div className="List__header">
        <h2>{props.title}</h2>
      </div>
      <div className="List__content">
        <div className="List __slides">
          <div className="List__scroll__content" ref={listRef}>
            {props.list?.map((item: any) => (
              <Card
                key={item.id}
                id={item.id}
                type={"movie"}
                imgUrl={props.imgUrl}
                posterSize={props.posterSize}
                poster_path={item.poster_path}
                title={item.original_title}
                overview={item.overview}
                vote_average={item.vote_average}
                popularity={item.popularity}
                vote_count={item.vote_count}
              />
            ))}
          </div>
        </div>
        <div className="arrow__actions">
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
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  imgUrl: state.configuration.imageUrl,
  posterSize: state.configuration.posterSize,
});
export default connect(mapStateToProps, {})(MovieList);
