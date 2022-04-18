import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import "../Assests/Styles/Dashboard.css";
import { useEffect } from "react";
import {connect} from "react-redux";
import {getConfiguration} from "../store/configuration/configurationAction";

function Dashboard(props: any) {
  useEffect(() => {props.getConfiguration();}, [])
  return (
    <div className="Dashboard">
      <Header />
      <Main component={props.component} />
      <Footer />
    </div>
  );
}

export default connect(null, {getConfiguration})(Dashboard);
