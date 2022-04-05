<template>
  <q-header elevated class="bg-cyan-8">
    <q-toolbar class="bg-negative">
      <q-toolbar-title>Sistema de solicitud de ayuda del BAER</q-toolbar-title>
      <q-btn flat :to="{ name: 'administrador' }" round dense icon="subject" />
      <q-btn
        v-show="$q.screen.width < 500"
        @click="drawer = !drawer"
        flat
        round
        dense
        icon="menu"
      />
      <q-btn
        flat
        @click="cerrarSesion()"
        round
        dense
        label="Cerrar sesion"
        icon="logout"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import { getAuth, signOut } from "@firebase/auth";
import { useRouter } from "vue-router";
export default {
  name: "HeaderUsuario",

  setup() {
    const router = useRouter();
    const cerrarSesion = async () => {
      try {
        const auth = getAuth();
        await signOut(auth);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    };
    return {
      cerrarSesion,
    };
  },
};
</script>
