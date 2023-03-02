import { loadPeopleFailure, loadPeopleStarted, loadPeopleSuccess, updatePersonStarted, updatePersonSuccess } from '../actions/personActions';
import { get } from './agent';

export const getPeople = () => {  
  return async (dispatch) => {
    try {
      dispatch(loadPeopleStarted());
      
      const data = await get('/people');

      dispatch(loadPeopleSuccess(data));
    } catch(err) {
      dispatch(loadPeopleFailure(err));
    }
  }
};

export const updatePerson = (id, payload) => {
  return async (dispatch) => {
    try {
      dispatch(updatePersonStarted());

      const data = await 

      dispatch(updatePersonSuccess(data));

    } catch(err) {
      dispatch(loadPeopleFailure(err));
    }
  }
}
