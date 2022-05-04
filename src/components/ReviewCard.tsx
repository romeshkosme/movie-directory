import React, { memo } from "react";
import { connect } from "react-redux";
import "../Assests/Styles/Review.css";

function ReviewCard(props: any) {
  return (
    <div className="review_card">
      <div className="review_card_content_title">
        <img
          src={`${props.author_details.avatar_path?.slice(1)}`}
          alt="Avatar"
        />
      </div>
      <div className="review_card_content_text">
        <p>{props.author}</p>
        <p><small>{props.content}</small></p>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    configuration: state.configuration,
  };
};
export default connect(mapStateToProps, {})(memo(ReviewCard));
