import { loadPeopleFailure, loadPeopleStarted, loadPeopleSuccess } from '../actions/personActions';
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

export const savePerson = () => {
  return async (dispatch) => {
    try {

    } catch(err) {
      dispatch(loadPeopleFailure(err));
    }
  }
}
