import view from "../views/posts.html";

    //Peticion fetch a JSONplaceholder
const getPosts = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}

export default async ()=>{
    const divElement = document.createElement('div')    //Crear elemento
    divElement.innerHTML = view     //Pasar data html a ese elemento

    const postElement = divElement.querySelector('#posts')    //Capturar ul de posts
    let total = divElement.querySelector('#total') //Capturar el span de posts


    const posts = await getPosts()
    console.log(posts)
    total.innerHTML = posts.length;

    posts.forEach(post =>{  
        postElement.innerHTML += `
        <li class="list-group-item border-primary bg-dark text-white">
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        </li>
        `
    })
    

    return  divElement;
}