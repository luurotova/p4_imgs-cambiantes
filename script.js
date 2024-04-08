/*1. pulso el boton
  2. Cambia la foto*/

//1. capturo los elementos que necesito para actuar
const btnFlechas = document.querySelector(‘#misFlechas’)
console.log(btnFlechas);

//foto voldemort
const imgMerluzo = document.querySelector(‘#voldemort_merluzo’)
console.log(imgMerluzo)

//2. añadir EVENTO click al boton flechas
btnFlechas.addEventListener(‘click’, cambiarFoto)

//3. Definir lo que va a pasar cuando haga click
function cambiarFoto() {

    //obtener src de la img
    const ruta = imgMerluzo.getAttribute(‘src’);

    //log en consola
    console.log(ruta);

    //pregunta: si la ruta se cumple haz X
    if (imgMerluzo.src == "img/voldemort-triste.jpg") {

        imgMerluzo.src = "img/varitas_voldemort.jpg";
    } else { //si no

        //haz Z
        imgMerluzo.src = "img/voldemort-triste.jpg"
    }
    
}