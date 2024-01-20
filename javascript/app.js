/* Desktop main screen background changer function */
function bg_main_screen(url) {
  let background = document.getElementById("main-container");
  background.style.backgroundImage = `url(${url})`;
}

/* Desktop lock screen background changer function */
let lock_screen = document.getElementById("lock_screen");
let lock_screen_with_password = document.getElementById(
  "lock_screen_with_password"
);

function bg_lock_screen(url) {
  background.style.backgroundImage = `url(${url})`;
}

var locked_unlocked_flag = 0;

function unlocking_os() {
  if (locked_unlocked_flag === 1) {
    lock_screen.style.top = "100%";
    lock_screen_with_password.style.display = "block";
    lock_screen_with_password.style.top = "0%";
    setTimeout(() => {
      lock_screen_with_password.style.opacity = "1";
    }, 10);
    locked_unlocked_flag = 0;
  }
}
function locking_os(event, clicked) {
  if (locked_unlocked_flag === 0) {
    if ((event.altKey && event.key === "l") || clicked == "1") {
      lock_screen.style.opacity = "1";
      lock_screen.style.top = "0%";
      setTimeout(() => {
        locked_unlocked_flag = 1;
      }, 1000);
    }
  }
}
function password_unlock() {
  var passwordInput = document.getElementById("passcode");
  var passwordValue = passwordInput.value;
  if (passwordValue.length >= 3) {
    lock_screen_with_password.style.top = "-100%";
    // lock_screen_with_password.style.opacity = "0";
    setTimeout(() => {
      lock_screen_with_password.style.display = "none";
    }, 1000);
    // lock_screen.style.top = "100%"
  }
}

document.addEventListener("keydown", locking_os);
document.addEventListener("keydown", unlocking_os);

fullscreen_enabled = false;
function fullscreen() {
  if (fullscreen_enabled == false) {
    openFullscreen();
    fullscreen_enabled = true;
  } else if (fullscreen_enabled == true) {
    closeFullscreen();
    fullscreen_enabled = false;
  }
}

var elem = document.documentElement;
/* Full screen and exit full screen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

/* Main Menu Container */
let mainMenu = document.getElementById("main_menu_windows");
var mainMenu_flag = "off";
function main_menu(event, clicked) {
  if (mainMenu_flag === "off") {
    console.log("working");
    if (event.ctrlKey || clicked) {
      mainMenu.style.display = "flex";
      setTimeout(() => {
        mainMenu.style.opacity = "1";
        mainMenu.style.bottom = "calc(0px + 40px)";
        // mainMenu.style.left = "0px";
      }, 10);
      mainMenu_flag = "on";
      console.log(mainMenu_flag);
    }
  } else if (mainMenu_flag === "on") {
    if (event.ctrlKey || clicked) {
      mainMenu.style.opacity = "0";
      mainMenu.style.bottom = "-10px";
      // mainMenu.style.left = "-10px";
      setTimeout(() => {
        mainMenu.style.display = "none";
      }, 200);
      mainMenu_flag = "off";
      console.log(mainMenu_flag);
    }
  }
}
document.addEventListener("keydown", main_menu);

/* Search Box animation */

function search_screen() {
  let search_container = document.getElementById("search_app_container");
  search_container.style.height = "calc(100dvh - 40px)";
  search_container.style.backgroundColor = "rgba(0, 0, 0, 0.395)";
  search_container.style.backdropFilter = "blur(10px)";
}

/* Phone size main menu Functions */
let column2 = document.getElementById("column-2");
let column3 = document.getElementById("column-3");
let column2_header = document.getElementById("column-2-header");
let column3_header = document.getElementById("column-3-header");
let column2_flag = 0;
let column3_flag = 0;
function resize_column2() {
  if (column2_flag === 0) {
    column2_flag = 1;
    column3.style.height = "0px";
    column3.style.overflow = "scroll";
    column3.style.padding = "0px";
    setTimeout(() => {
      column3_header.style.height = "0px";
    }, 150);
  } else if (column2_flag === 1) {
    column2_flag = 0;
    column3_header.style.height = "auto";
    setTimeout(() => {
      column3.style.height = "280px";
      column3.style.padding = "40px 7px 0px 0px";
    }, 150);
  }
}
function resize_column3() {
  if (column3_flag === 0) {
    column3_flag = 1;
    column2.style.height = "0px";
    column2.style.overflow = "scroll";
    column2.style.padding = "0px";
    column3.style.height = "100%";
    setTimeout(() => {
      column2_header.style.height = "0px";
    }, 150);
  } else if (column3_flag === 1) {
    column3_flag = 0;
    column2_header.style.height = "auto";
    setTimeout(() => {
      column3.style.height = "280px";
      column2.style.height = "100%";
      column2.style.padding = "40px 0px 0px 0px";
    }, 150);
  }
}
function width_checker() {
  let device_width = window.innerWidth;
  if (device_width <= 750) {
    column2_header.setAttribute("onclick", "resize_column2()");
    column3_header.setAttribute("onclick", "resize_column3()");
  } else if (device_width > 750) {
    column2_header.removeAttribute("onclick");
    column3_header.removeAttribute("onclick");
  }
}
width_checker()
addEventListener("resize", width_checker);
/* Context Menu */
const menu = document.querySelector(".menu");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  menu.style.top = `${event.pageY}px`;
  menu.style.left = `${event.pageX}px`;
  menu.classList.remove("hide");
});

document.addEventListener("click", () => menu.classList.add("hide"));
