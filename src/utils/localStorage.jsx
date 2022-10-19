const AUTH_TOKEN = 'AUTH_TOKEN';

export const getLocalStorage = () => localStorage.getItem(AUTH_TOKEN);
export const addLocalStorage = (token) =>
	localStorage.setItem(AUTH_TOKEN, token);
export const removeLocalStorage = () => localStorage.removeItem(AUTH_TOKEN);
