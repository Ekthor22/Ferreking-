# Catálogo Ferreking – App (PWA)

## Subir a GitHub (una sola vez)
1. github.com → New repository → nombre `Ferreking-` → Public → Create.
2. "uploading an existing file" → arrastra TODO el contenido de esta carpeta (index.html, manifest.webmanifest, sw.js, .nojekyll, carpeta icons) → Commit.
3. Settings → Pages → Branch: `main` / `(root)` → Save.
4. En 1–3 min queda en: https://ekthor22.github.io/Ferreking-/

## Instalar
- Android (Chrome): abrir el link → menú ⋮ → "Instalar app".
- Windows (Edge/Chrome): abrir el link → ícono de instalar en la barra de direcciones.

## Conectar el botón "Guardar cambios" a GitHub (una sola vez)
1. GitHub → foto de perfil → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token.
2. Nombre: `catalogo`. Expiración: 1 año. Repository access: Only select repositories → `Ferreking-`.
3. Permissions → Repository permissions → Contents: **Read and write**. Generate token y cópialo.
4. En `Catalogo_Ferreking_maestro.html` → Actualizar catálogo → punto 8: escribe `Ekthor22/Ferreking-`, pega el token → Guardar y probar.

## Uso diario
Cambia precios, fotos, clientes, etc. → presiona **Guardar cambios**:
- Graba todo en el archivo maestro (Windows + Chrome/Edge: sobrescribe el mismo archivo; Android: lo descarga).
- Publica la versión para clientes en GitHub; la app instalada se actualiza sola en 1–2 minutos.
- Vendedores: mándales el "Catálogo para vendedores" (punto 7).

Sin token también puedes actualizar a mano: descarga "Catálogo para clientes", renómbralo `index.html` y súbelo al repo.

## IMPORTANTE
Sube SOLO la versión "para clientes". Nunca subas el maestro ni el de vendedores: traen RUT y contactos de clientes y los PIN de usuarios, y el repositorio es público.
