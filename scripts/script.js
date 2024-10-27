var userInput = parseInt(prompt("Enter a number x:"));

var tree = document.createElement("div");
tree.classList.add("container");
document.body.appendChild(tree);

function formTree(spaces, width) {
  var row = document.createElement("div");

  for (let i = 0; i < width; i++) {
    var character = document.createElement("span");
    if (i === 0 || i === width - 1) {
      character.textContent = "*";
      character.classList.add("star");
    } else {
      character.textContent = "|";
      character.classList.add("dash");
    }
    row.appendChild(character);
  }

  tree.appendChild(row);
}

for (let i = 0; i < userInput; i++) {
  formTree(userInput - i - 1, i * 2 + 1);
}
