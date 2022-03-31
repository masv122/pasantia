<template>
  <div class="q-pa-md">
    <q-table
      grid
      :card-container-class="cardContainerClass"
      title="Solicitudes disponibles"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <template v-slot:item="props">
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card>
            <q-card-section class="text-center">
              Solicitud pendiente
              <br />
              <strong>{{ props.row.coordinacion }}</strong>
              <br />
              <strong>{{ tipoProblema(props.row.tipo) }}</strong>
            </q-card-section>
            <q-separator />
            <q-card-section class="flex flex-center" style="font-size: 20px">
              <div>{{ props.row.comentarios }}</div>
            </q-card-section>
            <q-separator />
            <q-card-section class="flex flex-center" style="font-size: 20px">
              <q-toggle v-model="props.row.enProceso" icon="alarm" />
              <q-toggle
                v-model="props.row.terminada"
                checked-icon="check"
                color="green"
                unchecked-icon="clear"
              />
            </q-card-section>
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

const rows = [
  {
    coordinacion: "Gerencia",
    tipo: 0,
    comentarios: "la compu no enciente",
    enProceso: false,
    terminada: false,
  },
  {
    coordinacion: "enfermeria",
    tipo: 1,
    comentarios: "se daño un cable",
    enProceso: true,
    terminada: false,
  },
  {
    coordinacion: "RRHH",
    tipo: 2,
    comentarios: "ratio",
    enProceso: true,
    terminada: false,
  },
  {
    coordinacion: "Secretaria",
    tipo: 1,
    comentarios: "ratio",
    enProceso: false,
    terminada: true,
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
  methods: {
    tipoProblema(tipo) {
      if (tipo == 0) {
        return "Equipo";
      }
      if (tipo == 1) {
        return "Internet";
      } else {
        return "otro";
      }
    },
  },
};
</script>

<style lang="sass">
.grid-masonry
  flex-direction: column
  height: 700px

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
