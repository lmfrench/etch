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

createGrid(16,16);
