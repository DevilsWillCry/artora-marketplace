export function load(key, fallback) {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : fallback;
}

export function save(key, value) {
  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}