function _id(id) {
  return document.getElementById(id);
}
let isDragging = false;
let offsetX, offsetY;
let containerId = "";
// document.getElementById('movableDiv').addEventListener('mousedown', startDragging);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);

function startDragging(e, id) {
  containerId = id;
  isDragging = true;
  offsetX =
    e.clientX -
    parseFloat(
      window.getComputedStyle(document.getElementById(containerId)).left
    );
  offsetY =
    e.clientY -
    parseFloat(
      window.getComputedStyle(document.getElementById(containerId)).top
    );
}

function drag(e) {
  if (isDragging) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    document.getElementById(containerId).style.left = newX + "px";
    document.getElementById(containerId).style.top = newY + "px";
  }
}

function stopDragging() {
  isDragging = false;
}

let application_position = {};
function dbclick() {
  if (
    !application_position[containerId] ||
    !application_position[containerId].fullscreen
  ) {
    let dimensions = document.getElementById(containerId);
    let left = dimensions.style.left;
    let top = dimensions.style.top;
    let height = dimensions.style.height;
    let width = dimensions.style.width;
    application_position[containerId] = {
      left: left,
      top: top,
      height: height,
      width: width,
      fullscreen: true,
    };
    console.table(application_position);
    _id(containerId).style.transition = ".2s ease";
    _id(containerId).style.height = "calc(100vh - 40px)";
    _id(containerId).style.width = "100%";
    _id(containerId).style.top = "0px";
    _id(containerId).style.left = "0px";
  } else if (application_position[containerId].fullscreen === true) {
    _id(containerId).style.transition = ".2s ease";

    _id(containerId).style.height = application_position[containerId].height;
    _id(containerId).style.width = application_position[containerId].width;
    _id(containerId).style.top = application_position[containerId].top;
    _id(containerId).style.left = application_position[containerId].left;
    console.log(application_position[containerId].left);
    let dimensions = _id(containerId);
    let left = dimensions.style.left;
    let top = dimensions.style.top;
    let height = dimensions.style.height;
    let width = dimensions.style.width;
    application_position[containerId] = {
      left: left,
      top: top,
      height: height,
      width: width,
      fullscreen: false,
    };
  }
  setTimeout(() => {
    _id(containerId).style.transition = "none";
  }, 200);
}

/* Background Changer */
function changeBg(id) {
  let bg_input = _id(`${id}-updater`);
  if (bg_input.files.length > 0) {
    const file = bg_input.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      // Convert the image data to Base64
      const imageData = e.target.result;
      localStorage.setItem(id, imageData);
      console.log("Image uploaded to local storage!");
      bg_changer(id, localStorage.getItem(id));
    };
    reader.readAsDataURL(file);
  } else {
    toast_function('You have not selected any image')
  }
}
function bg_changer(id, url) {
  if (id === "main-container") {
    let background = _id(id);
    background.style.backgroundImage = `url(${url})`;
  } else if (id === "lock_screen") {
    let background = _id("lock_screen");
    let background2 = _id("lock_screen_with_password");
    background.style.backgroundImage = `url(${url})`;
    background2.style.backgroundImage = `url(${url})`;
  } else if (id === "profile") {
    _id("profile").src = url;
  }
}
bg_changer("main-container", localStorage.getItem("main-container"));
bg_changer("lock_screen", localStorage.getItem("lock_screen"));
bg_changer("profile", localStorage.getItem("profile"));

/* Close Application */
function close_app() {
  _id(containerId).style.transition = ".2s ease";
  _id(containerId).style.opacity = "0";
  setTimeout(() => {
    _id(containerId).style.display = "none";
    console.log(`${containerId}-taskbar`);
    _id(`${containerId}-taskbar`).remove();
    all_apps[containerId].is_active = false;
    console.log(console.table(all_apps))
  }, 200);
}

/* Open Application */
function open_application(id) {
  dynamic_taskbar(id);
  _id(id).style.transition = ".2s ease";
  _id(id).style.display = "block";
  setTimeout(() => {
    _id(id).style.opacity = "1";
  }, 100);
  setTimeout(() => {
    _id(id).style.transition = ".0s ease";
  }, 200);
}

/* Making taskbar Dynamic */
function dynamic_taskbar(id) {
  if (all_apps[id].is_active === false) {
    let icon_wrapper = document.createElement("div");
    icon_wrapper.style.borderBottom = "3px solid skyBlue"
    icon_wrapper.id = `${id}-taskbar`;
    let icon = document.createElement("img");
    icon.src = all_apps[id].icon_url;
    icon_wrapper.append(icon);
    _id("opened_app").append(icon_wrapper);
    all_apps[id].is_active = true;
  } else {
    toast_function('App is already running');
  }
}

all_apps = {
  "third-app": {
    app_name: "settings",
    icon_url: "./assets/start_icon.png",
    is_active: false,
  },
};

/* Toast */

function toast_function(description) {
  let toast = _id("toast");
  _id("toast-description").innerText = description;
  toast.style.top = "15px";
  setTimeout(() => {
    let toast = _id("toast");
    toast.style.top = "-150px";
  }, 4000);
}
function toast_close() {
  let toast = _id("toast");
  toast.style.top = "-150px";
}
