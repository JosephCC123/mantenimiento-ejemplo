# Proyecto: Mantenimiento de Software - Exploradores del Cosmos

Este repositorio es parte de una actividad práctica sobre mantenimiento de software. El proyecto base es un sitio web simple sobre el sistema solar, que ha pasado por una fase de refactorización y una fase de mejora visual y funcional.

## Fase 1: Refactorización y Mantenimiento Inicial

Se realizaron los siguientes cambios para mejorar la mantenibilidad del código base original:

1.  **Commit `Refactor: Extrae CSS a un archivo externo styles.css`**: Se centralizó todo el código CSS, que estaba duplicado en cada archivo HTML, en un único fichero (`css/styles.css`). Esto evita la redundancia y facilita la modificación de estilos en todo el sitio.
2.  **Commit `Refactor: Usa etiquetas semánticas HTML5`**: Se reemplazaron etiquetas `<div>` genéricas por etiquetas semánticas como `<header>`, `<nav>`, `<main>` y `<footer>`. Esto mejora la accesibilidad (SEO) y la legibilidad de la estructura del documento.
3.  **Commit `Refactor: Mueve JavaScript a archivo externo main.js`**: Se eliminó el código JavaScript "inline" (`onclick`) y se movió a un archivo externo (`js/main.js`), separando la lógica (JS) de la estructura (HTML).

### Monitoreo y Corrección de Errores

Se simuló un escenario de monitoreo introduciendo un error en la ruta del archivo CSS en `index.html`.

*   **Error Detectado**: La consola del navegador mostró un error `404 Not Found` para el recurso.
*   **Causa**: La ruta en la etiqueta `<link>` estaba mal escrita.
*   **Solución**: Se corrigió la ruta. Este cambio fue documentado en el commit `Fix: Corrige ruta incorrecta al archivo CSS`.

---

## Fase 2: Mejora Visual y Funcional (V2.0)

Tras la refactorización inicial, se realizó una segunda fase de desarrollo enfocada en mejorar la experiencia de usuario (UX), el diseño visual (UI) y la interactividad.

### Mejoras Clave:

1.  **Diseño Visual Moderno (UI):**
    *   **Paleta de Colores y Tipografía:** Se implementó una paleta de colores cohesiva con temática espacial usando variables CSS (`:root`) para un fácil mantenimiento. Se importaron fuentes de Google Fonts (`Orbitron` para títulos y `Roboto` para cuerpo) para mejorar la estética.
    *   **Fondo Inmersivo:** Se añadió un fondo sutil de estrellas para dar una sensación de inmersión.
    *   **Tarjetas Interactivas:** La galería de planetas ahora usa tarjetas con efectos `hover` (sombra y elevación) que invitan a la interacción.

2.  **Layout Responsivo y Avanzado:**
    *   Se utilizó **Flexbox** en el encabezado para alinear correctamente el logo y la navegación.
    *   Se utilizó **Grid Layout** (`display: grid`) para crear una galería de planetas que se adapta automáticamente a diferentes tamaños de pantalla (diseño responsivo).

3.  **Interactividad Mejorada (JavaScript):**
    *   Se implementó una animación de "fade-in al hacer scroll" para las tarjetas de planetas usando la **Intersection Observer API**. Esto proporciona una experiencia de carga más fluida y moderna, y es más eficiente que los antiguos métodos de detección de scroll.

4.  **Expansión de Contenido:**
    *   **Se expandió el contenido con nuevas páginas dedicadas a Júpiter (`jupiter.html`) y La Tierra (`tierra.html`), demostrando la escalabilidad y facilidad de mantenimiento de la nueva estructura del proyecto.**
    *   La página de inicio (`index.html`) fue rediseñada para incluir una sección "hero" impactante y actuar como un portal central hacia las demás páginas.

Estos cambios no solo hacen que el sitio web sea visualmente más atractivo, sino que también refuerzan los principios de mantenibilidad, ya que el nuevo CSS es más modular y el JavaScript es más eficiente y desacoplado.