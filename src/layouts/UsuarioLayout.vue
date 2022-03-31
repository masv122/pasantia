<template>
  <q-layout view="lHh Lpr lff">
    <MenuUsuario />
    <HeaderPrincipal />
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import MenuUsuario from "components/MenuUsuario.vue";
import HeaderPrincipal from "components/HeaderPrincipal.vue";
export default {
  components: {
    MenuUsuario,
    HeaderPrincipal,
  },
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
