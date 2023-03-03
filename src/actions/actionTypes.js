export const FETC_PEOPLE_STARTED = 'FETCH_PEOPLE_STARTED';
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const FETCH_PEOPLE_FAIL = 'FETCH_PEOPLE_FAIL';

export const fetchPeopleStarted = () => ({
  type: FETC_PEOPLE_STARTED,
});

export const fetchPeopleSuccess = (data) => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: data,
});

export const fetchPeopleFailure = (error) => ({
  type: FETCH_PEOPLE_FAIL,
  payload: error,
});
