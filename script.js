document.addEventListener('DOMContentLoaded', (event) => {
    // Cargar el notebook por defecto al iniciar la página
    loadNotebook('notebook1.html');
});

function loadNotebook(notebookFile) {
    const iframe = document.getElementById('notebookViewer');
    iframe.src = '/TFG/html_outputs/notebooks/' + notebookFile;
}
