"use strict";

leesUsers();

async function leesUsers() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");
    if (response.ok){
        const users = await response.json();
        createHyperlinks(users);
    } else {
        document.getElementById("usersFout").hidden = false;
    }
}

function createHyperlinks(users) {
    const usersUl = document.getElementById("users");
    for (const user of users) {
        const hyperlink = document.createElement("a");
        hyperlink.innerText = user.name;
        hyperlink.href = "#";
        hyperlink.dataset.id = user.id;
        hyperlink.onclick = function () {
            document.getElementById("titel").hidden = false;
            document.getElementById("user").innerText = user.name;
            toonAlbums(user);
        }
        const li = document.createElement("li");
        li.appendChild(hyperlink);
        usersUl.appendChild(li);
    }
}

async function toonAlbums (user) {
    const userId = user.id;
    const response = await 
    fetch (`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    if (response.ok) {
        const albums = await response.json();
        maakAlbumLijst(albums);
    } else {
        document.getElementById("albumsFout").hidden = false;
    }
}

function maakAlbumLijst(albums) {
    const albumsUl = document.getElementById("albums");
    deleteChild(albumsUl);
    for (const album of albums) {
        const li = document.createElement("li");
        li.innerText = album.title;
        albumsUl.appendChild(li);
    }
}

function deleteChild(ul) {
    while (ul.lastChild !== null) {
        ul.lastChild.remove();
    }
}