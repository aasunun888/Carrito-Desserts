class ProductoPostre extends HTMLElement {

    constructor(producto) {
        super();
        this.producto = producto;
        this.setAttribute("data-id", producto.id);


    }

    connectedCallback() {
        this.render()
    }

    render() {
        //crear elementos
        this.className = "carta-postre";


        let img = document.createElement("img");
        img.src = this.producto.url_imagen;


        let button = document.createElement("button");
        button.addEventListener("click", (event) => {
            this.onClickAnadir(this);
            //TODO actualizar hud tras añadir al carrito, llamar a funcion dentro de la clase
            this.actualizarButton(button);
        });
        button.className = "añadir-carrito"; //clase carrito
        button.dataset.id = this.producto.id; //id producto
        button.innerHTML = `
    <img src="img/add_shopping_cart_24dp_E28743_FILL0_wght400_GRAD0_opsz24.svg" class="carrito" alt="carrito de la compra">Add to Cart
    `; //imagen icono


        let span = document.createElement("span");
        span.textContent = this.producto.categoria;

        let b = document.createElement("b");
        b.textContent = this.producto.nombre;

        let spanPrecio = document.createElement("span");
        spanPrecio.textContent = this.producto.precio;

        this.appendChild(img);
        this.appendChild(button);
        this.appendChild(span);
        this.appendChild(b);
        this.appendChild(spanPrecio);

    }

    set onClickAnadir(value) {
        this._clickAnadir = value;
    }

    get onClickAnadir() {
        return this._clickAnadir;
    }

    //funcion actualizar HUD
    actualizarButton(btn) {
        //Si el boton no esta disponible o no se lo ha podido pasar (Garantiza que siempre se tenga)
        if (!btn) {
            btn = this.querySelector("button");
        }

        //crear contenedor de botones
        let contenedorControles = document.createElement("div");
        contenedorControles.className = "control-cantidad";

        //boton menos
        let btnMenos = document.createElement("button");
        btnMenos.textContent = "-";
        btnMenos.className = "btn-menos";

        btnMenos.addEventListener("click", () => {
            if (this.producto.cantidad > 1) {
                this.producto.cantidad--;
                this.querySelector(".cantidad").textContent = this.producto.cantidad;
            }
        });

        //boton mas
        let btnMas = document.createElement("button");
        btnMas.textContent = "+";
        btnMas.className = "btn-mas";
        btnMas.addEventListener("click", () => {
            this.producto.cantidad++;
            this.querySelector(".cantidad").textContent = this.producto.cantidad;
        });

        //Cantidad de producto
        let cantidad = document.createElement("p");
        cantidad.textContent = this.producto.cantidad;


        contenedorControles.appendChild(btnMenos);
        contenedorControles.appendChild(cantidad);
        contenedorControles.appendChild(btnMas);


        btn.innerHTML = ""; //Limpiar contenido actual
        btn.appendChild(contenedorControles); //Agregar el HUD

    }
}

customElements.define("aa-producto-postre", ProductoPostre);