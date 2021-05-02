import React, { Component } from "react";
import fecthSystemCinema from "./modules/action";
import { connect } from "react-redux";

class SystemCinema extends Component {
  renderSystemCinema = () => {
    return this.props.data?.map((item, index) => {
      return (
        <li key={index} className="nav-item" role="presentation">
          <a
            className={index ===0 ? "nav-link active" : "nav-link" }
            id="hethongrap"
            data-toggle="tab"
            href={`#${item.maHeThongRap}`}
            role="tab"
          >
            <img src={item.logo} alt={item.biDanh} />
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {this.renderSystemCinema()}
      </ul>
    );
  }
  componentDidMount() {
    this.props.dispatch(fecthSystemCinema());
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.systemCinemaReducer.data,
  };
};

export default connect(mapStateToProps)(SystemCinema);
