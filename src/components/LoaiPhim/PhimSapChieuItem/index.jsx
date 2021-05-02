import React, { Component } from "react";

class PhimSapChieuItem extends Component {
  render() {
    const { hinhAnh, tenPhim } = this.props.data;
    return (
      <React.Fragment>
        <div className="item">
          <div className="item-top position-relative">
            <img src={hinhAnh} style={{ width: "100%" }} alt={tenPhim} />
            <a href="">
              <div className="hover-img"></div>
            </a>
            <div className="text-coming">
              <h4>
                <b>
                  <i> COMING SOON</i>
                </b>
              </h4>
            </div>
          </div>
          <div className="item-bot mt-2 position-relative">
            <span className="age">C13</span>
            <p className="mb-2">{tenPhim}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PhimSapChieuItem;
