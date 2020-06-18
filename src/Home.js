import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "./actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }


  employee = (x, i) =>
    <div key={x.id.value}>
      <h1>
        {x.id}
      </h1>
      <h1>
        {x.employee_name}
      </h1>
      <h1>
        {x.employee_salary}
      </h1>
     <h1> {x.employee_age}</h1>
     <h1> {x.profile_image}</h1>
    </div>;

  render() {
  
    const { results = [] } = this.props.data;
    console.log('length -'+results.length);
    return results.length
      ? <h1>
          {results.map(this.employee)}
        </h1>
      : <h1>fetching employee data...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
