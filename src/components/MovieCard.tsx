import { memo } from "react";
import "../Assests/Styles/MovieCard.css";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

interface IMovieCardProps {
  imgUrl: string;
  posterSize: Array<string>;
  id: number;
  type: string;
  poster_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
}
function MovieCard(props: IMovieCardProps): any {
  return (
    <Link to={`/${props.type}/${props.id}`}>
    <div className="MovieCard">
      <div
        key={props.id}
        className="movie_card"
        style={{
          backgroundImage: `url(${props.imgUrl}/${props.posterSize[4]}/${props.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="movie_card_hover">
          <div className="movie_card_content">
            <h5>{props.original_title}</h5>
            <p>
              <small>{props.overview} </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

const mapStateToProps = (state: any) => {
  return {
    imgUrl: state.configuration.imageUrl,
    posterSize: state.configuration.posterSize,
  };
}
export default connect(mapStateToProps, null)(memo(MovieCard));
