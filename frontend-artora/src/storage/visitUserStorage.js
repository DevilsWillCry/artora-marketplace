const STORAGE_KEY = "artora-visit-user";

function saveUser(user) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(user)
  );
}

function getUser() {
  try {
    const user = localStorage.getItem(STORAGE_KEY);

    if (!user || user === "undefined") {
      return null;
    }

    return JSON.parse(user);
  } catch (error) {
    console.error("Invalid stored user:", error);

    localStorage.removeItem(STORAGE_KEY);

    return null;
  }
}

function removeUser() {
  localStorage.removeItem(STORAGE_KEY);
}

export {
  saveUser,
  getUser,
  removeUser,
};