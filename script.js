const password = document.querySelector("#password");
const confirmpass = document.querySelector("#confirmpass");
const button = document.querySelector(".submit");
const notMatch = document.createElement("div");

notMatch.className = "notMatch";
if (password.value != confirmpass.value) {
  notMatch.textContent = "* The passwords do not match";
  confirmpass.appendChild(notMatch);
}
