export class ProductList {
    #products;
    #apiurl;

    constructor(apiurl) {
        this.#apiurl = apiurl;
        this.#products = [];

        //donde renderizar
        this.appContainer = document.getElementById("app")
    }

    //metodo para inicializar

    async init(){
        try {
           this.#products = await this.#fetchDataProducts()
           this.#renderProducts();
        } catch (error) {
            this.renderError(error)
        }
    }

    // metodo privado para obtener los productos

    async #fetchDataProducts() {
        try {
            const response = await fetch(this.#apiurl)
            
            if (!response.ok){
                throw new Error("Error al obtener la data")
            }

            return await response.json();
            
        } catch (error) {
            throw new Error ("Error fetch data")
        }
    }

    renderError(message){
        this.appContainer.innerHTML= `
        <div class=error>
            <p>Error: ${message}</p>
        </div>
        `     
    }

    //metodo publico para obtener productos
    #renderProducts(){
        if (this.#products.length === 0) this.renderError("No hay productos para mostrar");

        const productsHtml = this.#products.map((product, index)=>{
        return `
        <div class="product-card" data-id="${index}">
            <h3>${product.name}</h3>
            <p>${product.price}€</p>
            <p>${product.description}</p>
            <p data-id="${index}">${product.category}</p>
        </div>
        `
    }).join("");

    this.appContainer.innerHTML = `
        <div class = "product-list">
        ${productsHtml}
        </div>
    `;

//   const myDiv = document.createElement("div");
//   myDiv.className = "product-list";
//   myDiv.innerHTML = productsHtml;
//   this.appContainer.appendChild(myDiv)

const listaProductos = document.querySelector(".product-list")
console.log(listaProductos);

listaProductos.addEventListener("click", (event) => {
   if (event.target.dataset.id){
    //poner color verde de la tarjeta entera
const productCard = document.querySelector(`[data-id="${event.target.dataset.id}"]`);
productCard.style.backgroundColor = productCard.style.backgroundColor === "" ? "blue" : "";
   }
    })
}

 #validateData(product){
    const {name,precio,description,category} = product;

    if(!name || !precio || !description || !category){
        throw new Error("Error en la data")
    }
}
    //getters
get apiurl(){
    return this.#apiurl;
}


//setters
set addProduct(product){
    if(this.#validateData(product)){

        //añadimos producto
        //fecheamos en la api el producto
        this.#opFetchaProductsData(product,"post")

    }else{
        throw new Error("datos incorrectos")
    }
}

deleteProduct(product){
    this.#opFetchaProductsData(product,"delete");
}

// metodo para (post,update,delete,put)

async #opFetchaProductsData(product, method){
    try {
        switch (method) {
            case "post":
                const responsePost = await fetch(this.#apiurl,{
                    method: 'POST',
                    body: JSON.stringify(product),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            
                if (!responsePost.ok){
                    throw new Error("Error al obtener la data")
                }
    
                return await responsePost.json();
                
            break;
            case "delete":
                const id = product.id;
                const responseDelete = await fetch(`${this.#apiurl}/${id}`, {
                    method: 'DELETE'
                    });
                        
                if (!responseDelete.ok){
                    throw new Error("Error al obtener la data")
                }
                console.log("borrado correctamente");
        
                return await responseDelete.json();
                
            break;
            case "put":
                const responsePut = await fetch(this.#apiurl,{
                    method: 'POST',
                    body: JSON.stringify(product),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            
                if (!responsePut.ok){
                    throw new Error("Error al obtener la data")
                }
    
                return await responsePut.json();
                
            break;
            case "patch":
                
            break;
            case "get":
                const responseGet = await fetch(this.#apiurl)
            
                if (!responseGet.ok){
                    throw new Error("Error al obtener la data")
                }
        
            return await responseGet.json();
                
            break;
            default:
                break;
        }
    } catch (error) {
        
    }
}

}