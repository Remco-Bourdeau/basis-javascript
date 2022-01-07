"use strict";

leesUsers();
async function leesUsers() {
    const response = await
        fetch("https://reqres.in/api/users?page=1&per_page=10");
    if (response.ok) {
        const users = await response.json();
        verwerkUsers(users);
    } else {
        document.getElementById("nietGevonden").hidden = false;
    }
}
function verwerkUsers(users) {
    const usersUl = document.getElementById("users");
    let index = 0;
    for (const user of users.data) {
        const hyperlink = document.createElement("a");
        hyperlink.innerText = `${user.first_name} ${user.last_name}`;
        hyperlink.href = "#";
        hyperlink.dataset.index = index++;
        hyperlink.onclick = function () {
            const user = users.data[this.dataset.index];
            document.getElementById("user").hidden = false;
            document.getElementById("nummer").innerText = user.id;
            document.getElementById("voornaam").innerText = user.first_name;
            document.getElementById("familienaam").innerText = user.last_name;
            document.getElementById("emailAdres").innerText = user.email;
            document.getElementById("avatar").src = user.avatar;
        };
        const li = document.createElement("li");
        li.appendChild(hyperlink);
        usersUl.appendChild(li);
    }
}