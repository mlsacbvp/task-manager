// let form = document.getElementsByClassName("adder");
// let input = document.getElementsByClassName("input");
// let posts = document.getElementsByClassName("container");

// form.addEventListener("click", () => {
//     acceptData();
    
// });

// let data = {};

// let acceptData = () => {
//   data["text"] = input.value;
//   console.log(data);
//   createPost();
// };

// let createPost = () => {
//   posts.innerHTML += 
//   `<ul class="containerr">
//   <li class="new-task" draggable="true">${data.text}  </li>
// </ul>
//   `;
//   input.value = "";
// };

import { doingTasks } from "../models/doingTasks.js";
import { doneTasks } from "../models/doneTasks.js";
import { pendingTasks } from "../models/pendingTasks.js";

export function addItems(){
    const newItem = document.querySelector('.input').value;
    if (newItem != '') {
        document.querySelector('.input').value = '';
        const div = document.createElement('div');
        const attr = document.createAttribute('draggable');
        const container = document.querySelector('.containerr');
        div.className = 'new-task';
        attr.value = 'true';
        div.setAttributeNode(attr);
        div.appendChild(document.createTextNode(newItem));
        doingTasks.push(newItem);
        showItems();
    }
}

export function refreshTasks(){
    const containers = document.querySelectorAll('.containerr');
    containers.forEach(container => {
        container.innerHTML = '';
    });
}

export function showItems(){
    const containers = document.querySelectorAll('.containerr');
    refreshTasks();
    doingTasks.map(task => {
        const div = document.createElement('div');
        var attr = document.createAttribute('draggable');
        div.className = 'new-task';
        attr.value = 'true';
        div.setAttributeNode(attr);
        div.appendChild(document.createTextNode(task));
        containers[0].appendChild(div);
    });

    doneTasks.map(task => {
        const div = document.createElement('div');
        var attr = document.createAttribute('draggable');
        div.className = 'new-task';
        attr.value = 'true';
        div.setAttributeNode(attr);
        div.appendChild(document.createTextNode(task));
        containers[1].appendChild(div);
    });

    pendingTasks.map(task => {
        const div = document.createElement('div');
        var attr = document.createAttribute('draggable')
        div.className = 'new-task';
        attr.value = 'true';
        div.setAttributeNode(attr);
        div.appendChild(document.createTextNode(task));
        containers[2].appendChild(div);
    });
    dragTasks();
}

export function dragTasks(){
    const draggableTasks = document.querySelectorAll('.new-task');
    const containers = document.querySelectorAll('.containerr');
    
    draggableTasks.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });
    
    containers.forEach(container => {
        container.addEventListener('dragover', () => {
            const draggedElement = document.querySelector('.dragging');
            container.appendChild(draggedElement);
        });
    });
}