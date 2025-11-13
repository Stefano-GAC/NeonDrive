function incluirHTML(elemento, archivo) {
    fetch(archivo)
        .then((response) => {
            if (!response.ok) throw new Error('No se pudo cargar ' + archivo);
            return response.text();
        })
        .then((data) => {
            document.querySelector(elemento).innerHTML = data;
        })
        .catch((error) => console.error(error));
}
