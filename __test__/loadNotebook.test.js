// Carga la función
const { loadNotebook } = require('../script.js');

describe('Pruebas para loadNotebook', () => {
    let iframe;

    beforeEach(() => {
        // Configurar un DOM simulado
        document.body.innerHTML = '<iframe id="notebookViewer"></iframe>';
        iframe = document.getElementById('notebookViewer');
    });

    test('Debe cambiar el src del iframe correctamente', () => {
        const notebookFile = 'notebookInicio.html';
        loadNotebook(notebookFile);

        const expectedUrl = 'html_outputs/notebooks/notebookInicio.html';
        expect(iframe.src).toContain(expectedUrl); // Verifica que se asignó correctamente el src
    });

    test('Debe manejar archivos vacíos sin errores', () => {
        const notebookFile = '';
        loadNotebook(notebookFile);

        const expectedUrl = 'html_outputs/notebooks/';
        expect(iframe.src).toContain(expectedUrl);
    });
    test('Debe manejar archivos incorrectos sin errores', () => {
        const notebookFile = 'notebookInexistente.html';
        loadNotebook(notebookFile);

        const expectedUrl = 'html_outputs/notebooks/notebookInexistente.html';
        expect(iframe.src).toContain(expectedUrl);
    });
    test('Debe manejar valores nulos sin errores', () => {
        const notebookFile = null;
        loadNotebook(notebookFile);
    
        const expectedUrl = 'html_outputs/notebooks/';
        expect(iframe.src).toContain(expectedUrl);
    });
    test('Debe manejar el valor undefined sin errores', () => {
        const undefinedNotebookFile = undefined;
        loadNotebook(undefinedNotebookFile);
    
        const expectedUrl = 'html_outputs/notebooks/';
        expect(iframe.src).toContain(expectedUrl);
    });
});
