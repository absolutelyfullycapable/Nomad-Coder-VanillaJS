const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "userName";
const HIDDEN_CLASSNAME = "hidden";

const savedUserName = localStorage.getItem(USERNAME_KEY); // Local Storage가 비어 있으면 null 값을 반환

function onLoginSubmit(event) {
  const userName = loginInput.value;

  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintingGreeting(userName);
}

function paintingGreeting(userName) {
  /*
    - 같은 동작을 반복하고 있어 함수로 만들어 줌
    - 호출하는 위치에 따라 유저 정보는 다른 곳에서 오게 됨
  */
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintingGreeting(savedUserName);
}
