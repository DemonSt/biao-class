import store from './store';

function loggedIn () {
  return localStorage.getItem('sessionId');
}

function login (sessionId, user, redirect = '/') {
  localStorage.setItem('sessionId', sessionId);
  store.set('user', user);

  if (!redirect)
    return;

  location.href = redirect;
}

function logout (redirect = '/#/login') {
  localStorage.removeItem('sessionId');
  localStorage.removeItem('user');
  location.reload();
  location.href = redirect;
}

function user (key) {
  let user = store.get('user');
  if(!key)
    return user;
  return user[key];
}
// 给 u 一个非空判断
function isAdmin () {
  let u = user();
  return u && user().IS_ADMIN;
}

export default {
  user,
  login,
  logout,
  loggedIn,
  isAdmin,
};