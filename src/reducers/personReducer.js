import { addPersonActionTypes, loadPeopleActionTypes, updatePersonActionTypes } from '../actions/actionTypes';

const initialState = {
  loading: false,
  totalPages: 0,
  currentPage: 0,
  error: null,
  people: [],
};

const startedAction = (state) => {
  return {
    ...state,
    error: null,
    loading: true,
  };
};

const succesAction = (state, action) => {
  return {
    ...state,
    loading: false,
    error: null,
    ...action.payload,
  };
};

const failureAction = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadPeopleActionTypes.loadPeopleStarted: {
      return startedAction(state);
    }
    case loadPeopleActionTypes.loadPeopleSuccess:
      return succesAction(state, action);
    case loadPeopleActionTypes.loadPeopleFailure:
      return failureAction(state, action);
    case addPersonActionTypes.addPersonStarted:
      return startedAction(state);
    case addPersonActionTypes.addPersonSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        people: [...state.people, ...action.payload],
      };
    case addPersonActionTypes.addPersonFailure:
      return failureAction(state, action);
    case updatePersonActionTypes.updatePersonSuccess:
      return succesAction(state);
    case updatePersonActionTypes.updatePersonSuccess:
      const people = state.people.filter((person) => person.id !== action.payload.id);

      return {
        ...state,
        loading: false,
        error: null,
        people: [...people, ...action.payload],
      };
    case updatePersonActionTypes.updatePersonFailure:
      return failureAction(state, action);
    default:
      return state;
  }
};

export default personReducer;
