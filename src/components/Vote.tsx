import React, { memo } from "react";
import "../Assests/Styles/Vote.css";
function Vote(props: any) {
  return (
    <div className="vote">
      <div className="vote_list">
        <div className="vote_list_item">
          <div className="vote_item vote_average">
            <span>{props.voteAverage}</span>
          </div>
          <p>Vote</p>
        </div>
        <div className="vote_list_item">
          <div className="vote_item vote_count">
            <span>{Math.round(props.voteCount)}</span>
          </div>
          <p>Vote Count</p>
        </div>
        <div className="vote_list_item">
          <div className="vote_item vote_popularity">
            <span>{Math.round(props.popularity)}</span>
          </div>
          <p>Popularity</p>
        </div>
      </div>
    </div>
  );
}

export default memo(Vote);
