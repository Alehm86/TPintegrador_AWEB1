/* import { productos } from "./classProductos";*/


const productos = [
    {
        id:"note-01",
        marca: "Asus",
        espec: "CPU: Intel Ci3 - 8Gb DDR4 - SSD500Gb",
        imagen: "./img/note/note1.webp",
        categoria:{
            nombre: "Notebooks",
            id: "note",
        },
        precio: 600000
    },
    {
        id:"note-02",
        marca: "Dell",
        espec: "CPU: Amd Ryzen3 - 8Gb DDR4 - SSD256Gb",
        imagen: "./img/note/note2.webp",
        categoria:{
            nombre: "Notebooks",
            id: "note",
        },
        precio: 430000
    },
    {
        id:"note-03",
        marca: "Asus",
        espec: "CPU: Intel Celeron N4120 - 4Gb DDR4 - SSD256Gb",
        imagen: "./img/note/note3.webp",
        categoria:{
            nombre: "Notebooks",
            id: "note",
        },
        precio: 290000
    },
    {
        id:"note-04",
        marca: "Lenovo",
        espec: "CPU: Intel Ci7 - 8Gb DDR4 - SSD256Gb + HDD1TB",
        imagen: "./img/note/note4.webp",
        categoria:{
            nombre: "Notebooks",
            id: "note",
        },
        precio: 980000
    },
    {
        id:"note-05",
        marca: "Asus",
        espec: "CPU: Intel Ci7 - 8Gb DDR4 - SSD256Gb",
        imagen: "./img/note/note5.webp",
        categoria:{
            nombre: "Notebooks",
            id: "note",
        },
        precio: 850000
    },
    {
        id:"comp-01",
        marca: "Kingston",
        espec: "Tamaño: 120Gb",
        imagen: "./img/comp/comp1.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 20000
    },
    {
        id:"comp-02",
        marca: "Samsung",
        espec: "Tamaño: 250Gb",
        imagen: "./img/comp/comp2.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 130000
    },
    {
        id:"comp-03",
        marca: "Intel",
        espec: "Ci7-12700 - 12 nucleos - 4.9Ghz - S1700 - 12°gen",
        imagen: "./img/comp/comp3.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 450000
    },
    {
        id:"comp-04",
        marca: "Intel",
        espec: "Ci5-12400F - 6 nucleos - 4.4Ghz - S1700 - 12°gen",
        imagen: "./img/comp/comp4.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 250000
    },
    {
        id:"comp-05",
        marca: "Intel",
        espec: "Ci3-12100F - 4 nucleos - 4.3Ghz - S1700 - 12°gen",
        imagen: "./img/comp/comp5.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 160000
    },
    {
        id:"comp-06",
        marca: "AMD",
        espec: "Ryzen 7-5800X - 8 nucleos - 4.7Ghz - AM4 - 5°Gen",
        imagen: "./img/comp/comp6.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 385000
    },
    {
        id:"comp-07",
        marca: "AMD",
        espec: "Ryzen 5-5600 - 6 nucleos - 4.7Ghz - AM4 - 5°Gen",
        imagen: "./img/comp/comp7.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 290000
    },
    {
        id:"comp-08",
        marca: "Kingston",
        espec: "Tamaño: 8Gb - 3200MHz",
        imagen: "./img/comp/comp8.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 24000
    },
    {
        id:"comp-09",
        marca: "Adata",
        espec: "Tamaño: 16Gb - 3200MHz",
        imagen: "./img/comp/comp9.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 40000
    },
    {
        id:"comp-10",
        marca: "Gigabyte",
        espec: "B450M DS3H V2 - AM4",
        imagen: "./img/comp/comp10.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 185000
    },
    {
        id:"comp-11",
        marca: "Dell",
        espec: "Pantalla de 27 pulgadas FHD IPS",
        imagen: "./img/comp/comp11.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 350000
    },
    {
        id:"comp-12",
        marca: "Asus",
        espec: "Pantalla de 27 pulgadas FHD IPS",
        imagen: "./img/comp/comp12.webp",
        categoria:{
            nombre: "Componentes",
            id: "comp",
        },
        precio: 200000
    },
    {
        id:"cel-01",
        marca: "Samsung",
        espec: "Modelo: S23 - Almacenamiento: 256Gb - RAM: 8Gb",
        imagen: "./img/cel/cel1.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 1250000
    },
    {
        id:"cel-02",
        marca: "Samsung",
        espec: "Modelo: A52s - Almacenamiento: 128Gb - RAM: 6Gb",
        imagen: "./img/cel/cel2.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 420000
    },
    {
        id:"cel-03",
        marca: "Samsung",
        espec: "Modelo: A14 - Almacenamiento: 64Gb - RAM: 4Gb",
        imagen: "./img/cel/cel3.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 350000
    },
    {
        id:"cel-04",
        marca: "Apple",
        espec: "Modelo: iP15 - Almacenamiento: 256Gb - RAM: 8Gb",
        imagen: "./img/cel/cel4.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 1600000
    },
    {
        id:"cel-05",
        marca: "Apple",
        espec: "Modelo: iP13 - Almacenamiento: 128Gb - RAM: 4Gb",
        imagen: "./img/cel/cel5.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 1250000
    },
    {
        id:"cel-06",
        marca: "Apple",
        espec: "Modelo: iP11 - Almacenamiento: 64Gb - RAM: 4Gb",
        imagen: "./img/cel/cel6.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 1250000
    },
    {
        id:"cel-07",
        marca: "Motorola",
        espec: "Modelo: Edge 30Neo - Almacenamiento: 128Gb - RAM: 8Gb",
        imagen: "./img/cel/cel7.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 550000
    },
    {
        id:"cel-08",
        marca: "Motorola",
        espec: "Modelo: G23 - Almacenamiento: 128Gb - RAM: 4Gb",
        imagen: "./img/cel/cel8.webp",
        categoria:{
            nombre: "Celulares",
            id: "cel",
        },
        precio: 305000
    },


]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = `
                        <img class="card-img" src="${producto.imagen}" alt="${producto.marca}">
                        <div class="card-detalle">
                            <h3 class="card-marca">${producto.marca}</h3>
                            <p class="card-espec">${producto.espec}</p>
                            <p class="card-precio">$${producto.precio},00</p>
                            <div>
                                <input class="card-cantidad" type="number" max="10" min="0" placeholder="0">
                                <button class="card-agregar" id="${producto.id}">Agregar <i class="bi bi-cart-plus"></i></button>
                            </div>
                        </div>
        `;
        contenedorProductos.append(div);
    })


}
cargarProductos(productos);

botonesCategorias.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");      

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
})

