let images = [
    'images/img0.jpg',
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
];
let i = 0;
let timer;
document.getElementById('slide').src = images[0];

function slider() {
    document.getElementById('slide').src = images[i];
    if(i < images.length - 1) {
      i++  ;
    } else {
           i = 0;
    }
    timer =   setTimeout("slider()",1000);
    return timer;
}
const stop = (() => clearTimeout(timer))

let img = document.getElementById('slide');
img = images[0];

function next() {
  i++
  if( i === images.length) {
i = 0;
  }
  document.getElementById('slide').src = images[i];
}

function prev() {
  i--;
  if( i < 0) {
    i = images.length - 1;
  }
  document.getElementById('slide').src = images[i];
}







let nodes = document.getElementsByTagName('li');
for( let i = 0; i < nodes.length; i++) {
  let img = document.createElement('img');
  img.src = 'images/del.png';
  img.className = "remove";
  let name = document.createTextNode('img');
  img.appendChild(name);
  nodes[i].appendChild(img);
}


let remove = document.getElementsByClassName("remove");

for( let i = 0; i < nodes.length; i++) {
remove[i].onclick = function () {
  let div = this.parentElement;
  div.style.display = "none"
}
}

window.onload = function () {
  let todoList = [];
  document.getElementById('add').onclick = function () {
    let a = document.getElementById('in').value;
    let temp = {};
    temp.todo = a;
    temp.check = false;
    let i = todoList.length;
    todoList[i] = temp;
out()
  }
  function out() {
    let out = '';
    for(let key in todoList) {
      out +=todoList[key].todo + '<br>';
    }
    document.getElementById('out').innerHTML = out
  }
}

