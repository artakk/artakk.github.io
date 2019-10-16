const xCount = 20;
const yCount = 10;
let curX = 0;
let curY = 4;
const mainContainer = document.getElementById('tetris-container');
const itemArr = [
   [
       [0, 1, 1],
       [1, 1, 0]
   ],
   [
       [1, 1, 1],
       [0, 1, 0]
   ]
];
function getNextItem (){
   itemArr[Math.floor(Math.random()*2)]
}
let currentItem = itemArr[Math.floor(Math.random()*2)];
function createBoard() {
   for(let i = 0; i < xCount; i++){
       for (let j = 0; j < yCount; j++){
           createBox(i, j);
       }
   }
}
function createBox(x, y) {
   const box = document.createElement('div');
   box.classList.add('box');
   box.dataset.x = x;
   box.dataset.y = y;
   mainContainer.appendChild(box);
}
createBoard();
 setInterval(moveDown, 1000);
function moveDown() {
   if(!canMoveDown()){
       return;
   }
   curX++;
   clearContainer();
   drawItem();
//    const currentX = currentItem.dataset.x;
//    const currentY = currentItem.dataset.y;
//    currentItem.classList.toggle('active-box');
//    const nextBox = document.querySelector([data-x="${+currentX+1}"][data-y="${currentY}"]);
//    nextBox.classList.toggle('active-box');
//    currentItem = nextBox;
}
document.body.addEventListener('keydown', handleKeyDown);
function handleKeyDown(e){
   switch (e.which) {
       case 37:
            moveLeft();
           break;
       case 38:
            rotate();
           break;
       case 39:
            moveRight();
           break;
       case 40:
           moveDown();
           break;
       default:
           break;
   }
}
function canMoveDown(){
   if(+currentItem.dataset.x >= xCount-1){
       return false;
   } else {
       return true;
   }
}
function drawItem() {
   for(let i = 0; i < currentItem.length; i++){
       for(let j = 0; j < currentItem[i].length; j++){
           if(currentItem[i][j]){
               const box = document.querySelector([data-x="${+curX+i}"][data-y="${curY+j}"]);
               box.classList.toggle('active-box')
           }
       }
   }
}
function clearContainer() {
   const allBoxes = document.getElementsByClassName('box');
   Array.from(allBoxes).map(b => b.classList.remove('active-box'));
}