var option, key, keyCode;
var rave = false;

async function setKey() {
  let dropdown = document.getElementById("dropdown");
  let _option = dropdown.options[dropdown.selectedIndex].value;
  option = _option;
  let _key = document.getElementById("input").value;
  document.getElementById("input").value = "";
  key = _key;
  let _keyCode = _key.charCodeAt(0)-32;
  keyCode = _keyCode;
  document.getElementById(key).value = _option;

  window.addEventListener("keydown", function(e) {
    if (e.keyCode == _keyCode) {
      document.getElementById(_option).play();
      let hslColor = rave ? Math.random() * 360 : 120;
      document.getElementById(_key).style.backgroundColor = `hsl(${hslColor}, 100%, 50%)`;

      if (rave) {
        document.body.style.backgroundColor = `hsl(${hslColor}, 100%, 50%)`;
        let decay = document.getElementById(_option).duration * 1000;
        for (let lightness = 50; lightness <= 100; lightness++) {
          decay += 3;
          (function (_lightness, _decay) {
            setTimeout(function() {
              document.body.style.backgroundColor = `hsl(${hslColor}, 100%, ${_lightness}%)`;
            }, _decay);
          })(lightness, decay);
        }
      }

      let decay = document.getElementById(_option).duration * 1000;
      for (let lightness = 50; lightness >= 0; lightness--) {
        decay += 3;
        (function (_lightness, _decay) {
          setTimeout(function() {
            document.getElementById(_key).style.backgroundColor = `hsl(${hslColor}, 100%, ${_lightness}%)`;
          }, _decay);
        })(lightness, decay);
      }

    }
  });
}

function screenKey(button) {
  if (button.value.length > 1) {
    document.getElementById(button.value).play();
    let hslColor = rave ? Math.random() * 360 : 120;
    button.style.backgroundColor = `hsl(${hslColor}, 100%, 50%)`;

    if (rave) {
      let decay = document.getElementById(button.value).duration * 1000;
      document.body.style.backgroundColor = `hsl(${hslColor}, 100%, 50%)`;
      for (let lightness = 50; lightness <= 100; lightness++) {
        decay += 3;
        (function (_lightness, _decay) {
          setTimeout(function() {
            document.body.style.backgroundColor = `hsl(${hslColor}, 100%, ${_lightness}%)`;
          }, _decay);
        })(lightness, decay);
      }
    }
    let decay = document.getElementById(button.value).duration * 1000;
    for (let lightness = 50; lightness >= 0; lightness--) {
      decay += 3;
      (function (_lightness, _decay) {
        setTimeout(function() {
          button.style.backgroundColor = `hsl(${hslColor}, 100%, ${_lightness}%)`;
        }, _decay);
      })(lightness, decay);
    }
  } else {
    return;
  }
}

function raveMode() {
  raveButton = document.getElementById("rave");
  rave = rave ? false : true;
  if (rave) {
    raveButton.innerHTML = "Rave Mode Off";
  } else {
    raveButton.innerHTML = "Rave Mode On";
  }
}
