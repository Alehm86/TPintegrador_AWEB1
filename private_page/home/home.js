const productos  = document.getElementById('/private_page/data/productos.json');

fetch('/private_page/data/productos.json').then(function(res){return res.json();}).then(function(data){
            
            const contenedorProductos = document.querySelector("#contenedor-productos");
            const botonesCategorias = document.querySelectorAll(".boton-categoria");
            let botonesAgregar = document.querySelectorAll(".productoAgregar");
            const cantObjEnCarrito = document.querySelector("#objEnCarrito");                  
                
            function cargarProductos(productosElegidos){

                contenedorProductos.innerHTML = "";
                 /* trae los porductos del .json y crea la card de producto. Luego los lista en el main */
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
                                            <input type="number" class="card-cantidad" id="cantCarrito${producto.id}" max="10" min="1" value:"1" placeholder="0">
                                            <button class="productoAgregar" id="${producto.id}">Agregar <i class="bi bi-cart-plus"></i></button>
                                        </div>
                                    </div>
                    `;
                    contenedorProductos.append(div);
                })
                actualizarBotonesAgregar();
                
            }
            cargarProductos(data);

            /* agrupa las card segun la categoria seleccionada */
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

             /* recupera los productos agregados al carrito y los guarda en el localStorage */
            function actualizarBotonesAgregar(){
                botonesAgregar=document.querySelectorAll(".productoAgregar")

                botonesAgregar.forEach(boton =>{
                    boton.addEventListener("click", agregarAlCarrito);
                })
            }
            
            let productosEnCarrito;

            let productosEnCarritoLS = localStorage.getItem("productosEnCarrito");

            if (productosEnCarritoLS) {
                productosEnCarrito = JSON.parse(productosEnCarritoLS);
    
            } else {
                productosEnCarrito = [];
            }

            function agregarAlCarrito(e){
   
                const idInput = e.currentTarget.id 
                const cantidades = document.getElementById(`cantCarrito${idInput}`).value;

                const idBoton = e.currentTarget.id
                const productoAgregado = data.find(producto => producto.id===idBoton);

                if (productosEnCarrito.some(producto => producto.id===idBoton)){
                    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
                    productosEnCarrito[index].cantidad++;                  
                }
                else{
                    productoAgregado.cantidad = cantidades;
                    productosEnCarrito.push(productoAgregado);                   
                }
               
                
                localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));  
          
            }

            /*
            function actualizarNumCarrito() {
                let numCarrito = productosEnCarrito.reduce ((acc, producto) => acc + producto.cantidad, 0);
                cantObjEnCarrito.innerText = numCarrito;
            }
            */

 
})







