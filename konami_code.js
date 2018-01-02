const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDown);
}

let index = 0;

function onKeyDown(e) {
  const key = parseInt(e.which || e.detail);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("You've cracked the code!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
