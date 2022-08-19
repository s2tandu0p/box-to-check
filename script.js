function scale(element, value) {
  element.style.transform = "scale(" + value + ")";
}

var count = 0;

function rot(e) {
  count++;
  var deg = 35;
  if (count % 2 == 0) {
    e.style.transform = "rotate(" + "0" + "deg)";
    e.style.borderRightColor = "black";
    e.style.borderBottomColor = "black";
    e.style.width = "200px";
    e.style.borderTop = "";
    e.style.borderLeft = "";

    console.log(count);
  } else {
    e.style.transform = "rotate(" + deg + "deg)";
    e.style.transform = "offset-rotate(auto)";
    e.style.width = "100px";
    e.style.borderRightColor = "green";
    e.style.borderBottomColor = "green";
    e.style.borderTop = "none";
    e.style.borderLeft = "none";
    e.style.offsetRotate = "auto";
    console.log(count);
  }
}

// function checkMark(element) {
//   // element.style.borderColor = "green";

//   element.style.transform = "rotate(" + deg + "90)";
// }
