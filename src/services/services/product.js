// Guardar o modificar elementos
import Swal from 'sweetalert2'
import { productoActivo } from "../../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductToStore, handleRenderList } from "../views/store";



//Productos
/*====product====*/
const acceptButton = document.getElementById("accept");
acceptButton.addEventListener("click", () => {
    handleSaveOrModifyElements();
})


//Funcion de guardar
const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("img").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;


    let object = null;

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        };
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };
    }
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se ha guardado",
        showConfirmButton: false,
        timer: 1500
      });
    setInLocalStorage(object);
    handleGetProductToStore();
    closeModal();
}

//ELIMINAR

export const handleDeleteProduct = ()=>{
    Swal.fire({
        title: "¿Desea eliminar el elemento?",
        text: "No podras revertirlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
          
    const products = handleGetProductLocalStorage();
    const result = products.filter((el)=>el.id !== productoActivo.id);

    localStorage.setItem("products",JSON.stringify(result));

    const newProducts = handleGetProductToStore();
    handleRenderList();
        } else {
            closeModal();
        }
      });



}