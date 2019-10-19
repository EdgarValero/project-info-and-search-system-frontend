export async function onLogin(token) {
  if (typeof localStorage !== "undefined" && token) {
    localStorage.setItem("auth_token", token);
  }
}

export function onLogout() {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("auth_token");
  }
}

export function isAuthenticated(to, from, next) {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("auth_token") ? next() : next("/admin/signin");
  }
}

export function isNotAuthenticated(to, from, next) {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("auth_token") ? next() : next();
  }
}
