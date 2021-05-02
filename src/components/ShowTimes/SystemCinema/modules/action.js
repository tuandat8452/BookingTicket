import axios from "axios";
import * as actTypes from "../modules/constants";

const fecthSystemCinema = () => {
    return(dispacth) => {
        dispacth(actFecthSystemCinemaRequest());
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
            method:'GET'
        })
        .then(res => {
            dispacth(actFecthSystemCinemaSuccess(res.data));
        })
        .catch(err => {
            dispacth(actFecthSystemCinemaFailed(err));
        })
    }
}

const actFecthSystemCinemaRequest = () => {
    return {
        type: actTypes.SYSTEM_CINEMA_REQUEST,
    }
}

const actFecthSystemCinemaSuccess = data => {
    return {
        type: actTypes.SYSTEM_CINEMA_SUCCESS,
        payload : data,
    }
}

const actFecthSystemCinemaFailed = err => {
    return {
        type : actTypes.SYSTEM_CINEMA_FAILED,
        payload: err,
    }
}

export default fecthSystemCinema;