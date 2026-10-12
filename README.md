# Ferreking — Catálogo y aplicación

Catálogo público de herramientas Ferreking, preparado como aplicación web instalable (PWA).

## Archivos

- `index.html`: catálogo público para clientes, con sus imágenes incorporadas.
- `manifest.webmanifest`: nombre, colores e iconos de la aplicación.
- `sw.js`: caché para uso sin conexión después de la primera visita.
- `icons/`: iconos para Android, iOS y escritorio.
- `.nojekyll`: evita el procesamiento con Jekyll.
- `LEEME.md`: instalación y actualización.

## Abrir y publicar

Para probarlo localmente: `python3 -m http.server 8000` y abrir `http://localhost:8000`.

Para publicarlo en GitHub Pages: **Settings → Pages → Deploy from a branch → main → / (root) → Save**.

La dirección, una vez activado Pages, será: https://ekthor22.github.io/Ferreking-/

En Android, abrir esa dirección en Chrome y seleccionar **Instalar aplicación**. En Windows, usar la opción de instalación de Chrome o Edge.

## Actualizar el catálogo

Desde el maestro privado, exportar **Catálogo para clientes** y reemplazar `index.html`. Conservar el resto de los archivos en sus rutas actuales.

El maestro y las versiones internas de vendedores contienen datos privados y no se incluyen en este repositorio público. Nunca incorporar tokens de GitHub al código.
