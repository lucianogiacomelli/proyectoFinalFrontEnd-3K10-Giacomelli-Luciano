/*==========POPUP===========*/

import { productoActivo, setProductoActivo } from "../../../main";
import { handleDeleteProduct } from "../services/product";


const buttonCancel = document.getElementById("cancel");
buttonCancel.addEventListener("click", () => {
    handleCancelButton();
})

const handleCancelButton = () => {
    closeModal();
}

// Funciones abrir y cerrar Modal
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("delete");
    if(productoActivo){
        buttonDelete.style.display = "block";
    } else{
        buttonDelete.style.display = "none";
    }

    if (productoActivo) {
        const nombre = document.getElementById("nombre");
        const imagen = document.getElementById("img");
        const precio = document.getElementById("precio");
        const categoria = document.getElementById("categoria");

        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;
    }
}

export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
}
const resetModal = () => {
    const nombre = document.getElementById("nombre");
    const imagen = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categoria = document.getElementById("categoria");
    nombre.value = "";
    imagen.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoria";
}

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click",()=> {
    buttonDelete();
})

const buttonDelete = ()=>{
    handleDeleteProduct();
}