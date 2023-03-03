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
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};

export const remove = async (path) => {
  try {
    const response = await fetch(`${url}${path}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    const data = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
};
