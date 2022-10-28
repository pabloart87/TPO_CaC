const API_URL = 'https://jsonplaceholder.typicode.com/comments';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState === 4 && this.status === 200) {
        // const data = JSON.parse(this.response);
        // console.log(data);
        // console.log(this.response);
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app");

        const tpl = data.map(comments => comments.body);
        HTMLResponse.innerHTML = tpl
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", API_URL);
xhr.send();