const yearTarget = document.querySelector("#year");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}