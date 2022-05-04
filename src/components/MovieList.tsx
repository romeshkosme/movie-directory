import React, { memo, useEffect } from "react";
import "../Assests/Styles/List.css";
import { connect } from "react-redux";
import Card from "./Card";
import ScrollList from "./ScrollList";

function MovieList(props: any): any {
  const [content, setContent] = React.useState();
  const [listLen, setListLen] = React.useState(0);
  useEffect(() => {
    setListLen(props.list?.length);
    setContent(
      props.list?.map((item: any) => (
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
      ))
    );
  }, [props.list, props.imgUrl, props.posterSize]);
  return (
    <div className="List">
      <div className="List__header">
        <h2>{props.title}</h2>
      </div>
      <div className="List__content">
        <ScrollList content={content} listLen={listLen} />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  imgUrl: state.configuration.imageUrl,
  posterSize: state.configuration.posterSize,
});
export default connect(mapStateToProps, {})(memo(MovieList));
