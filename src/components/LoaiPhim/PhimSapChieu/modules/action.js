import axios from "axios";
import * as actType from "../modules/constants";

const fecthMovieComing = () => {
  return (dispatch) => {
    dispatch(actFecthMovieComingRequest());
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=30&tuNgay=01%2F01%2F2021&denNgay=31%2F12%2F2025",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);

        dispatch(actFechMovieComingSuccess(res.data));
      })
      .catch((err) => {
        dispatch(actFechMovieComingFailed(err));
      });
  };
};

const actFecthMovieComingRequest = () => {
  return {
    type: actType.FECTH_MOVIE_COMING_SOON_REQUEST,
  };
};

const actFechMovieComingSuccess = (data) => {
  return {
    type: actType.FECTH_MOVIE_COMING_SOON_SUCCESS,
    payload: data,
  };
};

const actFechMovieComingFailed = (err) => {
  return {
    type: actType.FECTH_MOVIE_COMING_SOON_FAILED,
    payload: err,
  };
};

export default fecthMovieComing;
