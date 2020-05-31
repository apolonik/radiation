const MEMO = {};

const getAdditionalData = async (requestedData) => {
  try {
    const body = JSON.stringify(requestedData);
    if (MEMO[body]) {
      return MEMO[body];
    };
    const response = await fetch(
      '/api/query',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
      },
      body,
    });

    if (response.ok) {
      const json = await response.json();
      MEMO[body] = json;
      return json;
    } else {
      return Promise.reject({
        status: response.status,
        message: response.statusText,
      });
    }
  } catch (e) {
    return Promise.reject(e);
  }
}

export {getAdditionalData};