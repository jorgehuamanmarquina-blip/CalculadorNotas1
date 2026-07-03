const nuevoCurso = document.getElementById("nuevoCurso");
const contenedor = document.getElementById("contenedorCursos");

nuevoCurso.addEventListener("click", crearCurso);

function crearCurso() {

    const curso = document
        .getElementById("cursoTemplate")
        .content
        .cloneNode(true);

    const tarjeta = curso.querySelector(".curso");

    const btnAgregarCategoria = curso.querySelector(".agregarCategoria");
    const btnEliminarCurso = curso.querySelector(".eliminarCurso");
    const categorias = curso.querySelector(".categorias");

    btnAgregarCategoria.addEventListener("click", () => {

        crearCategoria(categorias);

    });

    btnEliminarCurso.addEventListener("click", () => {

        if(confirm("¿Eliminar este curso?")){

            tarjeta.remove();

        }

    });

    contenedor.appendChild(curso);

}

function crearCategoria(contenedorCategorias){

    const categoria = document
        .getElementById("categoriaTemplate")
        .content
        .cloneNode(true);

    const tarjetaCategoria = categoria.querySelector(".categoria");

    const listaNotas = categoria.querySelector(".listaNotas");

    const agregarNota = categoria.querySelector(".agregarNota");

    const eliminarCategoria = categoria.querySelector(".eliminarCategoria");

    agregarNota.addEventListener("click",()=>{

        crearNota(listaNotas);

    });

    eliminarCategoria.addEventListener("click",()=>{

        tarjetaCategoria.remove();

    });

    contenedorCategorias.appendChild(categoria);

}

function crearNota(lista){

    const nota = document
        .getElementById("notaTemplate")
        .content
        .cloneNode(true);

    const fila = nota.querySelector(".nota");

    const eliminar = nota.querySelector(".eliminarNota");

    eliminar.addEventListener("click",()=>{

        fila.remove();

    });

    lista.appendChild(nota);

}