const container = document.querySelector('.container');

const div = document.createElement('div');
div.style.color = 'blue';
div.style.csstext = 'color: blue; background: white;';
div.textContent = "hey There!";
container.appendChild(div);

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "Some Text";
container.appendChild(content);

const para = document.createElement('p');
para.textContent = "hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

const box = document.createElement('div');
box.style.border = 'solid, black, 10px';
box.style.backgroundColor = 'pink';
container.appendChild(box);