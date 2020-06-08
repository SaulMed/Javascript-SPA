import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'

import {router} from './router/index.routes'

    router(window.location.hash)    //Cargar inicialmente la pantalla de Home
window.addEventListener('hashchange', ()=>{
        router(window.location.hash)
    }
)