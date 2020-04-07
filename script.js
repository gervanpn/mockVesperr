//"use strict";

window.onload = showAlert;

function contactUs() {
  let answer = confirm("Are you sure you want to contact us?");

  if(answer) {
      alert("You said Yes");
  } else {
      alert("You said No");
    }

}
