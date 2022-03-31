<template>
  <div class="q-pa-md">
    <q-table
      title="Mis solicitudes"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:expanded="expanded"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />

          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-toggle
              v-model="props.row.terminada"
              checked-icon="check"
              color="green"
              unchecked-icon="alarm"
              disable
            />
          </q-td>

          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
const columns = [
  { name: "coordinacion", label: "Coordinacion", field: "coordinacion" },
  { name: "tipo", label: "Tipo de problema", field: "tipo" },
  { name: "comentarios", label: "Informacion adicional", field: "comentarios" },
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
    estadoSolicitud(enProceso, terminada) {
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
