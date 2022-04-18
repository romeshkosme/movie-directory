import React from "react";
import { connect } from "react-redux";
import "../Assests/Styles/Review.css"

function ReviewCard(props: any) {
  return (
    <div className="review_card">
      <div className="review_card_content">
        <div className="review_card_content_title">
          <img
            src={`${props.author_details.avatar_path?.slice(1)}`}
            alt="Avatar"
          />
          <p>{props.author}</p>
        </div>
        <div className="review_card_content_text">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    configuration: state.configuration,
  };
};
export default connect(mapStateToProps, {})(ReviewCard);
