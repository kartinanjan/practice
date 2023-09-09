//Create a xmlhttpRequest object.
const xhr = new XMLHttpRequest();
//Open the request
xhr.open('get', 'https://jsonplaceholder.typicode.com/posts');
// Setting a response type.
xhr.responseType = 'json';

//Once data is loaded this onload will execute
xhr.onload = function () {
    const listOfPosts = xhr.response;
    console.log(listOfPosts);
}
xhr.send();