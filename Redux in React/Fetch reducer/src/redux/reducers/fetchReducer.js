import {
  FETCH_ERROR,
  FETCH_LOADING,
  FETCH_SUCCESS
} from "../actions/fetchActions";

const INITIAL_STATE = { isLoading: false, data: [], error: null };

export const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, isLoading: true };
    case FETCH_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
