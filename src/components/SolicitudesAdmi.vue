<template>
  <div class="q-pa-md">
    <q-table
      grid
      :card-container-class="cardContainerClass"
      title="Solicitudes disponibles"
      :rows="solicitudes"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="rowsPerPageOptions"
      no-data-label="Sin solicitudes por atender"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Buscar"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card class="my-card" flat bordered>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">{{ props.row.coordinacion }}</div>
                <div class="text-h5 q-mt-sm q-mb-xs">
                  {{ props.row.problema }}
                </div>
                <div class="text-caption text-grey">
                  {{
                    props.row.comentarioAdicional
                      ? props.row.comentarioAdicional
                      : "Sin comentarios adicionales"
                  }}
                </div>
              </q-card-section>

              <q-card-section class="col-5 flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card-section>
            <q-separator />
            <q-card-section>
              {{
                props.row.administrador
                  ? `Esta solicitud esta siendo atendida por: ${props.row.administrador}`
                  : "Solicitud sin atender"
              }}
            </q-card-section>

            <q-separator />

            <q-card-actions>
              <q-toggle
                v-show="
                  (!props.row.enProceso && !props.row.terminada) ||
                  (props.row.enProceso && !props.row.terminada)
                "
                v-model="props.row.enProceso"
                icon="alarm"
                @click="props.row.administrador = admiID"
              />
              <q-toggle
                v-show="props.row.enProceso"
                v-model="props.row.terminada"
                checked-icon="check"
                color="green"
                unchecked-icon="clear"
              />
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  { name: "coordinacion", label: "Coordinacion", field: "coordinacion" },
  { name: "tipo", label: "Tipo de problema", field: "tipo" },
  { name: "comentarios", label: "Informacion adicional", field: "comentarios" },
  { name: "enproceso", label: "enproceso", field: "enproceso" },
  { name: "terminada", label: "terminada", field: "terminada" },
];

import { admiStore } from "stores/admiStore";
import { useQuasar } from "quasar";
import { ref } from "@vue/reactivity";
import { computed, onMounted, watch } from "@vue/runtime-core";
export default {
  setup() {
    const $q = useQuasar();
    const useAdmiStore = admiStore();
    const filter = ref("");
    function getItemsPerPage() {
      if ($q.screen.lt.sm) {
        return 3;
      }
      if ($q.screen.lt.md) {
        return 6;
      }
      return 9;
    }
    const pagination = ref({
      page: 1,
      rowsPerPage: getItemsPerPage(),
    });

    watch(
      () => $q.screen.name,
      () => {
        pagination.value.rowsPerPage = getItemsPerPage();
      }
    );
    return {
      admiID: useAdmiStore.admiID,
      solicitudes: store.solicitudesSinCompletar,
      filter,
      store,
      pagination,
      columns,
      cardContainerClass: computed(() => {
        return $q.screen.gt.xs
          ? "grid-masonry grid-masonry--" + ($q.screen.gt.sm ? "3" : "2")
          : null;
      }),
      rowsPerPageOptions: computed(() => {
        return $q.screen.gt.xs ? ($q.screen.gt.sm ? [3, 6, 9] : [3, 6]) : [3];
      }),
    };
  },
  methods: {},
};
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 350px

.grid-masonry
  flex-direction: column
  height: 500px

  &--2
    > div
      &:nth-child(2n + 1)
        order: 1
      &:nth-child(2n)
        order: 2

    &:before
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 1
  &--3
    > div
      &:nth-child(3n + 1)
        order: 1
      &:nth-child(3n + 2)
        order: 2
      &:nth-child(3n)
        order: 3

    &:before,
    &:after
      content: ''
      flex: 1 0 100% !important
      width: 0 !important
      order: 2
</style>
