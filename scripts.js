let container = document.querySelector("#container");
let reset = document.querySelector("#reset")

//Creates 16X16 grid and adds functionality.
function createDefault() {
    for (i = 0; i < 256; i++) {
        let gridBox = document.createElement("div")
        gridBox.classList.add("row")
        container.appendChild(gridBox)
        gridBox.addEventListener("mouseover", function(){draw(gridBox)})
        reset.addEventListener("click", function(){resetBtn (gridBox)})
    }
}

createDefault()

//Adds the draw class to the DIV's
function draw (elem) {
    elem.classList.add("draw")
}

//Resets the grid
function resetBtn (elem) {
    elem.classList.remove("draw")
}