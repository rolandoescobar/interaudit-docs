// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.interaudit.example', // cámbialo cuando tengas dominio
  integrations: [
    starlight({
      title: 'InterAudit · Manual de Usuario',
      locales: { root: { label: 'Español', lang: 'es' } },
      //logo: { src: '/logo.svg', alt: 'InterAudit' },
      favicon: '/favicon.svg',

      // Social actualizado al nuevo formato
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/rolandoescobar/interaudit-docs' },
      ],

      sidebar: [
        { label: 'Inicio', link: '/inicio/' },
        { label: 'Primeros pasos', link: '/primeros-pasos/' },
        {
          label: 'Tareas paso a paso',
          items: [
            { label: 'Cargar activos', link: '/tareas/activos/' },
            { label: 'Registrar un riesgo', link: '/tareas/riesgos/registrar/' },
            { label: 'Tratamiento y residual', link: '/tareas/riesgos/tratamiento/' },
            { label: 'Controles y SoA', link: '/tareas/controles-soa/' },
            { label: 'No conformidades y acciones', link: '/tareas/nc-acciones/' },
            { label: 'BIA', link: '/tareas/bia/' },
            { label: 'Indicadores', link: '/tareas/indicadores/' },
            { label: 'Importar/Exportar', link: '/tareas/import-export/' },
          ],
        },
        { label: 'FAQ & Soporte', link: '/soporte/' },
        { label: 'Novedades', link: '/changelog/' },
      ],
    }),
  ],
   redirects: { '/': '/inicio/' },
});
