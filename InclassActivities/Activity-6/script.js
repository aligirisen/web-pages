const myButton = document.getElementById("myButton");
let counter = 0;
let level = 0;
function myFunction() {
  counter = 1 + counter;
  if (level == 0) {
    level = level + 1;
    move(500);
  } else if (level == 1) {
    console.log(counter);
    if (counter == 4) {
      level = level + 1;
      move(400);
    }
  } else if (level == 2) {
    console.log(counter);
    if (counter == 7) {
      level = level + 1;
      move(300);
    }
  } else if (level == 3) {
    if (counter == 10) {
      level = level + 1;
      move(200);
    }
  } else if (level == 4) {
    if (counter == 13) {
      level = level + 1;
      move(100);
    }
  } else if (level == 5) {
    if (counter == 16) {
      level = level + 1;
      move(1);
    }
  } else if (level == 6) {
    level = level + 1;
    move(1);
  }
}
function move(mils) {
  setTimeout(function loop() {
    position();
    setTimeout(loop, mils);
}, mils)}
function position() {
  myButton.style.position = "absolute";
  myButton.style.left = Math.random() * 650 + "px";
  myButton.style.top = Math.random() * 650 + "px";
}