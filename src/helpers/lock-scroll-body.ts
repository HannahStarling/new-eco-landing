export const lockScrollBody = (lock: boolean) => {
  const bodyElem = document.querySelector?.("body");
  if (lock) {
    bodyElem?.classList.add("lock");
  } else {
    bodyElem?.classList.remove("lock");
  }
};
