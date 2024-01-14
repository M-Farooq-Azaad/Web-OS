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
let mainMenu = document.getElementById("mainMenu-container");
var mainMenu_flag = "off";
function main_menu(event, clicked) {
  if (mainMenu_flag === "off") {
    if (event.ctrlKey || clicked) {
      mainMenu.style.display = "flex";
      setTimeout(() => {
        mainMenu.style.opacity = "1";
      }, 10);
      mainMenu_flag = "on";
      console.log(mainMenu_flag);
    }
  } else if (mainMenu_flag === "on") {
    if (event.ctrlKey || clicked) {
      mainMenu.style.opacity = "0";
      setTimeout(() => {
        mainMenu.style.display = "none";
      }, 300);
      mainMenu_flag = "off";
      console.log(mainMenu_flag);
    }
  }
}
document.addEventListener("keydown", main_menu);

/* Search Box animation */

function search_screen() {
  let search_container = document.getElementById("search_app_container");
  search_container.style.height = "calc(100dvh - 40px)" 
  search_container.style.backgroundColor = "rgba(0, 0, 0, 0.395)" 
  search_container.style.backdropFilter = "blur(10px)" 
}
