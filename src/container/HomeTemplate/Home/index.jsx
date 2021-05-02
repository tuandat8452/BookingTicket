import React, { Component } from "react";
import Carousel from "../../../components/Carousel";
import LoaiPhim from "../../../components/LoaiPhim";
import fecthMovie  from "../../../components/LoaiPhim/PhimDangChieu/modules/action";
import { connect } from "react-redux";
import PageLoading from "../../../components/PageLoading";
import News from "../../../components/News";
import Application from "../../../components/Application";
import fecthMovieComing from "../../../components/LoaiPhim/PhimSapChieu/modules/action";
import ShowTimes from "../../../components/ShowTimes";

class Home extends Component {

  render() {
    const { loading } = this.props;
    if (loading) return <PageLoading />;
    return (
      <>
        <Carousel />
        <LoaiPhim />
        <ShowTimes/>
        <News/>
        <Application/>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(fecthMovie());
    this.props.dispatch(fecthMovieComing());
    
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.fechMovieReducer.loading,
  };
};

export default connect(mapStateToProps)(Home);
