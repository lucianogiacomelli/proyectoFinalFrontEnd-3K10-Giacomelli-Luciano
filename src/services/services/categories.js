//render de la vista categorias

import { categoriaActiva } from "../../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";






const handleFilterProductsByCategory = (categoryIn)=>{
    const product = handleGetProductLocalStorage();
switch(categoryIn){
    case categoriaActiva:
        handleRenderList(product)
        break;
    
       case "Todo":
        handleRenderList(product)
        break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":

        const result = product.filter((el)=>el.categoria == categoryIn);
        handleRenderList(result);

    default:
        break;


        case "menorPrecio":
            const menorPrecio = product.sort((a,b)=> a.precio-b.precio)
            handleRenderList(menorPrecio);

            break;
            case "mayorPrecio": 
            const mayorPrecio = product.sort((a,b)=> b.precio-a.precio)
            handleRenderList(mayorPrecio);
            break;
}

}


export const renderCategories = ()=>{
    const ulList = document.getElementById("listFilter");

    ulList.innerHTML = `
    <li  id = "Todo"> Todos los productos </li>
    <li id = "Hamburguesas"> Hamburguesas </li>
    <li id = "Papas"> Papas </li>
    <li id = "Gaseosas"> Gaseosas </li>
    <li id = "mayorPrecio"> Mayor precio </li>
    <li id = "menorPrecio"> Menor precio </li>
    `;
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElements)=>{
        liElements.addEventListener('click',()=>{
            handleClick(liElements);
        })
    })
    const handleClick = (elemento) =>{
        liElements.forEach((el)=>{
            handleFilterProductsByCategory(elemento.id)
            if(el.classList.contains("liActive")){
                el.classList.remove("liActive");
            } else{
                if(elemento===el){
                    el.classList.add("liActive");
                }
            }
        })
    }
};

