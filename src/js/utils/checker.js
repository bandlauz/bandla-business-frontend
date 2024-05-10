export function isValidUsername(username) {
  if (!username) return false;
  return /^[a-z]+$/.test(username);
}
