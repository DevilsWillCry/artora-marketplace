// src/storage/usersStorage.js
import  users from "../data/users";

const USERS_KEY = "artora-users";
const initialUsers = users;


// Initialize once
export function initializeUsers() {
  const existing =
    localStorage.getItem(USERS_KEY);

  if (!existing) {
    localStorage.setItem(
      USERS_KEY,
      JSON.stringify(initialUsers)
    );
  }
}

export function getUsers() {
  const users =
    localStorage.getItem(USERS_KEY);

  return users ? JSON.parse(users) : [];
}

export function saveUsers(users) {
  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );
}

export function addUser(user) {
  const users = getUsers();

  users.push(user);

  saveUsers(users);
}