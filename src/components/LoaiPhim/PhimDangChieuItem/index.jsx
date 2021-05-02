import React, { Component } from "react";
import Modal from "react-modal";
import Btnplay from "../../../assets/play.png";
import { Link } from "react-router-dom";

class PhimDangChieuItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { maPhim, hinhAnh, tenPhim, trailer, danhGia } = this.props.data;
    return (
      <React.Fragment>
        <div className="item">
          <div className="item-top position-relative">
            <img src={hinhAnh} style={{ width: "100%" }} alt={tenPhim} />
            <Link to={`/chi-tiet-phim/${maPhim}`}>
              <div className="hover-img"></div>
            </Link>
            <div className="img-play">
              <img src={Btnplay} onClick={this.openModal} alt="btnplay" />
            </div>
          </div>
          <div className="item-bot mt-2 position-relative">
            <p className="mb-2">{tenPhim}</p>
            <span>103 phút - {danhGia} IMDb</span>
            <div className="book-ticket">
              <Link to={`/chi-tiet-phim/${maPhim}`}>
                <button className="btn btn-danger">MUA VÉ</button>
              </Link>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.isOpen} onRequestClose={this.closeModal}>
          <span onClick={this.closeModal}>x</span>
          <iframe
            src={`${trailer}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal>
      </React.Fragment>
    );
  }
}

export default PhimDangChieuItem;
