import { personActionTypes } from '../actions/actionTypes';
import { get } from './agent';

export const getPerson = async (dispatch) => {
  const data = await get('/person');

  dispatch({
    type: personActionTypes.addPerson,
    payload: data,
  });
};
