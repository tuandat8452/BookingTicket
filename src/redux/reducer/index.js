import { combineReducers } from "redux";
import fechMovieReducer from "../../components/LoaiPhim/PhimDangChieu/modules/reducer";
import fechMovieComingReducer from "../../components/LoaiPhim/PhimSapChieu/modules/reducer";
import logInReducer from "../../container/Login/modules/reducer";
import signUpReducer from "../../container/Signup/modules/reducer";
import authReducer from "../../container/Auth/modules/reducer";
import detailReducer from "../../container/HomeTemplate/Detail/modules/reducer";
import systemCinemaReducer from "../../components/ShowTimes/SystemCinema/modules/reducer";

const reducer = combineReducers({
    fechMovieReducer,
    fechMovieComingReducer,
    systemCinemaReducer,
    detailReducer,
    logInReducer,
    signUpReducer,
    authReducer,
});

export default reducer;