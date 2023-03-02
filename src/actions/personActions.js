import { addPersonActionTypes, loadPeopleActionTypes, updatePersonActionTypes } from './actionTypes';

export const loadPeopleStarted = () => ({
  type: loadPeopleActionTypes.loadPeopleStarted,
});

export const loadPeopleSuccess = (data) => ({
  type: loadPeopleActionTypes.loadPeopleSuccess,
  payload: data,
});

export const loadPeopleFailure = (error) => ({
  type: loadPeopleActionTypes.loadPeopleFailure,
  payload: error,
});

export const addPersonStarted = () => ({
  type: addPersonActionTypes.addPersonStarted,
});

export const addPersonSuccess = (data) => ({
  type: addPersonActionTypes.addPersonSuccess,
  payload: data,
});

export const addPersonFailure = (error) => ({
  type: addPersonActionTypes.addPersonFailure,
  payload: error,
});

export const updatePersonStarted = () => ({
  type: updatePersonActionTypes.updatePersonSuccess,
});

export const updatePersonSuccess = (data) => ({
  type: updatePersonActionTypes.updatePersonSuccess,
  payload: data,
});

export const updatePersonFailure = (error) => ({
  type: updatePersonActionTypes.updatePersonFailure,
  payload: error,
});
