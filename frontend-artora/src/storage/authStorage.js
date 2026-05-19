// src/storage/authStorage.js

const STORAGE_KEY = "artora-user";

function saveUser(user) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(user)
  );
}

function getUser() {
  const user =
    localStorage.getItem(STORAGE_KEY);

  return user ? JSON.parse(user) : null;
}

function removeUser() {
  localStorage.removeItem(STORAGE_KEY);
}

export {
  saveUser,
  getUser,
  removeUser,
};