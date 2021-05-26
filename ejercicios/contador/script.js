
// const boton = document.getElementById('boton');
//    //   const saludar = () => {console.log("hola") }
//       boton.addEventListener("click",()=>{
//         console.log("hola,funcion anonima");
//       })

// contador ejercicio 2......

//ejercicio 1 playlist Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista desordenada
//1 resuelto de una forma.....
// const cancion1 = prompt ("ingrese una cancion");
// const lista = document.querySelector('ul');
// lista.innerHTML = `<li> ${cancion1}</li>`;

// ejercicio 1 resuelto de otra forma.....
// const lista = document.querySelector('ul');
// let items = "";
// for(let i=0; i<5; i++) {

//   const cancion=prompt('Ingrese una canción');
//   items+=`<li> ${cancion} </li>`;
// }

// lista.innerHTML=items;



//------------ CONTADOR
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

const resultado=document.querySelector('p')
const menosUno=document.querySelector('#menosUno')
const masUno=document.querySelector('#masUno')
const menosCinco=document.querySelector('#menosCinco')
const masCinco=document.querySelector('#masCinco')
const menosDiez=document.querySelector('#menosDiez')
const masDiez=document.querySelector('#masDiez')



menosUno.addEventListener('click', ()=>{
resultado.innerText=Number(resultado.innerText)-1
})
masUno.addEventListener('click', ()=>{
resultado.innerText=Number(resultado.innerText)+1
})
menosCinco.addEventListener('click', ()=>{
resultado.innerText=Number(resultado.innerText)-5
})
masCinco.addEventListener('click', ()=>{
resultado.innerText=Number(resultado.innerText)+5
})
menosDiez.addEventListener('click', ()=>{
resultado.innerText=Number(resultado.innerText)-10
})
masDiez.addEventListener('click', ()=>{
resultado.innerText=Number(resultado.innerText)+10
})




// EJERCICIO 9 Imagenes

// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

// const chica = document.getElementsByClassName('chica');
// const grande = document.getElementsByClassName('grande')[0];
// const cambio = (event) => {
//         const fotoChica=event.target;
//         const srcChica = fotoChica.getAttribute('src');
//         grande.setAttribute('src' , srcChica)
// }
// for(let i = 0; i < chica.length; i++) {

//  chica[i].addEventListener('click', cambio)
// }


// EJERCICIO 10 IMAGENES 2 

// const chica = document.getElementsByClassName('chica');
// const grande = document.getElementsByClassName('grande')[0];
// const cambio = (event) => {
//         const fotoChica=event.target;
//         const srcChica = fotoChica.getAttribute('src');
//         grande.setAttribute('src' , srcChica)
// }
// for(let i = 0; i < chica.length; i++) {

//  chica[i].addEventListener('mouseover', cambio)
// }


