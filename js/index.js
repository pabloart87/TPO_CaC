function traer() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            console.log(res.results[0].email)
            contenido.innerHTML= `
                <img src="${res.results[0].picture.large}
                    " width="100px"
                    class="img-fluid rounded-circle">
                <p>Nombre: ${res.results[0].name.first}</p>
                <p>Mail: ${res.results[0].email}</p>`
     })
    }






// const API_URL = 'https://jsonplaceholder.typicode.com/comments';

// const xhr = new XMLHttpRequest();

// function onRequestHandler(){
//     if(this.readyState === 4 && this.status === 200) {
//         // const data = JSON.parse(this.response);
//         // console.log(data);
//         // console.log(this.response);
//         const data = JSON.parse(this.response);
//         const HTMLResponse = document.querySelector("#app");

//         const tpl = data.map(comments => comments.body);
//         HTMLResponse.innerHTML = tpl
//     }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", API_URL);
// xhr.send();