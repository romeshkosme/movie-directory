import React, { memo } from "react";
import ReviewCard from "./ReviewCard";
import "../Assests/Styles/Review.css";

function ReviewList(props: any) {
  const [reviewLimit, setReviewLimit] = React.useState(7);
  return (
    <div className="review_list">
      <div className="review_list_header">
        <h2>Review</h2>
      </div>
      <div className="review_list_content">
        {props.reviews?.map((review: any, index: number) => {
          if (index === reviewLimit) {
            return (
              <div
                className="review_list_content_more"
                onClick={() => setReviewLimit(reviewLimit + 7)}
                key={0}
              >
                <h3>More</h3>
              </div>
            );
          }
          if (index > reviewLimit) return null;
          return (
            <ReviewCard
              key={review.id}
              author={review.author}
              author_details={review.author_details}
              content={review.content}
              created_at={review.created_at}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(ReviewList);
