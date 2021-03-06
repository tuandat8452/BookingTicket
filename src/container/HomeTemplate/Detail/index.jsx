import React, { Component } from "react";
import fecthDetailMovie from "./modules/action";
import { connect } from "react-redux";
import PageLoading from "../../../components/PageLoading";

class DetailMovie extends Component {
  render() {
    const { loading } = this.props;
    const {
      hinhAnh,
      tenPhim,
      moTa,
      danhGia,
      ngayKhoiChieu,
      trailer,
    } = this.props.data;

    console.log(this.props.data);

    if (loading) {
      return <PageLoading />;
    }

    return (
      <div className="detail-movie pt-5 mt-3">
        <div className="bg-img position-relative">
          <img src={hinhAnh} alt="" />
          <div className="overplay"></div>
          <div className="row intro">
            <div className="content-img col-lg-3">
              <img src={hinhAnh} alt={tenPhim} />
            </div>
            <div className="col-lg-9">
              <div className="content-text">
                <p>{ngayKhoiChieu?.slice(0,10)}</p>
                <h4 className="my-3">{tenPhim} (C13)</h4>
                <div>120 Phút - {danhGia}IMDb - 2D/Digital</div>
                <a href="#showlichchieu">
                  <button className="buy-ticket-btn btn mt-4">Mua vé</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="showlichchieu" className="show-info">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="lichchieuchitiet"
                  data-toggle="tab"
                  href="#lichchieu"
                  role="tab"
                >
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="thongtinchitietphim"
                  data-toggle="tab"
                  href="#thongtinphim"
                  role="tab"
                >
                  Thông tin
                </a>
              </li>
            </ul>
            <div className="tab-content  pb-2" id="myTabContent">
              <div
                className="tab-pane fade"
                id="lichchieu"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {/* {this.props.data.lichChieu?.map(item =>{
                  return <button>{item.ngayChieuGioChieu.slice(0,10)}</button>
                })} */}   
              </div>
              <div
                className="tab-pane fade  show active info-movie "
                id="thongtinphim"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="item">
                          <p>
                            <b> Ngày công chiếu</b>
                          </p>
                          <p>{ngayKhoiChieu?.slice(0,10)}</p>
                        </div>
                        <div className="item">
                          <p>
                            <b>Đạo diễn</b>
                          </p>
                          <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="item">
                          <p>
                            <b>Diễn viên</b>
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Tenetur, explicabo?
                          </p>
                        </div>
                        <div className="item">
                          <p>
                            <b>Thể loại</b>
                          </p>
                          <p>Hành động, Tình cảm</p>
                        </div>
                        <div className="item">
                          <p>
                            <b>Định dạng</b>
                          </p>
                          <p>2D/Digital</p>
                        </div>
                        <div className="item">
                          <p>
                            <b>Quốc gia SX</b>
                          </p>
                          <p>Việt Nam</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 describe-movie">
                      <div style={{ marginBottom: "2rem" }}>
                        <b>Nội dung</b>
                      </div>
                      <div>{moTa}</div>
                    </div>
                    <div className="trailer-movie">
                      <p>
                        <b>Trailer phim</b>
                      </p>
                      <iframe
                        src={trailer}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fecthDetailMovie(id));
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailReducer.loading,
    data: state.detailReducer.data,
  };
};

export default connect(mapStateToProps)(DetailMovie);
