
const btnPink = document.getElementById('btnPink')
btnPink.style = 'background-color:hotpink; width:100px'
const btnGreen = document.getElementById('btnGreen')
btnGreen.style = 'background-color:green; width:100px'
const btnYellow = document.getElementById('btnYellow')
btnYellow.style = 'background-color:yellow; width:100px'

const caja = document.getElementById('container')
const button = document.getElementsByTagName('button')
// btnPink.addEventListener('click',() => {
//     caja.style.backgroundColor ='hotpink'
// })
// btnGreen.addEventListener('click', () => {
//     caja.style.backgroundColor ='green'
// })
// btnYellow.addEventListener('click', () => {
//     caja.style.backgroundColor ='yellow'
// })

// ####### RESOLUCION CON FOR ########################

const bgColor = (event) =>{
    const button = event.target;
    const fondo = button.getAttribute('data-color');
    caja.style.backgroundColor = fondo;
}

for(let i = 0; i<button.length; i++) {
    button[i].addEventListener('click',bgColor)
}


// Marian #############

// const botonRojo = document.getElementById('boton-red')
// botonRojo.style ='background-color: red; width: 100px'
// const botonAmarillo = document.getElementById('boton-yellow')
// botonAmarillo.style ='background-color: yellow; width: 100px'
// const botonVerde = document.getElementById('boton-green')
// botonVerde.style ='background-color: green; width: 100px'
// const botonAzul = document.getElementById('boton-blue')
// botonAzul.style ='background-color: blue; width: 100px'
// const botonRosa = document.getElementById('boton-pink')
// botonRosa.style ='background-color: pink; width: 100px'
// const botonNaranja = document.getElementById('boton-orange')
// botonNaranja.style ='background-color: orange; width: 100px'
// const divColor=document.getElementById('div-color')
// divColor.style = "height: 600px; width: 600px; border: 1px grey solid; margin-bottom: 20px";

// botonRojo.addEventListener('click', () =>{
//     divColor.style.backgroundColor='red'
// })
// botonAmarillo.addEventListener('click', () =>{
//     divColor.style.backgroundColor='yellow'
// })
// botonVerde.addEventListener('click', () =>{
//     divColor.style.backgroundColor='green'
// })
// botonAzul.addEventListener('click', () =>{
//     divColor.style.backgroundColor='blue'
// })
// botonRosa.addEventListener('click', () =>{
//     divColor.style.backgroundColor='pink'
// })
// botonNaranja.addEventListener('click', () =>{
//     divColor.style.backgroundColor='orange'
// })