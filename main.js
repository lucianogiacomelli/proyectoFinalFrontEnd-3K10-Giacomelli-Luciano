import {renderCategories } from './src/services/services/categories'
import { handleSearchProductByName } from './src/services/services/search';
import { openModal } from './src/services/views/modal';
import { handleGetProductToStore } from './src/services/views/store';
import './style.css'; // Asegúrate de que la ruta sea correcta

// Aplicación

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}

handleGetProductToStore();
renderCategories();


//HEADER
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', () => {
    openModal();
});

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});

