// jaskeerat Randhawa
// 02/25/2024



console.log('ajax_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';


function fetchData(url) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function (data, status, xhr) {
            console.log(`Data from ${url}: `, data);
            updateImage(url, data);
        }
    });
}

fetchData(url_posts);
fetchData(url_comments);
fetchData(url_albums);
fetchData(url_photos);
fetchData(url_todos);
fetchData(url_users);


function updateImage(url, data) {
    let imageContainer;

    if (url.includes('photos')) {
        imageContainer = document.getElementById('images');
    } else {
        const id = url.split('/').pop();
        imageContainer = document.getElementById(id);
    }

    const image = imageContainer.querySelector('img');
    const figcaption = imageContainer.querySelector('figcaption');

    image.src = data[0].url;
    figcaption.textContent = data[0].title;
}
