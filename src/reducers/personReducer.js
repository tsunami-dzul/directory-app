import { addPersonActionTypes, loadPeopleActionTypes } from '../actions/actionTypes';

const initialState = {
  loading: false,
  totalPages: 0,
  currentPage: 0,
  error: null,
  people: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadPeopleActionTypes.loadPeopleStarted: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case loadPeopleActionTypes.loadPeopleSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        ...action.payload,
      };
    case loadPeopleActionTypes.loadPeopleFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case addPersonActionTypes.addPersonStarted:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case addPersonActionTypes.addPersonSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        people: [...state.people, ...action.payload],
      };
    case addPersonActionTypes.addPersonFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default personReducer;
