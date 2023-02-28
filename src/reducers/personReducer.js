import { personActionTypes } from '../actions/actionTypes';

const personReducer = (state = [], action) => {
  switch (action.type) {
    case personActionTypes.addPerson:
      return [...state, action.payload.persons];
    case personActionTypes.updatePerson:
      const { person: personToUpdate } = action.payload;
      const personUpdated = state.filter((person) => person.id === personToUpdate.id);

      return [...state, personUpdated];
    case personActionTypes.deletePerson:
      const { person } = action.payload.id;

      return state.filter((p) => p.id !== person.id);
    default:
      return state;
  }
};

export default personReducer;
