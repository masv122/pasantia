<template>
  <q-header elevated class="bg-cyan-8">
    <q-toolbar class="bg-negative">
      <q-toolbar-title>Sistema de solicitud de ayuda del BAER</q-toolbar-title>
      <q-btn
        v-show="$q.screen.width < 500"
        flat
        @click="drawer = !drawer"
        round
        dense
        icon="menu"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "HeaderPrincipal",
  setup() {
    return {};
  },
};
</script>
