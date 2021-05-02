import React, { Component } from "react";
import Logo from "../../assets/web-logo.png";
import Avatar from "../../assets/avatar.png";
import AvatarUser from "../../assets/avatar-img.jpg";
import IconMenu from "../../assets/menu-options.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Swal from 'sweetalert2';

class NavbarHome extends Component {
  state ={
    isValid : false,
    user: [],
  }
  logOut = () => {
    Swal.fire({
      icon:'question',
      title: 'Bạn có muốn đăng xuất?',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Userlogin");
        this.setState({
          isValid:true,
        })
        Swal.fire('Đăng xuất thành công', '', 'success')
      }
    })
   
  }
  render() {
    if(localStorage.getItem("Userlogin") && !this.state.isValid) {
      // đổ dữ liệu từ localStorage lên 
      this.state.user = JSON.parse(localStorage.getItem("Userlogin"));
      return (
        <header className="position-fixed">
          <nav className="navbar navbar-expand-lg ">
            <NavLink className="navbar-brand" to="/">
              <img src={Logo} width={40} alt="logo" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={IconMenu} width={25} alt="" />
            </button>
            <div className=" collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav-content navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/#lichchieu">
                    Lịch chiếu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#cumrap">
                    Cụm rạp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#tintuc">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#ungdung">
                    Ứng dụng
                  </a>
                </li>
              </ul>
              <div className="nav-login d-flex align-items-center mr-5">
                <div className="mr-2 pr-2 border-right d-flex align-items-center" >
                  <img src={AvatarUser} width={30} style={{borderRadius:'50%',opacity:1}} alt=""/>
                  <span className="ml-3" style={{color:'#9b9b9b'}}>{this.state.user.hoTen}</span>
                </div>
                <div >
                  <NavLink to={window.location} style={{color:'#9b9b9b'}} onClick={this.logOut}>Đăng xuất</NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
      );
    }
    return (
      <header className="position-fixed">
        <nav className="navbar navbar-expand-lg ">
          <NavLink exact className="navbar-brand" to="/">
            <img src={Logo} width={40} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={IconMenu} width={25} alt="" />
          </button>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav-content navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#lichchieu">
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#cumrap">
                  Cụm rạp
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#tintuc">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#ungdung">
                  Ứng dụng
                </a>
              </li>
            </ul>
            <div className="nav-login d-flex align-items-center mr-5">
              <NavLink className="mr-2 pr-2 d-flex align-items-center border-right" to="/login">
                <img src={Avatar} width={30} alt=""/>
                <span>Đăng nhập</span>
              </NavLink>
              <NavLink to="/sign-up">
                <span>Đăng ký</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  componentDidMount() {
    this.setState({
      user: this.props.data,
    })
  }
}

const mapStateToProps = state => {
  return {
    data: state.logInReducer.data,
  }
}

export default connect(mapStateToProps)(NavbarHome);
