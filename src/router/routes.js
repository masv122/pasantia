const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
  },
  {
    path: "/usuario",
    name: "usuario",
    redirect: { name: "crear solicitud" },
    component: () => import("layouts/UsuarioLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "usuario dashboard",
        component: () => import("pages/UsuarioPage.vue"),
        children: [
          {
            path: "crear-solicitud",
            name: "crear solicitud",
            component: () => import("components/FormularioSolicitud.vue"),
          },
          {
            name: "solicitudes usuario",
            path: "solicitudes-usuario",
            component: () => import("components/SolicitudesUsuario.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/administrador",
    name: "administrador",
    component: () => import("layouts/AdministradorLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "administrador dashboard",
        component: () => import("pages/AdmiPage.vue"),
        children: [
          {
            path: "solicitudes",
            name: "solicitudes admi",
            component: () => import("components/SolicitudesAdmi.vue"),
          },
          {
            path: "mis-solicitudes",
            name: "solicitudes realizadas admi",
            component: () => import("components/SolicitudesRealizadasAdmi.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
