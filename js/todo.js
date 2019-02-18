let lables = document.querySelectorAll('label');
let doneSection = document.querySelector(".done");
let undoneSection = document.querySelector(".undone");

for (let lable of lables) {
  lable.addEventListener('click', onClick)
}

function onClick() {
  if (event.target.checked === false) undoneSection.appendChild(event.target.parentElement)
  if (event.target.checked === true) doneSection.appendChild(event.target.parentElement)
}