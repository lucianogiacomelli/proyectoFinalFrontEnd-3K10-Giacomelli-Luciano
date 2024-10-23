import { setProductoActivo } from "../../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";


export const handleGetProductToStore = () => {
    const products = handleGetProductLocalStorage();
    console.log("Productos obtenidos del localStorage:", products);
    handleRenderList(products);
}

export const handleRenderList = (productsIn) => { //Probar con categories
    const burgers = productsIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productsIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas");

    console.log("Hamburguesas:", burgers);
    console.log("Papas:", papas);
    console.log("Gaseosas:", gaseosas);

    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div class='containerTargetItem' id="product-${producto.categoria}-${index}">
                            <div>
                                <img src='${producto.imagen}'/>
                                <div>
                                    <h2>${producto.nombre}</h2>
                                    <div class='targetProps'>
                                        <p><b>Precio:</b>$ ${producto.precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            });

            return `
            <section class='sectionStore'>
            <div class='containerTitleSection'>
                <h3>${title} </h3>
                <div class = 'containerProductStore'>
                ${productosHTML.join("")}
                </div>
             </div>

            </section>
            `;
        } else {
            return "";
        }
    }

    // Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("StoreContainer");

    if (appContainer) {
        console.log("Contenedor de la tienda encontrado.");
        appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
        `;

        

        const addEvents = (productsIn) => {
            
                if (productsIn) {
                    productsIn.forEach((element, index) => {
                        const productContainer = document.
                        getElementById(`product-${element.categoria}-${index}`);
                    productContainer.addEventListener("click", () => {
                        setProductoActivo(element);
                        openModal();
                    });
                })
            };
        }
        addEvents(burgers);
        addEvents(papas);
        addEvents(gaseosas);
    } else {
        console.log("Contenedor de la tienda no encontrado.");
    }
};
