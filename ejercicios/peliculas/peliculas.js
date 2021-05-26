const peliculasTerror = document.getElementById('peliculasTerror'); //! TRAIGO EL DIV DE LAS CUATRO PELICULAS
peliculasTerror.style.display = `none` 

const btnTerror = document.getElementById('btnTerror') //!TRAIGO EL BOTON 
//!FUNCION Y EVENTO
btnTerror.addEventListener(`click`, () => {
    peliculasTerror.style.display = `inline` 
    peliculasAmor.style.display = `none`
    peliculasComedia.style.display = `none`
})

const peliculasAmor= document.getElementById('peliculasAmor');
peliculasAmor.style.display = `none`

const btnAmor = document.getElementById('btnAmor');
btnAmor.addEventListener(`click`, () => {
    peliculasAmor.style.display =`inline`
    peliculasTerror.style.display = `none`
    peliculasComedia.style.display = `none`
})

const peliculasComedia = document.getElementById('peliculasComedia');
peliculasComedia.style.display = `none`

const btnComedia = document.getElementById('btnComedia');
btnComedia.addEventListener(`click`, () => {
    peliculasComedia.style.display =`inline`
    peliculasTerror.style.display = `none`
    peliculasAmor.style.display = `none`
})

const btnTodas= document.getElementById('btnTodas');
btnTodas.addEventListener(`click`, () => {
    peliculasTerror.style.display = `inline`
    peliculasAmor.style.display =`inline`
    peliculasComedia.style.display =`inline`
})