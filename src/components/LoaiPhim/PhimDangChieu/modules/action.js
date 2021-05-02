import axios from "axios";
import * as actType from "../modules/constants";

const fecthMovie = () => {
  return (dispatch) => {
    dispatch(actFecthMovieRequest());
    axios({
      url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=30&tuNgay=01%2F01%2F2015&denNgay=31%2F12%2F2020",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          dispatch(actFechMovieSuccess(res.data));
        }, 3000);
      })
      .catch((err) => {
        dispatch(actFechMovieFailed(err));
      });
  };
};

const actFecthMovieRequest = () => {
  return {
    type: actType.FECTH_MOVIE_REQUEST,
  };
};

const actFechMovieSuccess = (data) => {
  return {
    type: actType.FECTH_MOVIE_SUCCESS,
    payload: data,
  };
};

const actFechMovieFailed = (err) => {
  return {
    type: actType.FECTH_MOVIE_FAILED,
    payload: err,
  };
};

export default fecthMovie;
