import React from "react";
import avatar from "../Assests/Static/avatar.jpg";

function CastCard(props: any) {
  return (
    <div className="cast_card">
      <div className="cast_card_header">
        <img
          src={`${props.configuration.imageUrl}/${props.configuration.posterSize[2]}/${props.profile_path}`}
          alt=""
        />
        {!props.profile_path && (
          <img
          src={avatar}
          alt=""
        />  
        )}
      </div>
      <div className="cast_card_content">
        <p>
          <b>{props.name}</b><br /> as <small>{props.character}</small>
        </p>
      </div>
    </div>
  );
}

export default CastCard;
