"use strict";

const id = sessionStorage.getItem("id");
leesUser();
leesTodos();
async function leesUser() {
    const response = await
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.ok) {
        const user = await response.json();
        verwerkUser(user);
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}
function verwerkUser(user) {
    document.getElementById("name").innerText = user.name;
    document.getElementById("city").innerText = user.address.city;
}
async function leesTodos() {
    const response = await
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    if (response.ok) {
        const todos = await response.json();
        verwerkTodos(todos);
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}
function verwerkTodos(todos) {
    const completedUl = document.getElementById("completed");
    const uncompletedUl = document.getElementById("uncompleted");
    for (const todo of todos) {
        if (todo.completed) {
            voegTodoToeAan(todo, completedUl);
        } else {
            voegTodoToeAan(todo, uncompletedUl);
        }
    }
}
function voegTodoToeAan(todo, ul) {
    const li = document.createElement("li");
    li.innerText = todo.title;
    ul.appendChild(li);
}