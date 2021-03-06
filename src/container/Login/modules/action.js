import axios from "axios";
import * as actTypes from "../modules/constants";
import Swal from 'sweetalert2';

export const fecthLogin = (user, history) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method : "POST",
            data : user,
        })
        .then(res => {
            dispatch(actLoginSuccess(res.data));
            localStorage.setItem("Userlogin", JSON.stringify(res.data));
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công',
              })
              .then(result => {
                  if(result.isConfirmed){
                      history.replace("/");
                  }
              });
        })
        .catch(err => {
            dispatch(actLoginFailed(err));
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: err.response.data,
              })
        })
    }
}

const actLoginRequest = () => {
    return {
        type : actTypes.FECTH_LOGIN_REQUEST
    }
}

const actLoginSuccess = data => {
    return {
        type : actTypes.FECTH_LOGIN_SUCCESS,
        payload : data,
    }
}

const actLoginFailed = err => {
    return {
        type : actTypes.FECTH_LOGIN_FAILED,
        payload : err,
    }
}