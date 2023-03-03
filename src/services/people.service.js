import { fetchPeopleStarted, fetchPeopleSuccess, fetchPeopleFailure } from '../actions/actionTypes';
import { get, remove, update } from './agent';

export const getPeople = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPeopleStarted());

      const data = await get('/people');

      dispatch(fetchPeopleSuccess(data));
    } catch (err) {
      dispatch(fetchPeopleFailure(err));
    }
  };
};

export const updatePerson = (id, payload) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPeopleStarted());

      const data = await update(`/people/${id}`, payload);

      if (data.ok) {
        dispatch(getPeople());
      } else {
        dispatch(fetchPeopleFailure(data.message));
      }

      dispatch(fetchPeopleSuccess(data));
    } catch (err) {
      dispatch(fetchPeopleFailure(err));
    }
  };
};

export const deletePerson = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPeopleStarted());

      const data = await remove(`/people/${id}`);

      if (data.ok) {
        dispatch(getPeople());
      } else {
        dispatch(fetchPeopleFailure(data.message));
      }

      dispatch(fetchPeopleSuccess(data));
    } catch (err) {
      dispatch(fetchPeopleFailure(err));
    }
  };
};
