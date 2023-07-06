const grid = document.querySelector(".container");
const button = document.querySelector(".size");
const gridWidth = 480;
function drawGrid(gridSize = 16) {
    for (let i = 0; i < gridSize; ++i) {
        for (let j = 0; j < gridSize; ++j) {
            const node = document.createElement("div");
            node.classList.add("grid");
            node.style.width = `${gridWidth / gridSize}px`;
            node.addEventListener('mouseover', mouseEnter);

            grid.appendChild(node);
        }
    }
}

function deleteGrid() {
    const cells = document.querySelectorAll(".grid");
    cells.forEach(cell => grid.removeChild(cell));
}

function mouseEnter(event) {
    this.style.backgroundColor = 'black';
}

function buttonClicked(event) {
    let newSize = Number(prompt("What size do you want?"));

    if (newSize < 0 || newSize > 100) {
        alert("Grid size must be between 1 and 100.");
        return;
    }

    deleteGrid();
    drawGrid(newSize);
}

button.addEventListener('click', buttonClicked);

drawGrid();