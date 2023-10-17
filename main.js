const container = document.querySelector('.container');

function createGrid(num) {
    for (let rows = 0; rows < num; rows++) {
        for (let columns = 0; columns < num; columns++) {
            let grid = document.createElement('div');
            container.appendChild(grid).className = 'grid';
        };
    };
};

createGrid(16);

const grids = document.querySelectorAll('.grid')
 
    grids.forEach((div) => {
    div.addEventListener(
    'mouseover', function () {
        div.style.backgroundColor = 'green';
    });
});


