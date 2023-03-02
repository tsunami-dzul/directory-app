const url = process.env.REACT_APP_API_URL;

export const get = async (path) => {  
  try {
    const response = await fetch(`${url}${path}`);
    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export const update = async (path, payload) => {
  try {
    const response = await fetch(`${url}${path}`, {
      method: 'UPDATE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    });

    const data = await response.json();

    return data;
  } catch(err) {
    throw err;
  }
}
