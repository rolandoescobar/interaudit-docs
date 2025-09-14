# Guía de Prompts para GitHub Copilot y Colaboradores

## Objetivo

Este archivo contiene instrucciones básicas y convenciones para mantener la coherencia en los prompts y la generación de contenido en este proyecto.

## Instrucciones generales

- Usa español neutro y lenguaje claro.
- Los archivos `.mdx` deben tener siempre front-matter con `title` y `description`.
- Las rutas y enlaces deben ser absolutas y coincidir con la estructura real del proyecto.
- No uses comentarios HTML (`<!-- ... -->`) en archivos `.mdx`; usa `{/* ... */}`.
- Los títulos de las páginas deben ser únicos y descriptivos.
- Si creas nuevas páginas, agrégalas al sidebar en `astro.config.mjs`.
- Si cambias rutas, actualiza todos los enlaces internos afectados.
- No dejes rutas huérfanas ni referencias a páginas 404.
- Usa imágenes desde la carpeta `/public/images/` con rutas absolutas.
- Antes de hacer cambios mayores, ejecuta `npm run dev` y verifica que no haya errores ni advertencias.

## Ejemplo de front-matter correcto

```md
---
title: "Nombre de la página"
description: "Breve descripción de la página."
---
```

## Ejemplo de prompt para Copilot

> Crea una página de documentación para el módulo X, con título único, descripción, y agrega instrucciones para el usuario. Usa la estructura y convenciones de este archivo.

## Resúmenes y notas del proyecto

- [ ] Módulo Escritorio: páginas creadas y pendientes.
- [ ] Módulo Soporte: estructura y enlaces clave.
- [ ] Checklist de navegación revisada el 2025-09-14.
- [ ] Referencia oficial: <https://starlight.astro.build/es/>

---

**Este archivo debe ser consultado antes de crear o modificar cualquier contenido en el proyecto.**
