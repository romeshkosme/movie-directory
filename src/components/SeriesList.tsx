import React, { useState, useEffect, memo } from "react";
import "../Assests/Styles/Series.css";
import { connect } from "react-redux";
import Card from "./Card";
import ScrollList from "./ScrollList";

function SeriesList(props: any) {
  const [content, setContent] = React.useState();
  const [listLen, setListLen] = React.useState(0);
  useEffect(() => {
    setListLen(props.list?.length);
    if (props.list?.length > 0) {
      setContent(
        props.list?.map((item: any) => (
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
        ))
      );
    }
  }, [props.list]);
  return (
    <div className="series__list">
      <div className="series__list__header">
        <h2>{props.title}</h2>
      </div>
      <div className="series__list__cards">
        <ScrollList content={content} listLen={listLen} />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  imgUrl: state.configuration.imageUrl,
  posterSize: state.configuration.posterSize,
});
export default connect(mapStateToProps, {})(memo(SeriesList));
