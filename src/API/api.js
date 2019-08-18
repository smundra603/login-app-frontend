// https://sm-login-app.herokuapp.com
export default async function api(route, data) {
  console.log('data inside is', data);
  const response = await fetch(`http://localhost:3000/${route}`, {
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
