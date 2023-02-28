import { personActionTypes } from '../actions/actionTypes';

const initialState = {
  loading: false,
  totalPages: 0,
  currentPage: 0,
  persons: [],
};

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case personActionTypes.addPerson:
      return {
        ...action.payload,
      };
    case personActionTypes.updatePerson:
      const { person: personToUpdate } = action.payload;
      const personUpdated = state.persons.filter((person) => person.id === personToUpdate.id);

      return [...state, personUpdated];
    case personActionTypes.deletePerson:
      return state.persons.filter((person) => person.id !== action.payload.id);
    default:
      return state;
  }
};

export default personReducer;
