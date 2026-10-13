# Portal Ferreking — código fuente

Portal web con acceso de vendedores por usuario y PIN, cartera por vendedor, cotizador y enlaces personalizados para clientes con su descuento vigente.

## Portal en funcionamiento

https://ferreking-vendedores.kind-llama-2951.chatgpt.site

El catálogo público de productos y precios sigue en https://ekthor22.github.io/Ferreking-/ .

## Versión del respaldo

Actualizado el 13 de octubre de 2026 con el código de la versión 4 del portal: envío de enlaces por WhatsApp o correo, actualización de la cartera privada y conservación de enlaces y descuentos al incorporar los datos iniciales. El texto solicitado se retiró de la pantalla de acceso.

## Actualización cotidiana

1. Edita clientes y descuentos en el maestro y guarda los cambios.
2. Publica productos, precios e imágenes en `Ekthor22/Ferreking-` desde el maestro y comprueba que la publicación termine.
3. En el portal, entra como administrador a **Cartera y enlaces para clientes** y carga el HTML maestro guardado con **Actualizar cartera y usuarios**.
4. Los enlaces existentes conservan su dirección y muestran los nuevos datos al abrirlos o recargarlos con conexión a Internet. La aplicación instalada también utiliza estos datos; no requiere reinstalarla.

Guardar el maestro en el equipo no actualiza por sí solo los datos del portal. Los HTML enviados anteriormente son copias fijas. No necesitas cargar este ZIP para actualizar precios o descuentos.

## Qué incluye este respaldo

- Código de la aplicación y del servidor.
- Catálogo y cotizador adaptados.
- Gestión de usuarios, cartera y enlaces de clientes.
- Migraciones de base de datos y recursos para instalación como PWA.
- Pruebas de autorización, privacidad, precios y revocación de enlaces.

No incluye cartera, RUT de clientes, hashes de sus PIN reales, sesiones, tokens de enlaces, tokens de GitHub ni secretos de despliegue.

## GitHub y alojamiento

Guardar este código en GitHub no traslada el servidor. GitHub Pages solo publica archivos estáticos: no ejecuta las rutas del servidor, ni mantiene las sesiones, la base de datos D1 o el almacenamiento R2 que necesita el portal.

El portal activo conserva su alojamiento y sus datos. Para trasladarlo a otro proveedor hace falta provisionar el servidor y trasladar la base de datos y el almacenamiento privado; este paquete por sí solo no completa esa migración.

## Datos privados para una nueva instalación

El código necesita `lib/seed-private.json` para compilar. Ese archivo se excluye intencionalmente del respaldo y de Git.

Puede generarse localmente desde el maestro privado:

```sh
python3 scripts/prepare-private-seed.py /ruta/al/maestro.html
```

Nunca subas el maestro ni el archivo generado al repositorio público. Para revisar el código sin datos reales puede copiarse `lib/seed-private.example.json` a `lib/seed-private.json`; esa copia vacía no permitirá iniciar sesión.

## Tecnología y validación

Aplicación Vinext / React, rutas de servidor en Cloudflare Workers, D1 para sesiones y enlaces, y R2 para la cartera privada cargada desde el maestro. Conserva la integración de compilación de Sites en `vite.config.ts`.

```sh
pnpm install
pnpm exec tsc --noEmit
node --experimental-vm-modules tests/security.mjs
pnpm run build
```

La publicación requiere un entorno compatible con las vinculaciones `DB` y `BUCKET`, aplicar las migraciones y desplegar el Worker. Los archivos de configuración no contienen identidad ni credenciales del sitio activo.
