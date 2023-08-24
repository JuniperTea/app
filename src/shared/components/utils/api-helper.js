export function getBackendUrl() {
  return process.env.REACT_APP_BACKEND_URL;
}

export function commonGetJson(url, customHeaders) {
  return fetch(getBackendUrl() + url, {
    headers: {
      ...customHeaders,
      token: localStorage.getItem("token"),
    },
    method: "GET",
  }).then(x => x.json());
}

export function commonPostJson(url, data, customHeaders) {
  return fetch(getBackendUrl() + url, {
    headers: {
      ...customHeaders,
      token: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(x => x.json());
}
