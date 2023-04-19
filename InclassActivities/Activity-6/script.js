const myButton = document.getElementById("myButton");
let counter = 0;
function myFunction() {
  counter = 1 + counter;
  if (counter == 3) {
    move(500);
  } else if (counter == 6) {
    move(400);
  } else if (counter == 9) {
    move(300);
  } else if (counter == 12) {
    move(200);
  } else if (counter == 15) {
    move(100);
  } else if (counter == 18) {
    move(1);
  }
}
function move(mils) {
  myButton.style.position = "absolute";
  myButton.style.left = Math.random() * 650 + "px";
  myButton.style.top = Math.random() * 650 + "px";
  setTimeout(function () {
    alert("Time is up!!!");
  }, mils);
}
