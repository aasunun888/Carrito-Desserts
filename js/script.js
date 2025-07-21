//crear array de productos
const productos = [
  {
    id: 1,
    nombre: "Waffle with Berries",
    precio: 6.50,
    categoria: "Waffle",
    url_imagen: "img/istockphoto-185266029-2048x2048.jpg"
  },
  {
    id: 2,
    nombre: "Vanilla Bean Crème Brûlée",
    precio: 7.00,
    categoria: "Crème Brûlée",
    url_imagen: "img/dessert-4955030_1280.jpg"
  },
  {
    id: 3,
    nombre: "Macaron Mix of Five",
    precio: 8.00,
    categoria: "Macaron",
    url_imagen: "img/gourmet-2136369_1280.jpg"
  },
  {
    id: 4,
    nombre: "Classic Tiramisu",
    precio: 5.50,
    categoria: "Tiramisu",
    url_imagen: "img/tiramisu-2897900_1280.jpg"
  },
  {
    id: 5,
    nombre: "Pistachio Baklava",
    precio: 4.00,
    categoria: "Baklava",
    url_imagen: "img/pistachio-baklava-4183179_1280.jpg"
  },
  {
    id: 6,
    nombre: "Lemon Pie",
    precio: 5.00,
    categoria: "Pie",
    url_imagen: "img/istockphoto-155908717-2048x2048.jpg"
  },
  {
    id: 7,
    nombre: "Red Velvet",
    precio: 4.50,
    categoria: "Cake",
    url_imagen: "img/red-velvet-cake-4917734_1280.jpg"
  },
  {
    id: 8,
    nombre: "Salted Caramel Brownie",
    precio: 5.00,
    categoria: "Brownie",
    url_imagen: "img/chocolate-cake-3689088_1280.jpg"
  },
  {
    id: 9,
    nombre: "Vanilla Panna Cotta",
    precio: 6.50,
    categoria: "Panna Cotta",
    url_imagen: "img/panna-cotta-2769177_1280.jpg"
  }
];


addEventListener("DOMContentLoaded", () => {

  //Bucle para añadir cadad producto
  productos.forEach(p => {

    let productoComponente = new ProductoPostre(p);

    productoComponente.onClickAnadir = () => añadirCarrito(productoComponente);

    contenedorPostres.appendChild(productoComponente); //añadir div a contenedor postres


  });
})



//funcion de añadir al carrito TODO REVISAR SI FUNCIONA
function añadirCarrito(productoComponenteElegido) {
  //identificar id del producto para añadir
  let idProducto = productoComponenteElegido.dataset.id;
  //encontrar producto segun id
  let productoSeleccionado = encontrarProducto(idProducto);

  //añadir a la lista de productos en carrito
  let listaCarrito = document.getElementsByClassName("lista-carrito")[0];

  //crear elementos para mostrar
  let texto = document.createElement("b");
  texto.textContent = productoSeleccionado.nombre;

  // añadir nuevo atributo si no existe
  if (!productoSeleccionado.cantidad) {
    productoSeleccionado.cantidad = 1;
  } else {
    productoSeleccionado.cantidad++;
  }

  //buscar si existe en el carrito el producto 
  let itemExistente = listaCarrito.querySelector(`[data-id='${idProducto}']`);

  if (itemExistente) {
    // actualizar cantidad visualmente
    let spanCantidad = itemExistente.querySelector(".cantidad");
    spanCantidad.textContent = productoSeleccionado.cantidad;

  } else {
    // crear elementos visuales
    let itemCarrito = document.createElement("li");
    itemCarrito.setAttribute("data-id", idProducto);

    let texto = document.createElement("b");
    texto.textContent = productoSeleccionado.nombre;

    let cantidad = document.createElement("span");
    cantidad.textContent = productoSeleccionado.cantidad;
    cantidad.setAttribute("class", "cantidad");

    //visualizar en html
    itemCarrito.appendChild(texto);
    itemCarrito.appendChild(cantidad);
    listaCarrito.appendChild(itemCarrito);


  }
}
  //añadir o actualizar hud de botones a html
  /* cambiarHUD(itemExistente);
 */
//Funcion auxiliar para encontrar el producto segun la id
function encontrarProducto(id) {

  return productos.find(p => p.id == id);
}

//funcion para cambiar hud de boton de añadir carrito
/* function cambiarHUD(item) {
  if (item) {// Solo actualizamos si el producto ya está en el carrito

    let boton = document.getElementsByClassName("añadir-carrito")[0]; //coger boton

    let contenedorControles = document.createElement("div");
    contenedorControles.className = "control-cantidad";

    let btnMenos = document.createElement("button");
    btnMenos.textContent = "-";
    btnMenos.className = "btn-menos";
    btnMenos.addEventListener("click", () => {
      let idProducto = item.dataset.id;
      let producto = encontrarProducto(idProducto);
      if (producto.cantidad > 1) {
        producto.cantidad--;
        item.querySelector(".cantidad").textContent = producto.cantidad;
      }
    });



    let btnMas = document.createElement("button");
    btnMas.textContent = "+";
    btnMas.className = "btn-mas";
    btnMas.addEventListener("click", () => {
      let idProducto = item.dataset.id;
      let producto = encontrarProducto(idProducto);
      producto.cantidad++;
      item.querySelector(".cantidad").textContent = producto.cantidad;
    });


    boton.textContent = ""; //limpiar


    contenedorControles.appendChild(btnMenos);
    contenedorControles.appendChild(btnMas);
    boton.append(contenedorControles);
  } */


/* } */



