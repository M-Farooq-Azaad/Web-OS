window.addEventListener("load", event => {

  // Expand Left Side
  var icon = document.querySelector('.hamb'),
  left = document.querySelector('.left');


  icon.addEventListener('click', expand);

  function expand() {
    if (left.classList.contains('show')) {
      left.classList.remove('show');
    } else {
      left.classList.add('show');
    }
  }

  // Toggles
  var toggle = document.querySelectorAll('.toggle');


  toggle.forEach(function (el) {
    el.addEventListener("click", activateToggle);
  });


  function activateToggle(event) {
    var currentToggle = event.target;

    if (currentToggle.classList.contains('off')) {
      currentToggle.classList.remove('off');

    } else {
      currentToggle.classList.add('off');
    }
  };


  // Font Size Options
  var letter = document.querySelectorAll('.letter'),
  sizeS = document.querySelector('.size_s'),
  sizeM = document.querySelector('.size_m'),
  sizeL = document.querySelector('.size_l'),
  container = document.querySelector('.container');


  letter.forEach(function (el) {
    el.addEventListener("click", activateLetter);
  });


  function activateLetter(event) {
    var currentLetter = event.currentTarget,
    allLetters = document.querySelectorAll('.letter');

    allLetters.forEach(function (el) {
      el.classList.remove('select');
    });
    currentLetter.classList.add('select');


    if (sizeS.classList.contains('select')) {
      container.setAttribute('data-size', 'small');
    }

    if (sizeM.classList.contains('select')) {
      container.setAttribute('data-size', '');
    }
    if (sizeL.classList.contains('select')) {
      container.setAttribute('data-size', 'large');
    }
  }


  // Themes Options
  var color = document.querySelectorAll('.color'),
  colorPurple = document.querySelector('.c_purple'),
  colorGreen = document.querySelector('.c_green'),
  colorBlue = document.querySelector('.c_blue'),
  colorPink = document.querySelector('.c_pink'),
  colorOrange = document.querySelector('.c_orange');


  color.forEach(function (el) {
    el.addEventListener("click", changeTheme);
  });


  function changeTheme(event) {
    var currentColor = event.target,
    allColors = document.querySelectorAll('.color');

    allColors.forEach(function (el) {
      el.classList.remove('active_color');
    });
    currentColor.classList.add('active_color');


    if (colorPurple.classList.contains('active_color')) {
      container.setAttribute('data-theme', '');
    }

    if (colorGreen.classList.contains('active_color')) {
      container.setAttribute('data-theme', 'green');
    }
    if (colorBlue.classList.contains('active_color')) {
      container.setAttribute('data-theme', 'blue');
    }
    if (colorPink.classList.contains('active_color')) {
      container.setAttribute('data-theme', 'pink');
    }
    if (colorOrange.classList.contains('active_color')) {
      container.setAttribute('data-theme', 'orange');
    }
  }
});