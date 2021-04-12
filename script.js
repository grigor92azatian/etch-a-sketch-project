let gridSize = 16;          //default grid size, will change upon users input

function createAndAppendGridTo(appendTo, numRowsAndColumns){    //ie(gridContainer,50) will make 50 rows of 50 blocks and append to element gridContainer
    for(let i=0;i<numRowsAndColumns;i++){
        let gridRow = document.createElement("div");

        for(let j=0;j<numRowsAndColumns;j++){
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "tile-row-"+i+"-col-"+j);
            gridSquare.style.cssText = "flex:auto;" +
                                       "border:1px solid black;";
            gridSquare.addEventListener("mouseover",(e)=>e.target.style.backgroundColor="black");
            gridRow.appendChild(gridSquare);
        }

        gridRow.style.cssText = "flex:auto;" + 
                                "display: flex";
        appendTo.appendChild(gridRow);
    }
}

function promptUserForNum(){    //ask user for number 1-100, if less/more/NaN, display error and reprompt user
        let usersInputGridSize = parseInt(prompt("Enter a number from 1-100"));
        while (usersInputGridSize<1||usersInputGridSize>100||isNaN(usersInputGridSize)){
            usersInputGridSize = parseInt(prompt("ERROR: Number out of range, please enter a number from 1-100"));
        }
        return usersInputGridSize;
}

function changeResolution(){
    gridSize = promptUserForNum();
    gridContainer.innerHTML="";                             //empty out grid-container of its current grid
    createAndAppendGridTo(gridContainer,gridSize);    //call upon createGrid with new number
}

function switchToEraseMode(){   //change mouseover event so that it changes black tiles to white

}

function switchToSketchMode(){          //change mouseover event back to changing tiles to black

}

function clearGrid(){                   //clear grid (make all tiles white) but keep grid size same
    gridContainer.innerHTML="";                             //empty out grid-container of its current grid
    createAndAppendGridTo(gridContainer,gridSize);
}
let gridContainer = document.querySelector(".grid-container");
createAndAppendGridTo(gridContainer,gridSize);            //default of 16x16 grid

let changeResolutionButton = document.querySelector(".change-resolution");
changeResolutionButton.addEventListener("click",changeResolution);
/*
let eraseModeButton = document.querySelector(".erase-mode");
eraseModeButton.addEventListener("click", switchToEraseMode);

let sketchModeButton = document.querySelector(".sketch-mode");
eraseModeButton.addEventListener("click",switchToSketchMode);
*/
let clearGridButton = document.querySelector(".clear-grid");
clearGridButton.addEventListener("click", clearGrid);

/*

Static: What is NOT going to change, what can we hardcode into the html
    1. Title
    2. Button/Input box to change resolution of sketching area
    3. Button to clear the sketch area?

Dynamic: What is going to change dynamically based on the user's input? This needs to be coded by js
    1. resolution of sketch area
    2. 
*/

