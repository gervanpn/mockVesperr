//"use strict";

let isSidenavOpen = false;

function openSidenav() {
  if(!isSidenavOpen) {
    document.getElementById("sidenav").classList.toggle("show-sidenav");
    isSidenavOpen = true;
  }
}

function closeSidenav() {
  if(isSidenavOpen) {
    document.getElementById("sidenav").classList.toggle("show-sidenav");
    isSidenavOpen = false;
  }
}

function contactUsbtn() {
  let answer = confirm("Thank You for your Interest. Would you like to proceed?");

  if(answer) {
      alert("Thank You");
  } else {
      alert("Another Time.  Thank You for Visiting.");
    }

}
