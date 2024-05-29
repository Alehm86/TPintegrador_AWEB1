
const productos  = document.getElementById('productos');
fetch('productos.json').then(function(res){return res.json();}).then(function(data){

            const contenedorProductos = document.querySelector("#contenedor-productos");
            const botonesCategorias = document.querySelectorAll(".boton-categoria");
                
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
            cargarProductos(data);

            botonesCategorias.forEach(boton => {
                boton.addEventListener("click", (e) => {
            
                    botonesCategorias.forEach(boton => boton.classList.remove("active"));
                    e.currentTarget.classList.add("active");                     
                    console.log(e.currentTarget.id);
            
                    if (e.currentTarget.id != "todos") { 
                        const productosBoton = JSON.stringify(data.filter(producto => producto.categoria.id === e.currentTarget.id));
                        cargarProductos(JSON.parse(productosBoton));
                    } else {                       
                        cargarProductos(data);
                    }           
                })
            })
})







