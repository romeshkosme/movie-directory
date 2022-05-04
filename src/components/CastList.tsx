import { memo, useState } from "react";
import CastCard from "./CastCard";
import { connect } from "react-redux";
import "../Assests/Styles/CastList.css";

function CastList(props: any) {
  const [castLimit, setCastLimit] = useState(7)
  return (
    <div className="cast_list">
      <div className="cast_list_header">
        <h2>Cast</h2>
      </div>
      <div className="cast_list_content">
        {props.casts?.map((cast: any, index: number) => {
          if (index === castLimit) return (
            <div className="cast_list_more" onClick={() => setCastLimit(castLimit + 7)} key={0}>
            <h4>Show All</h4>
            </div>
          )
          if (castLimit < index) return;
          return (
            <CastCard
              key={cast.id}
              id={cast.id}
              profile_path={cast.profile_path}
              name={cast.name}
              character={cast.character}
              configuration={props.configuration}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    configuration: state.configuration,
  };
};
export default connect(mapStateToProps, {})(memo(CastList));
