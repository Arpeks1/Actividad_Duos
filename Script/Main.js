import { DB } from "./DB.js"

function traerdatos(datos) {

    let contenedor = document.querySelector(".contenedor")
    contenedor.innerHTML = "";

    datos.forEach(i => {
        let contenedoraux = document.createElement("div")
        contenedoraux.className = "tarjetas"

        contenedoraux.innerHTML =
        `
            <h1>${i.Nombre}</h1>
            <h2>$${i.Precio}</h2>
            <h3>cantidad: ${i.Stock}</h3>
            <p>${i.Descripcion}</p>
            <img src="${i.Imagen}" alt="img">
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
        contenedor.innerHTML = "<p> producto no encontrado </p>"
    }
})