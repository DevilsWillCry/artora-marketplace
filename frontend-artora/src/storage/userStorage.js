// src/storage/usersStorage.js

const USERS_KEY = "artora-users";

const initialUsers = [
  {
    id: 1,

    name: "Linnea Costa",

    email: "linnea@artora.com",

    password: "123456",

    avatar:
      "https://i.pravatar.cc/150?img=32",

    role: "customer",
  },

  {
    id: 2,

    name: "Miguel Angel",

    email: "miguel@example.com",

    password: "123456",

    avatar:
      "https://i.pravatar.cc/150?img=12",

    role: "customer",
  },
];

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