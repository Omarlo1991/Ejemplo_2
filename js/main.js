const boton = document.getElementById("btn-mas");
const texto = document.getElementById("texto-extra");

boton.addEventListener("click", () => {
    if (texto.style.display === "none") {
        texto.style.display = "block";
        boton.textContent = "Ocultar";
    } else {
        texto.style.display = "none";
        boton.textContent = "Ver más";
    }
});