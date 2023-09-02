AOS.init();
function activarPanel() {
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");

    boton.classList.toggle("active");
    contenedor.classList.toggle("active");
}

var link = document.getElementById("fileCss");

function primario() {
    link.href = "css/style.css";
}

function secundario() {
    link.href = "css/style-secundario.css";
}

function terciario() {
    link.href = "css/style-terciario.css";
} 