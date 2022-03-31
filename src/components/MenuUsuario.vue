<template>
  <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="400">
    <q-scroll-area
      style="
        height: calc(100% - 150px);
        margin-top: 150px;
        border-right: 1px solid #ddd;
      "
    >
      <q-list padding>
        <q-item clickable v-ripple :to="{ name: 'crear solicitud' }">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section> Crear solicitud </q-item-section>
        </q-item>

        <q-item clickable v-ripple :to="{ name: 'solicitudes usuario' }">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section> Mis solicitudes </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="https://pbs.twimg.com/media/B33SGbYIMAAhrVR.png"
      :ratio="16 / 9"
      style="height: 150px"
    >
      <div class="absolute-top text-center">
        <q-icon name="person" size="2em" />Usuario
      </div>
    </q-img>
  </q-drawer>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {};
  },
};
</script>
