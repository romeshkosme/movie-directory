import React, { memo, useEffect } from "react";
import ScrollList from "./ScrollList";
import "../Assests/Styles/PeopleList.css";
import { Link } from "react-router-dom";

function PeopleList(props: any) {
  const [content, setContent] = React.useState();
  const [listLen, setListLen] = React.useState(0);
  useEffect(() => {
    setListLen(props.list.length);
    setContent(
      props.list?.map((item: any, index: number) => {
        return (
          <Link to={`/person/${item.id}`} key={item.id}>
            <div key={item.id} className="people__list__item">
              <div
                className="people__list__item__content"
                style={{
                  backgroundImage: `url(${props.configuration?.imageUrl}/${props.configuration?.posterSize[2]}/${item.profile_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "8px",
                  width: "100%",
                }}
              >
                <div className="people__list__item-bg">
                  <div className="people__list__item__name">{item.name}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })
    );
  }, [props.list]);
  return (
    <div className="people__list">
      <div className="people__list__header">
        <h2>{props.title}</h2>
      </div>
      <div className="people__list__content">
        <ScrollList content={content} listLen={listLen} />
      </div>
    </div>
  );
}

export default memo(PeopleList);
