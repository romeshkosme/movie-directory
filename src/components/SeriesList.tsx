import React, { useState, useEffect } from "react";
import "../Assests/Styles/Series.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { connect } from "react-redux";
import Card from "./Card";

function SeriesList(props: any) {
  const listRef = React.useRef({} as any);
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
    <div className="series__list">
      <div className="series__list__header">
        <h2>{props.title}</h2>
      </div>
      <div className="series__list__cards">
        <div className="series__list__scroll">
          <div className="series__list__content" ref={listRef}>
            {props.list?.map((item: any) => (
              <Card
                key={item.id}
                id={item.id}
                type={"series"}
                imgUrl={props.imgUrl}
                posterSize={props.posterSize}
                poster_path={item.poster_path}
                title={item.original_name}
                overview={item.overview}
              />
            ))}
          </div>
        </div>
        <div className="series__list_arrows">
          <div
            className="series_list_arrow series_list_left_arrow"
            onClick={handleScrollLeft}
          >
            <ArrowBackIosNewIcon />
          </div>
          <div
            className="series_list_arrow series_list_right_arrow"
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
export default connect(mapStateToProps, {})(SeriesList);
