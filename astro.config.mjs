// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.interaudit.example', // cámbialo cuando tengas dominio
  integrations: [
    starlight({
      title: 'InterAudit · Manual de Usuario',
      locales: { root: { label: 'Español', lang: 'es' } },
      // logo / favicon los dejamos para después
      social: [],

      sidebar: [
        { label: 'Inicio', link: '/inicio/' },
        { label: 'Primeros pasos', link: '/primeros-pasos/' },

        {
          label: 'Escritorio',
          items: [
            { label: 'Escritorio · Visión general', link: '/modulos/escritorio/' },
            { label: 'Escritorio · Widgets e indicadores', link: '/modulos/escritorio/widgets/' },
          ],
        },
        {
          label: 'Normativa',
          items: [
            { label: 'Normativa · Visión general', link: '/modulos/normativa/' },
            { label: 'Requisitos', link: '/modulos/normativa/requisitos' },
            { label: 'Controles & SoA', link: '/modulos/normativa/controles-soa' },
            { label: 'Mapeos y aplicabilidad', link: '/modulos/normativa/mapeos' },
          ],
        },
        {
          label: 'Organización',
          items: [
            { label: 'Estructura (org/unidades)', link: '/modulos/organizacion/estructura' },
            { label: 'Procesos y servicios', link: '/modulos/organizacion/procesos-servicios' },
            { label: 'Usuarios y roles', link: '/modulos/organizacion/roles' },
            { label: 'Activos de información', link: '/modulos/organizacion/activos' },
          ],
        },
        {
          label: 'Riesgos',
          items: [
            { label: 'Registrar un riesgo', link: '/modulos/riesgos/registrar/' },
            { label: 'Tratamiento y residual', link: '/modulos/riesgos/tratamiento/' },
            { label: 'Matriz P×I y mapa de calor', link: '/modulos/riesgos/matriz' },
            { label: 'Indicadores (ISO 27004)', link: '/modulos/riesgos/indicadores' },
            { label: 'BIA (ISO 22317)', link: '/modulos/riesgos/bia' },
          ],
        },
        {
          label: 'Proyectos',
          items: [
            { label: 'Crear proyecto', link: '/modulos/proyectos/crear' },
            { label: 'Plan, hitos y tareas', link: '/modulos/proyectos/plan' },
            { label: 'No conformidades y acciones', link: '/modulos/proyectos/nc-acciones' },
          ],
        },
        {
          label: 'Soporte',
          items: [
            { label: 'Tickets y ayuda', link: '/modulos/soporte/tickets' },
            { label: 'FAQ', link: '/soporte/' },
          ],
        },
        {
          label: 'Administración',
          items: [
            { label: 'Parámetros del sistema', link: '/modulos/administracion/parametros' },
            { label: 'Importar / Exportar', link: '/modulos/administracion/import-export' },
            { label: 'Auditoría y bitácora', link: '/modulos/administracion/auditoria' },
          ],
        },

        { label: 'Novedades', link: '/changelog/' },
      ],
    }),
  ],
   redirects: { '/': '/inicio/' },
});
