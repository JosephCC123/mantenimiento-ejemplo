# Proyecto: Mantenimiento de Software - Exploradores del Cosmos

Este repositorio es parte de una actividad práctica sobre mantenimiento de software. El proyecto base es un sitio web simple sobre el sistema solar.

## Proceso de Refactorización

Se realizaron los siguientes cambios para mejorar la mantenibilidad del código:

1.  **Commit `Refactor: Extrae CSS a un archivo externo styles.css`**: Se centralizó todo el código CSS, que estaba duplicado en cada archivo HTML, en un único fichero (`css/styles.css`). Esto evita la redundancia y facilita la modificación de estilos en todo el sitio.
2.  **Commit `Refactor: Usa etiquetas semánticas HTML5`**: Se reemplazaron etiquetas `<div>` genéricas por etiquetas semánticas como `<header>`, `<nav>`, `<main>` y `<footer>`. Esto mejora la accesibilidad (SEO) y la legibilidad de la estructura del documento.
3.  **Commit `Refactor: Mueve JavaScript a archivo externo main.js`**: Se eliminó el código JavaScript "inline" (`onclick`) y se movió a un archivo externo (`js/main.js`), separando la lógica (JS) de la estructura (HTML).

## Monitoreo y Corrección de Errores

Se simuló un escenario de monitoreo introduciendo un error en la ruta del archivo CSS en `index.html`.

*   **Error Detectado**: La consola del navegador mostró un error `404 Not Found` para el recurso `css/style.css`.
*   **Causa**: La ruta en la etiqueta `<link>` estaba mal escrita.
*   **Solución**: Se corrigió la ruta a `css/styles.css`. Este cambio fue documentado en el commit `Fix: Corrige ruta incorrecta al archivo CSS`.