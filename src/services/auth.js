export const TOKEN_KEY = "@junior-forever-token";
export const USERNAME_KEY = "@junior-forever-username";
export const AUTHOR_ID_KEY = "@junior-forever-author-id";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUsername = () => localStorage.getItem(USERNAME_KEY);
export const getAuthorId = () => localStorage.getItem(AUTHOR_ID_KEY);


export const login = (token, username, authorId) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(AUTHOR_ID_KEY, authorId);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(AUTHOR_ID_KEY);
};