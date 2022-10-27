const AUTH_TOKEN = 'AUTH_TOKEN';
const HOST_CREATE = 'HOST_CREATE';

export const getLocalStorage = () => localStorage.getItem(AUTH_TOKEN);
export const addLocalStorage = (token) =>
  localStorage.setItem(AUTH_TOKEN, token);
export const removeLocalStorage = () => localStorage.removeItem(AUTH_TOKEN);

export const getHostCreateId = () => localStorage.getItem(HOST_CREATE);
export const setHostCreateId = (id) => localStorage.setItem(HOST_CREATE, id);
export const removeHostCreateId = () => localStorage.removeItem(HOST_CREATE);
