import React, { memo, useEffect } from "react";
import "../Assests/Styles/Series.css";
import SeriesList from "../components/SeriesList";
import { connect } from "react-redux";
import {
  getPopularSeries,
  getTopRatedSeries,
} from "../store/series/seriesAction";

function Series(props: any) {
  useEffect(() => {
    props.getPopularSeries();
    props.getTopRatedSeries();
  }, []);
  return (
    <div className="series">
      <SeriesList title="Popular Series" list={props.series.popularSeries} />
      <SeriesList title="Top Rated Series" list={props.series.topRatedSeries} />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  series: state.series,
});
export default connect(mapStateToProps, {
  getPopularSeries,
  getTopRatedSeries,
})(memo(Series));
