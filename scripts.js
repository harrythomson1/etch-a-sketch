let container = document.querySelector("#container");
let reset = document.querySelector("#reset")
let newGrid = document.querySelector("#newGrid")
let colorBtn = document.querySelector("#colorBtn")
let gretBtn = document.querySelector("#greyBtn")
let change = false
let beenShaked = false
createDefault()

//Creates 16X16 grid and adds functionality.
function createDefault() {
    for (i = 0; i < 256; i++) {
        let gridContainer = document.createElement("div")
        gridContainer.classList.add("row")
        container.appendChild(gridContainer)
        gridContainer.addEventListener("mouseover", function(){drawColor(gridContainer, change)})
        reset.addEventListener("click", function(){resetBtn (gridContainer)})
    }
}


//Creates a rainbow effect on the divs
function drawColor (elem, color) {
    if (color) {
    elem.style.backgroundColor = `rgb(${getRandomInt(357)}, ${getRandomInt(357)}, ${getRandomInt(357)})`
    }
    else {
        elem.style.backgroundColor = "grey"
    }
}

function draw (elem) {
    elem.style.backgroundColor = "grey"
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
        gridContainer.addEventListener("mouseover", function(){drawColor(gridContainer, change)})
        reset.addEventListener("click", function(){resetBtn (gridContainer)})
    }
}

newGrid.addEventListener("click", function (){createNew (prompt("Please select a Grid size. (Input 64 for a 64 x 64 Grid)"))})

//Switches from grey to color.
colorBtn.addEventListener("click",function (){change = true})

gretBtn.addEventListener("click", function (){change = false})