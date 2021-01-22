const makeReq = async (
  method = 'GET',
  url = '/api/v1/bootcamps',
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body = null
) => {
  const config = {
    method,
    headers,
  }
  if (body !== null) {
    config.body = JSON.stringify(body)
  }
  try {
    const res = await fetch(url, config)
    const data = await res.json()
    return data
  } catch (err) {
    return err
  }
}

export { makeReq }
