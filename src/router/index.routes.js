import { pages } from "../controllers/index";

let content = document.getElementById('root')
const router = async (route) =>{      //Captura de Rutas
    content.innerHTML = '';
    switch(route){
        case '#/':{
            return content.appendChild(pages.home())
        }
            //return console.log('Home!')
        case '#/post':
            return content.appendChild(await pages.posts())
            //return console.log('Post!')
    /*    case '#/products':
            return console.log('Products!')
    */    default:
            return content.appendChild(pages.notFound())
    }
}

export {router}