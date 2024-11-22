/**
 * Spinner con tres estados
 * -Crear Spinner
 * -mostrar Spinner
 * -ocultar Spinner
 */

export const createSpinner = () => {
    //voy a crear el spinner en el DOM
    const spinner = document.createElement("div");
    spinner.id="spinner";
    spinner.classList.add("hidden", "spinner")
    spinner.textContent = "Cargando...";
    return spinner;
}

export const showSpinner = () => {
    // mostrar spinner
    const spinner = document.getElementById("spinner")
    spinner.classList.remove("hidden");

}

export const hideSpinner = () => {
    const spinner = document.getElementById("spinner")
    spinner.classList.add("hidden");
}

