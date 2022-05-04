import { memo, useEffect, useMemo } from "react";
import "../Assests/Styles/Person.css";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDetails,
  getImages,
  getExternalIds,
  getMovieCredits,
  getTvCredits,
} from "../store/people/peopleAction";

function Person(props: any) {
  const { person_id } = useParams();
  useEffect(() => {
    props.getDetails(person_id);
    props.getImages(person_id);
    props.getExternalIds(person_id);
    props.getMovieCredits(person_id);
    props.getTvCredits(person_id);
  }, []);
  const movieCredits = useMemo(
    () =>
      renderMovieCredits(
        props.people.movieCredits.cast,
        props.configuration.imageUrl,
        props.configuration.posterSize
      ),
    [
      props.people.movieCredits.cast,
      props.configuration.imageUrl,
      props.configuration.posterSize,
    ]
  );
  const tvCredits = useMemo(
    () =>
      renderTvCredits(
        props.people.tvCredits.cast,
        props.configuration.imageUrl,
        props.configuration.posterSize
      ),
    [
      props.people.tvCredits.cast,
      props.configuration.imageUrl,
      props.configuration.posterSize,
    ]
  );
  return (
    <div className="person">
      <div className="person__hero">
        <div className="person__hero__image">
          <img
            src={`${props.configuration.imageUrl}/${props.configuration.posterSize[6]}/${props.people.person?.profile_path}`}
            alt="person"
          />
        </div>
        <div className="person__hero__details">
          <h1>{props.people.person?.name}</h1>
          <p>{props.people.person?.biography}</p>
          <div>
            <p>
              <strong>Born:</strong> {props.people.person?.birthday}
            </p>
          </div>
        </div>
      </div>
      <div className="person__movie__credits">
        <h2>Movie Credits</h2>
        <div className="person__movie__credits__list">{movieCredits}</div>
      </div>
      <div className="person__tv__credits">
        <h2>TV Credits</h2>
        <div className="person__tv__credits__list">
          {tvCredits}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  people: state.people,
  configuration: state.configuration,
});
export default connect(mapStateToProps, {
  getDetails,
  getImages,
  getExternalIds,
  getMovieCredits,
  getTvCredits,
})(memo(Person));

function renderMovieCredits(
  movieCredits: Array<any>,
  imgUrl: string,
  posterSize: any
) {
  return movieCredits.map((movie: any) => (
    <Link to={`/movie/${movie.id}`} key={movie.id}>
      <div className="person__movie__credits__list__item" key={movie.id}>
        <div className="person__movie__credits__list__item__image">
          <img
            src={`${imgUrl}/${posterSize[6]}/${movie.poster_path}`}
            alt="movie"
          />
        </div>
        <div className="person__movie__credits__list__item__details">
          <div className="person__movie__credits__list__item__heading">
            <h4>{movie.title}</h4>
            <span>
              <small>{new Date(movie.release_date).getFullYear()}</small>
            </span>
          </div>
          <p>as {movie.character}</p>
        </div>
      </div>
    </Link>
  ));
}

function renderTvCredits(
  tvCredits: Array<any>,
  imgUrl: string,
  posterSize: any
) {
  return tvCredits.map((tv: any) => (
    <Link to={`/series/${tv.id}`} key={tv.id}>
      <div className="person__tv__credits__list__item" key={tv.id}>
        <div className="person__tv__credits__list__item__image">
          <img src={`${imgUrl}/${posterSize[6]}/${tv.poster_path}`} alt="tv" />
        </div>
        <div className="person__tv__credits__list__item__details">
          <div className="person__tv__credits__list__item__heading">
            <h4>{tv.name}</h4>
            <span>
              <small>{new Date(tv.first_air_date).getFullYear()}</small>
            </span>
          </div>
          <p>as {tv.character}</p>
        </div>
      </div>
    </Link>
  ));
}