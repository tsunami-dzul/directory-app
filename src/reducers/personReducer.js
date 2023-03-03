import { FETC_PEOPLE_STARTED, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAIL } from '../actions/actionTypes';

const initialState = {
  loading: false,
  totalPages: 0,
  currentPage: 0,
  error: null,
  people: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETC_PEOPLE_STARTED: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        ...action.payload,
      };
    case FETCH_PEOPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default personReducer;
