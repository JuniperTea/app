export function getBackendUrl() {
  return process.env.REACT_APP_BACKEND_URL;
}

export function commonGetJson(url, customHeaders) {
  console.log("in api helper" + url);
  return fetch(getBackendUrl() + url, {
    headers: {
      ...customHeaders,
      token: localStorage.getItem("token"),
      accept: "application/json",
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

export function commonDeleteJson(url, customHeaders) {
  return fetch(getBackendUrl() + url, {
    headers: {
      ...customHeaders,
      token: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then(x => x.json());
}

export function commonRawPost(url, data) {
  console.log("in api helper " + getBackendUrl() + url);
  if (data) {
    console.log("data exists");
  }
  return fetch(getBackendUrl() + url, {
    method: "POST",
    body: data,
  }).then(x => x.json());
}

export function commonPatchJson(url, data, customHeaders) {
  return fetch(getBackendUrl() + url, {
    headers: {
      ...customHeaders,
      token: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(data),
  }).then(x => x.json());
}
