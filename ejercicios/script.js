
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



//------------ ejercicio 2 
// Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

// const resultado=document.querySelector('p')
// const menosUno=document.querySelector('#menosUno')
// const masUno=document.querySelector('#masUno')
// const menosCinco=document.querySelector('#menosCinco')
// const masCinco=document.querySelector('#masCinco')
// const menosDiez=document.querySelector('#menosDiez')
// const masDiez=document.querySelector('#masDiez')



// menosUno.addEventListener('click', ()=>{
//     resultado.innerText=Number(resultado.innerText)-1
// })
// masUno.addEventListener('click', ()=>{
//     resultado.innerText=Number(resultado.innerText)+1
// })
// menosCinco.addEventListener('click', ()=>{
//     resultado.innerText=Number(resultado.innerText)-5
// })
// masCinco.addEventListener('click', ()=>{
//     resultado.innerText=Number(resultado.innerText)+5
// })
// menosDiez.addEventListener('click', ()=>{
//     resultado.innerText=Number(resultado.innerText)-10
// })
// masDiez.addEventListener('click', ()=>{
//     resultado.innerText=Number(resultado.innerText)+10
// })

// EJERCICIO 3 adivinanza

// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta incorrecta, se debe mostrar en el documento un texto que lo indique (por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color de fondo verde y los otros dos con un color de fondo rojo.
// VER CON GRASI
const boton1 = document.getElementById('correcto');
const boton2 = document.getElementsById('errado1');
const boton3 = document.getElementsById('errado2');


function verde () {
    boton1.style.backgroundColor ='green';
    const resp = document.getElementById('resultado');
    resp.innerText = "correcto";
}


boton1.addEventListener('click', verde);

// VERSION MARI

// const botonIncorrecta1 = document.getElementById('errada1')
// const botonIncorrecta2 = document.getElementById('errada2')
// const botonCorrecta = document.getElementById('correcta')
// const respuesta = document.getElementById('respuesta')


// errada1.addEventListener('click', () => {
//         botonIncorrecta1.classList.add('incorrecta');
//         botonIncorrecta2.classList.add('incorrecta');
//         botonCorrecta.classList.add('correcta');
//         respuesta.innerHTML='Le erraste!';
//         respuesta.style.fontSize='30px';
//         respuesta.style.color='red';
//         botonIncorrecta1.style.backgroundColor= 'red';
//     });
    
//     errada2.addEventListener('click', () => {
//         botonIncorrecta1.classList.add('incorrecta');
//         botonIncorrecta2.classList.add('incorrecta');
//         botonCorrecta.classList.add('correcta');
//         respuesta.innerHTML='Le erraste!';
//         respuesta.style.fontSize='30px';
//         respuesta.style.color='red';
//         botonIncorrecta2.style.backgroundColor= 'red';
//     });
    
//     botonCorrecta.addEventListener('click', () => {
//         botonCorrecta.classList.add('correcta');
//         respuesta.innerHTML='Correcto!';
//         respuesta.style.fontSize='30px';
//         respuesta.style.color='green';
//         botonCorrecta.style.backgroundColor= 'green';
//     });



// EJERCICIO 9 Imagenes

// Crear un documento html con al menos 4 imágenes chicas (100px de alto) y una imagen grande (500px de alto). Cuando se clickean las imágenes chicas, la imagen grande se tiene que actualizar con la misma que la imagen chica clickeada.

const chica = document.getElementsByClassName('chica');
const grande = document.getElementsByClassName('grande')[0];
const cambio = (event) => {
        const fotoChica=event.target;
        const srcChica = fotoChica.getAttribute('src');
        grande.setAttribute('src' , srcChica)
}
for(let i = 0; i < chica.length; i++) {

 chica[i].addEventListener('click', cambio)
}


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