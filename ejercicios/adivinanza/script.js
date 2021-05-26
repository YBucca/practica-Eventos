
//########## RESUELTO 1 NO FUNCIONA  ########

// const boton1 = document.getElementById('correcto');
// const boton2 = document.getElementById('errado1');
// const boton3 = document.getElementById('errado2');


// const verde = (event) =>{
//     if(event==="boton1"){
//     boton1.style.backgroundColor ='green';
//     const resp = document.querySelector('h2');
//     resp.innerText = "correcto";
//     }else if (event===boton2){
//     boton2.style.backgroundColor ='red';
//     const resp = document.querySelector('h2');
//     resp.innerText = "Incorrecto";
//     }else if (event===boton3){
//         boton3.style.backgroundColor ='red';
//         const resp = document.querySelector('h2');
//         resp.innerText = "Incorrecto";
//         }
// }


// boton1.addEventListener('click', verde);
// boton2.addEventListener('click', verde);
// boton3.addEventListener('click', verde);


//########## RESUELTO 2  ########

const btnIncorrecta1 = document.getElementById('errada1')
const btnIncorrecta2 = document.getElementById('errada2')
const btnCorrecta = document.getElementById('correcta')
const respuesta = document.getElementById('respuesta')


btnIncorrecta1.addEventListener('click', () => {
        respuesta.innerHTML='¡Incorrecto!';
        respuesta.style.color='red';
        btnIncorrecta1.style.backgroundColor= 'red';
    });
    
    btnIncorrecta2.addEventListener('click', () => {
        respuesta.innerHTML='¡Incorrecto!';
        respuesta.style.color='red';
        btnIncorrecta2.style.backgroundColor= 'red';
    });
    
    btnCorrecta.addEventListener('click', () => {
        respuesta.innerHTML='¡Correcto!';
        respuesta.style.color='green';
        btnCorrecta.style.backgroundColor= 'green';
    });
