const sidebarStatus = 0;

export function getSidebarStatus() {
  return localStorage.getItem(sidebarStatus);
}

export function setSidebarStatus(val) {
  return localStorage.setItem(sidebarStatus, val);
}

export function removeSidebarStatus() {
  return localStorage.removeItem(sidebarStatus);
}
