import { get } from './agent';

export const getPerson = async (dispatch) => {
  const persons = await get('/person');

  console.log(persons);
};
