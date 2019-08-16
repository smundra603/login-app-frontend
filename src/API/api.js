export default async function api(route, data) {
  console.log('process.env.BACKEND_URL..', process.env.BACKEND_URL);
  const response = await fetch(`${process.env.BACKEND_URL}/${route}`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();
  if (response.ok) {
    return {
      ...responseData,
      error: false
    };
  }
  return {
    ...responseData,
    error: true
  };
}
