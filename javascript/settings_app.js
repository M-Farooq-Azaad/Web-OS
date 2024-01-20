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

let application_last_position_and_state = {};
function dbclick() {
  if (
    !application_last_position_and_state[containerId] ||
    !application_last_position_and_state[containerId].fullscreen
  ) {
    let dimensions = document.getElementById(containerId);
    let left = dimensions.style.left;
    let top = dimensions.style.top;
    let height = dimensions.style.height;
    let width = dimensions.style.width;
    application_last_position_and_state[containerId] = {
      left: left,
      top: top,
      height: height,
      width: width,
      fullscreen: true,
    };
    console.table(application_last_position_and_state);
    document.getElementById(containerId).style.transition = ".3s ease";
    document.getElementById(containerId).style.height = "calc(100vh - 40px)";
    document.getElementById(containerId).style.width = "100%";
    document.getElementById(containerId).style.top = "0px";
    document.getElementById(containerId).style.left = "0px";
  } else if (
    application_last_position_and_state[containerId].fullscreen === true
  ) {
    document.getElementById(containerId).style.transition = ".3s ease";
    document.getElementById(containerId).style.height =
      application_last_position_and_state[containerId].height;
    document.getElementById(containerId).style.width =
      application_last_position_and_state[containerId].width;
    document.getElementById(containerId).style.top =
      application_last_position_and_state[containerId].top;
    document.getElementById(containerId).style.left =
      application_last_position_and_state[containerId].left;
    console.log(application_last_position_and_state[containerId].left);
    let dimensions = document.getElementById(containerId);
    let left = dimensions.style.left;
    let top = dimensions.style.top;
    let height = dimensions.style.height;
    let width = dimensions.style.width;
    application_last_position_and_state[containerId] = {
      left: left,
      top: top,
      height: height,
      width: width,
      fullscreen: false,
    };
  }
  setTimeout(() => {
    document.getElementById(containerId).style.transition = "none";
  }, 300);
}
