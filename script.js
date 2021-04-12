function createAndAppendGridTo(appendTo, numRowsAndColumns){    //ie(gridContainer,50) will make 50 rows of 50 blocks and append to element gridContainer
    for(let i=0;i<numRowsAndColumns;i++){
        let gridRow = document.createElement("div");

        for(let j=0;j<numRowsAndColumns;j++){
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "grid-square");
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


function promptChangeResolution(){
    let usersInputGridSize = prompt("Enter a number");      //prompt user for a number (typeof string)
        //DOUBLE CHECK NUMBER IS WITHIN RANGE 1-100 BEFORE PROCEEDING, IF IT ISN'T PROMPT FOR ANOTHER NUM
    usersInputGridSize = parseInt(usersInputGridSize);      //convert string to number
    gridContainer.innerHTML="";                             //empty out grid-container of its current grid
    createAndAppendGridTo(gridContainer,usersInputGridSize);    //call upon createGrid with new number
}

function switchToEraseMode(){   //change mouseover event so that it changes black tiles to white

}

function switchToSketchMode(){          //change mouseover event back to changing tiles to black

}

function clearGrid(){                   //clear grid (make all tiles white) but keep grid size same

}
let gridContainer = document.querySelector(".grid-container");
createAndAppendGridTo(gridContainer,16);            //default of 16x16 grid

let changeResolutionButton = document.querySelector(".change-resolution");
changeResolutionButton.addEventListener("click",promptChangeResolution);

let eraseModeButton = document.querySelector(".erase-mode");
eraseModeButton.addEventListener("click", switchToEraseMode);

let sketchModeButton = document.querySelector(".sketch-mode");
eraseModeButton.addEventListener("click",switchToSketchMode);

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