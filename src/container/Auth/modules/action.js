import axios from "axios";
import * as types from "../modules/constants";
import Swal from "sweetalert2";

const fecthAuth = (user) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((res) => {
        if(res.data.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
              response : {
                  data: "Bạn không có quyền truy cập!",
              }
          });
      }
        dispatch(actAuthSuccess(res.data));
        localStorage.setItem("Adminlogin", JSON.stringify(res.data));
        Swal.fire({
          icon:'success',
          text: 'Đăng nhập thành công'
        })
      })
      .catch((err) => {
        dispatch(actAuthFailed(err));
        Swal.fire({
          icon:'error',
          text: err.response.data,
        })
      });
  };
};

const actAuthRequest = () => {
  return {
    type: types.FECTH_AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: types.FECTH_AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: types.FECTH_AUTH_FAILED,
    payload: err,
  };
};

export default fecthAuth;
