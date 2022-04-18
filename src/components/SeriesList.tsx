import React from "react";
import SeriesCard from "./SeriesCard";
import "../Assests/Styles/Series.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SeriesList(props: any) {
  const listRef = React.useRef({} as any);
  const handleScrollRight = () => {
    listRef.current.scrollLeft += 1200;
  };
  const handleScrollLeft = () => {
    listRef.current.scrollLeft -= 1200;
  };
  return (
    <div className="series__list">
      <div className="series__list__header">
        <h2>{props.title}</h2>
      </div>
      <div className="series__list__cards">
        <div
          className="series_list_arrow series_list_left_arrow"
          onClick={handleScrollLeft}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div className="series__list__content" ref={listRef}>
          {props.list?.map((item: any) => (
            <SeriesCard
              key={item.id}
              id={item.id}
              imgUrl={""}
              posterSize={[]}
              poster_path={item.poster_path}
              original_name={item.original_name}
              overview={item.overview}
            />
          ))}
        </div>
        <div
          className="series_list_arrow series_list_right_arrow"
          onClick={handleScrollRight}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default SeriesList;
