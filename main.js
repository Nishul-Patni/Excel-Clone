let colNameContainer = document.getElementById('coloumn-name-container');
for(let i=1; i<=100; i++){
    let col = document.createElement('div');
    col.className = "column-name";
    let colName = genColName(i);
    col.innerHTML = colName;
    colNameContainer.appendChild(col);
}

let rowNameContainer = document.getElementById('row-name-container');
for(let i=1; i<=100; i++){
    let row = document.createElement('div');
    row.className = 'row-name';
    row.innerHTML = i;
    rowNameContainer.appendChild(row);
}

let inputCellContainer = document.getElementById('input-cell-container');
for(let i=1; i<=100; i++){
    let row = document.createElement('div');
    row.className = 'cell-row';
    for(let j=1; j<=100; j++){
        let cell = document.createElement('div');
        cell.className = 'input-cell';
        cell.contentEditable = 'true';
        cell.dataset.row = i;
        cell.dataset.col = j;
        row.appendChild(cell);
    }
    inputCellContainer.appendChild(row)
}

let alignIcons = document.getElementsByClassName('align-icons');
for(let i=0; i<3; i++){
    alignIcons[i].addEventListener('click', ()=>{
        for(let j=0; j<3; j++){
            if(alignIcons[j].classList.contains('selected'))
                alignIcons[j].classList.remove('selected');
        }
        alignIcons[i].classList.add('selected')
    })
}

let styleIcons = document.getElementsByClassName('style-icon');

for(let i=0; i<3; i++){
    styleIcons[i].addEventListener('click', ()=>{
        styleIcons[i].classList.toggle('selected')
    })
}