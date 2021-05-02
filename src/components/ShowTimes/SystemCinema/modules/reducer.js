import * as actType from "../modules/constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const systemCinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actType.SYSTEM_CINEMA_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case actType.SYSTEM_CINEMA_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case actType.SYSTEM_CINEMA_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default systemCinemaReducer;
