import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import "../Assests/Styles/List.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function List(props: any): any {
  const listRef = useRef({} as any);
  const handleScrollRight = () => {
    listRef.current.scrollLeft += 1200;
  };
  const handleScrollLeft = () => {
    listRef.current.scrollLeft -= 1200;
  };
  return (
    <div className="List">
      <div className="List__header">
        <h2>{props.title}</h2>
      </div>
      <div className="List__content">
        <div
          className="List__scroll__arrow List__scroll__left"
          onClick={handleScrollLeft}
        >
          <ArrowBackIosNewIcon />
        </div>
        <div className="List__scroll__content" ref={listRef}>
          {props.list?.map((item: any) => (
            <MovieCard
              key={item.id}
              id={item.id}
              imgUrl={""}
              posterSize={[]}
              poster_path={item.poster_path}
              original_title={item.original_title}
              overview={item.overview}
              vote_average={item.vote_average}
              popularity={item.popularity}
              vote_count={item.vote_count}
            />
          ))}
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

export default List;
