let package_info;
fetch("package/app.json")
  .then((response) => response.json())
  .then((data) => {
    // Do something with the loaded JSON data
    console.table(data);
    package_info = data;
    container_body("yalla-app");
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

function container_body(app_id) {
  selected_app = document.getElementById(app_id);
  selected_app.classList.add("move-able");
  selected_app.style.minWidth = package_info.dimension.min_width;
  selected_app.style.maxWidth = package_info.dimension.max_width;
  selected_app.style.minHeight = package_info.dimension.min_height;
  selected_app.style.maxHeight = package_info.dimension.max_height;
  console.log(package_info.dimension.min_width);
  /* Starting adding topBar */
  topbar = `<div class="topBar" onmousedown="startDragging1(event,'${app_id}')" ondblclick="dbclick1()">
    <div>
    <h5>${package_info.app_name}</h5>
  </div>
  <div class="navigations">
  <div class="navigation_options maximize"><img src="./assets/icons/minimize.png" alt="minimize"></div>
  <div class="navigation_options minimize" onclick="dbclick1()"><img src="./assets/icons/maximize.png"
  alt="Maximize"></div>
  <div class="navigation_options close" onclick="close_app()"><img src="./assets/icons/close.png" alt="Close">
    </div>
    </div>
    </div>`;
  selected_app.insertAdjacentHTML("beforeend", topbar);
}

/* Copied from settings_app.js file */
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);

function startDragging1(e, id) {
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

function drag1(e) {
  if (isDragging) {
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    document.getElementById(containerId).style.left = newX + "px";
    document.getElementById(containerId).style.top = newY + "px";
  }
}

function stopDragging1() {
  isDragging = false;
}

let application_position1 = {};
function dbclick1() {
  if (
    !application_position1[containerId] ||
    !application_position1[containerId].fullscreen
  ) {
    let dimensions = document.getElementById(containerId);
    let left = dimensions.style.left;
    let top = dimensions.style.top;
    let height = dimensions.style.height;
    let width = dimensions.style.width;
    application_position1[containerId] = {
      left: left,
      top: top,
      height: height,
      width: width,
      fullscreen: true,
    };
    console.table(application_position1);
    _id(containerId).style.transition = ".2s ease";
    // _id(containerId).style.height = "calc(100vh - 40px)";
    _id(containerId).style.height = "calc(100vh - 75px)";
    _id(containerId).style.width = "100%";
    _id(containerId).style.top = "0px";
    _id(containerId).style.left = "0px";
  } else if (application_position1[containerId].fullscreen === true) {
    _id(containerId).style.transition = ".2s ease";

    _id(containerId).style.height = application_position1[containerId].height;
    _id(containerId).style.width = application_position1[containerId].width;
    _id(containerId).style.top = application_position1[containerId].top;
    _id(containerId).style.left = application_position1[containerId].left;
    console.log(application_position1[containerId].left);
    let dimensions = _id(containerId);
    let left = dimensions.style.left;
    let top = dimensions.style.top;
    let height = dimensions.style.height;
    let width = dimensions.style.width;
    application_position1[containerId] = {
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
