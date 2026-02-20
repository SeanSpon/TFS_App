const AUTH_KEY = "tfs_admin_auth";
const USER_KEY = "tfs_admin_user";

export function login(email: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_KEY, "true");
  localStorage.setItem(USER_KEY, email);
}

export function logout(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(USER_KEY);
}

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_KEY) === "true";
}

export function getCurrentUserEmail(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(USER_KEY);
}
