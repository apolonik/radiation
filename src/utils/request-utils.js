const getAdditionalData = async (requestedData) => {
  try {
    const response = await fetch(
      '/api/query',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(requestedData),
    });

    if (response.ok) {
      const json = await response.json();

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