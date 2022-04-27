import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import "../Assests/Styles/Dashboard.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getConfiguration } from "../store/configuration/configurationAction";
import Search from "./Search";

function Dashboard(props: any) {
  useEffect(() => {
    props.getConfiguration();
  }, []);
  const [showSearch, setShowSearch] = React.useState(false);
  return (
    <React.Fragment>
      <div className="Dashboard" style={showSearch ? { position: "fixed" } : {position: "relative"}}>
        <Header setShowSearch={setShowSearch} />
        <Main component={props.component} />
        <Footer />
      </div>
      {showSearch && <Search closeSearch={setShowSearch} />}
    </React.Fragment>
  );
}

export default connect(null, { getConfiguration })(Dashboard);
