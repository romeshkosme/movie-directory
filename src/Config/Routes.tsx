import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import Series from "../Pages/Series";
import Movie from "../components/Movie";
import People from "../Pages/People";
import SingleSeries from "../components/SingleSeries";
import Person from "../components/Person";

const ROUTES = [
  { url: "/", component: <Home /> },
  { url: "/movies", component: <Movies /> },
  { url: "/series", component: <Series /> },
  { url: "/people", component: <People /> },
  { url: "/movie/:movie_id", component: <Movie /> },
  { url: "/series/:series_id", component: <SingleSeries /> },
  { url: "/person/:person_id", component: <Person /> },
];

export default ROUTES;
