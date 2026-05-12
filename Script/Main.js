import { DB } from "./DB.js"

function traerdatos(datos) {

    let contenedor = document.querySelector(".contenedor")
    contenedor.innerHTML = "";

    datos.forEach(i => {
        let contenedoraux = document.createElement("div")
        contenedoraux.className = "tarjetas"

        contenedoraux.innerHTML =
        `
            <img src="${i.Imagen}" alt="img funko">
            <h1 class="Texto">${i.Nombre}</h1>
            <h2 class="Texto">$${i.Precio}</h2>
            <h3 class="Texto">cantidad: ${i.Stock}</h3>
            <p  class="Texto">${i.Descripcion}</p>
        `
        contenedor.appendChild(contenedoraux)
    });
}

traerdatos(DB)

let filtro = document.querySelector("#filtro")
let contenedor = document.querySelector(".contenedor")


filtro.addEventListener("keyup", function () {

    let filtros = DB.filter(i => i.Nombre.toLowerCase().includes(filtro.value.toLowerCase()))
    if (filtros.length > 0) {
        traerdatos(filtros)
    }
    else {
        contenedor.innerHTML = "<h1> producto no encontrado </h1>"
    }
})