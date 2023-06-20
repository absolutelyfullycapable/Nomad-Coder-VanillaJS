const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue"; // h1의 style을 JS에서 변경 가능 그러나 대부분의 경우에 style은 CSS 통해서 변경되어야 함
  console.log("title was clicked!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
/*
  내가 직접 실행 버튼을 누르지 않고 JS에 함수의 이름(여기서는 handleTitleCheck)을 넘겨 줘서 유저가 title을 click할 경우가 JS가 대신 실행 버튼을 눌러 주게 하는 것
  title.addEventListener("click", handleTitleClick()); => 이렇게 적지 않도록 주의하자!
*/
title.addEventListener("mouseenter", handleMouseEnter); // 마우스를 위에 올려놓았을 때의 이벤트
title.addEventListener("mouseleave", handleMouseLeave); // 마우스가 벗어났을 때의 이벤트
