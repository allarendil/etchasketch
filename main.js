const container = document.querySelector('.container');

const div = document.createElement('div');
div.style.color = 'blue';
div.style.csstext = 'color: blue; background: white;';
div.style.border = 'pink dotted 10px';
div.textContent = "hey There!";
container.appendChild(div);

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Some Text";
content.style.border = 'black solid 5px';
container.appendChild(content);

const para = document.createElement('p');
para.textContent = "hey I'm red!";
para.style.border = 'red solid';
container.appendChild(para);

const box = document.createElement('div');
box.style.border = 'solid black 5px';
box.textContent = 'blank'
box.style.backgroundColor = 'pink';
container.appendChild(box);