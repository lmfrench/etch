function createGrid(col,row){
    const sketchDiv = document.getElementById('sketch');

    //Create number of boxes defined by gridSize
    for (let index = 0; index < row; index++) {
        const row = document.createElement('div');
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
    
    let userSelect = prompt("How many rows?");
    
    validSelection = false;
    while (validSelection !==true){
        //check number was entered
        if (isNaN(userSelect)){
            userSelect = prompt("You must enter a number. How many rows?");
        }
        //check not higher than 100
        else if (userSelect >100){
            userSelect = prompt("You must enter less than 100. How many rows?");
        }
        
        else {
            validSelection = true;
        }
    }
    
        return userSelect;
}

//Event listener on button to ask user for grid size
const button = document.getElementById('select');
button.addEventListener('click', () =>{
    let gridSize = gridSelect();
    createGrid(gridSize,gridSize);
    
    //Event listener to change color on hoverover
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.cssText = "background-color: white";
    });
});

});



