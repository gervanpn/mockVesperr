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
