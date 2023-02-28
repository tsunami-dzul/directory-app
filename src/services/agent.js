export const get = async (path) => {
  try {
    const url = process.env.REACT_APP_API_URL;

    const response = fetch(`${url}${path}`);
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};
