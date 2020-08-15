let container = document.querySelector("#container");
let reset = document.querySelector("#reset")
let newGrid = document.querySelector("#newGrid")
createDefault()

//Creates 16X16 grid and adds functionality.
function createDefault() {
    for (i = 0; i < 256; i++) {
        let gridContainer = document.createElement("div")
        gridContainer.classList.add("row")
        container.appendChild(gridContainer)
        gridContainer.addEventListener("mouseover", function(){draw(gridContainer)})
        reset.addEventListener("click", function(){resetBtn (gridContainer)})
    }
}


//Adds the draw class to the DIV's
function draw (elem) {
    elem.style.backgroundColor = `rgb(${getRandomInt(357)}, ${getRandomInt(357)}, ${getRandomInt(357)})`
}

//Resets the grid
function resetBtn (elem) {
    elem.style.removeProperty("background-Color");
}

//Generates a random integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function createNew (num) {
    let gridBox = document.querySelectorAll(".row")
    newSize = num * num
    for (i = 0; i < gridBox.length; i++) {
        gridBox[i].remove();
    }
    container.style.gridTemplateColumns = `repeat(${num}, 1fr`
    for (i = 0; i < newSize; i++) {
        let gridContainer = document.createElement("div")
        gridContainer.classList.add("row")
        container.appendChild(gridContainer)
        gridContainer.addEventListener("mouseover", function(){draw(gridContainer)})
        reset.addEventListener("click", function(){resetBtn (gridContainer)})
    }
}

newGrid.addEventListener("click", function (){createNew (prompt("Please select a Grid size. (Input 64 for a 64 x 64 Sketchpad)"))})