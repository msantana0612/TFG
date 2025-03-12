describe('Pruebas de la página Aprendiendo la CLI de Linux', () => {
    beforeEach(() => {
      // Cargar la página antes de cada prueba
      cy.visit('https://msantana0612.github.io/TFG/');
    });

    it('Debe cargar el notebook inicial al abrir la página', () => {
  
      // Verificar que el iframe se ha cargado con el src correcto
      cy.get('iframe#notebookViewer') 
        .should('have.attr', 'src') 
        .and('include', 'html_outputs/notebooks/notebookInicio.html'); // Verificar que incluye la URL esperada
    });
    
    it('Verificar que el icono de GitHub redirige correctamente', () => {
      // Seleccionar el enlace del icono de GitHub
      cy.get('a.github-icon') // Buscar el elemento con la clase github-icon
        .should('exist') 
        .and('have.attr', 'href', 'https://github.com/msantana0612/TFG') // Comprobar que tiene el atributo href esperado
        .and('have.attr', 'target', '_blank') // Verificar que se abre en una nueva pestaña
        .and('be.visible'); // Asegurarse de que es visible
  
      // Opcional: Simular un clic y verificar que la URL es accesible
      cy.request('https://github.com/msantana0612/TFG').its('status').should('eq', 200);
    });

    it('Verificar que el botón "Inicio" carga correctamente el contenido en el iframe', () => {
      // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
      cy.get('a') // Seleccionar todos los enlaces
        .contains('Inicio') // Filtrar el enlace con el texto "Inicio"
        .should('exist') 
        .click(); 
  
      // Verificar que el iframe tiene el contenido esperado
      cy.get('iframe#notebookViewer') 
        .should('have.attr', 'src') 
        .and('include', 'html_outputs/notebooks/notebookInicio.html'); // Comprobar que la URL es la esperada
    });
  
    it('Verificar que el botón "Introducción" carga correctamente el contenido en el iframe', () => {
      // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
      cy.get('a') // Seleccionar todos los enlaces
        .contains('Introducción') // Filtrar el enlace con el texto "Introducción"
        .should('exist') 
        .click(); 
  
      // Verificar que el iframe tiene el contenido esperado
      cy.get('iframe#notebookViewer') 
        .should('have.attr', 'src') 
        .and('include', 'html_outputs/notebooks/notebookIntroduccion.html'); // Comprobar que la URL es la esperada
    });

    it('Verificar que el botón "Comandos básicos" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Comandos básicos') // Filtrar el enlace con el texto "Comandos básicos"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookComandosBasicos.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "El Sistema de archivos" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('El sistema de archivos') // Filtrar el enlace con el texto "El Sistema de archivos"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookSistemaArchivos.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Permisos" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Permisos') // Filtrar el enlace con el texto "Permisos"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookPermisos.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Enlaces" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Enlaces') // Filtrar el enlace con el texto "Enlaces"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookEnlaces.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Variables y archivos de configuración" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Variables y archivos de configuración') // Filtrar el enlace con el texto "Variables y archivos de configuración"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookVariables.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Procesos" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Procesos') // Filtrar el enlace con el texto "Procesos"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookProcesos.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Redirecciones y tuberías" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Redirecciones y tuberías') // Filtrar el enlace con el texto "Redirecciones y tuberías"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookRedireccionesTuberias.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Uso de filtros" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Uso de filtros') // Filtrar el enlace con el texto "Uso de filtros"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookFiltros.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Señales" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Señales') // Filtrar el enlace con el texto "Señales"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookSeñales.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Expresiones Regulares" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Expresiones Regulares') // Filtrar el enlace con el texto "Expresiones Regulares"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookRegex.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Instalación de paquetes" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Instalación de paquetes') // Filtrar el enlace con el texto "Instalación de paquetes"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookPaquetes.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Empaquetado de archivos" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Empaquetado de archivos') // Filtrar el enlace con el texto "Empaquetado de archivos"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookEmpaquetado.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Uso de disco" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Uso de disco') // Filtrar el enlace con el texto "Uso de disco"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookAlmacenamiento.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Ejercicios" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Ejercicios') // Filtrar el enlace con el texto "Ejercicios"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookEjercicios.html'); // Comprobar que la URL es la esperada
      });

      it('Verificar que el botón "Soluciones" carga correctamente el contenido en el iframe', () => {
        // Interceptar el clic en el botón para asegurarnos de que ejecuta la acción esperada
        cy.get('a') // Seleccionar todos los enlaces
          .contains('Soluciones') // Filtrar el enlace con el texto "Soluciones"
          .should('exist') 
          .click(); 
    
        // Verificar que el iframe tiene el contenido esperado
        cy.get('iframe#notebookViewer') 
          .should('have.attr', 'src') 
          .and('include', 'html_outputs/notebooks/notebookSoluciones.html'); // Comprobar que la URL es la esperada
      });
  });
  
