import views from '../views/home.html'

export default () => {

    //Convertir string a un elemento HTML
    const divElement = document.createElement('div')
    divElement.classList = 'text-white'
    divElement.innerHTML = views;

    //document.getElementById('btnClick');
    const btnClick = divElement.querySelector('#btnClick')
    btnClick.addEventListener('click', ()=>{
        alert('click!!')
    })

    return divElement;
}