import { memo } from "react";
import "../Assests/Styles/Genres.css";

function Genres(props: any) {
  return (
    <div className="genres">
      <div className="genres_list">
        {props.genres?.map((genre: any) => {
          return (
            <div className="genres_item" key={genre.id}>
              <div className="genres_item_name">{genre.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Genres);
