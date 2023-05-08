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

//Event listener on button to ask user for grid size
const button = document.getElementById('select');
button.addEventListener('click', () =>{
    let gridSize = gridSelect();
    createGrid(gridSize,gridSize);
    
    //Event listener to change color on hoverover
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = randomColor();
    });
});

});



