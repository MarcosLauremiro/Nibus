export const TOKEN_KEY = "@outdesk-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = (): UserDataType =>
  JSON.parse(localStorage.getItem("user") || "{}");

interface UserDataType {
  _id: string;
  avatar: string;
  name: string;
  email: string;
  receiveNotificationsAbout: string
}

export const setLogin = (token: string, user: UserDataType) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const setLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};