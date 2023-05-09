function createGrid(col,row){
    const sketchDiv = document.getElementById('sketch');

    //Remove previous grid
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });

    //Create number of boxes defined by gridSize
    for (let index = 0; index < row; index++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketchDiv.appendChild(row);        
        for (let index = 0; index < col; index++) {
            const col = document.createElement('div');
            col.classList.add('box');
            row.appendChild(col);        
            
        }
    }
    
}

function gridSelect(){
    //remove previous grid
    document.querySelectorAll('.box').forEach(e => e.remove());
    
    let userSelect = prompt("How many rows? (Max 30)");
    
    validSelection = false;
    while (validSelection !==true){
        //check number was entered
        if (isNaN(userSelect)){
            userSelect = prompt("You must enter a number. How many rows?");
        }
        //check not higher than 30
        else if (userSelect >30 || userSelect <1 ){
            userSelect = prompt("You must enter a number between 0-30. How many rows?");
        }
        
        else {
            validSelection = true;
        }
    }
    
        return userSelect;
}

function randomColor(){
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}

function darkenColor(style, currentBright){

    //if the current brightness hasn't changed before, then reduce by 10%
    if (currentBright == ""){
        return("background-color: "+ style + "; filter: brightness(90%)");
    
    }

    //if current brightness has changed before, then keep reducing by 10%
    else{
        //select current brightness level, and reduce by 10
        const newBright =Number(currentBright.slice(11,13))-10;
        // if the new brightness level is higher than 0, change the brightness
        if (newBright >=0){
            return("background-color: "+ style + "; filter: brightness("+ newBright + "%)"); 
        }
        else {
            return("background-color: "+ style + "; filter: brightness(0%)");
        }
    }
}

//function to change colors on hover
function sketch(box){
    // If background color already changed, darken by 10%, otherwise select a random color
    if (box.classList.contains("boxRandom")){
        const style = box.style.backgroundColor;
        const currentBright = box.style.filter;
        box.style.cssText = darkenColor(style,currentBright);                                
    }
    else{
        box.style.backgroundColor = randomColor();
        //Add class so next time it knows to darken the color
         box.classList.add('boxRandom');
    }                  
        
}


// Start with a 10x10 grid
createGrid(10,10);

//Event listener to change colour of each box on hoverover
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        sketch(box);
        
        
    });
});

//Event listener on button so user can change grid size
const button = document.getElementById('select');
button.addEventListener('click', () =>{
    let gridSize = gridSelect();
    createGrid(gridSize,gridSize);
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            sketch(box);
        });
    });
});