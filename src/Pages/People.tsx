import React, { memo, useEffect } from "react";
import "../Assests/Styles/People.css";
import { connect } from "react-redux";
import { getPopularPeople } from "../store/people/peopleAction";
import PeopleList from "../components/PeopleList";

function People(props: any) {
  useEffect(() => {
    props.getPopularPeople();
  }, []);

  return (
    <div className="people">
      <div className="people__content">
        <PeopleList
          title={"Popular Celebs"}
          list={props.people.popularPeople}
          configuration={props.configuration}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  people: state.people,
  configuration: state.configuration,
});
export default connect(mapStateToProps, { getPopularPeople })(memo(People));
