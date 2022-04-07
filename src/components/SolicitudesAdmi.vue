<template>
  <q-table
    title="Mis solicitudes"
    :rows="solicitudes"
    :columns="columns"
    row-key="enProceso"
    grid
    hide-header
  >
    <template v-slot:item="props">
      <div
        class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
        :style="props.selected ? 'transform: scale(0.95);' : ''"
      >
        <q-card :class="props.selected ? 'bg-grey-2' : ''">
          <q-card-actions>
            <q-toggle
              v-show="
                (!props.row.enProceso && !props.row.terminada) ||
                (props.row.enProceso && !props.row.terminada)
              "
              v-model="props.row.enProceso"
              icon="alarm"
              @click="cambiarProceso(props.row)"
            />
            <q-toggle
              v-show="props.row.enProceso || props.row.terminada"
              v-model="props.row.terminada"
              checked-icon="check"
              color="green"
              :disable="props.row.terminada"
              unchecked-icon="clear"
              @click="
                props.row.enProceso = !props.row.enProceso;
                cambiarProceso(props.row);
              "
            />
          </q-card-actions>
          <q-separator />
          <q-list dense>
            <q-item v-for="col in props.cols" :key="col.name">
              <q-item-section>
                <q-item-label>{{ col.label }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label caption>{{ col.value }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <q-card-actions v-show="props.row.enProceso">
            <div class="q-ml-xs">
              <!-- Siendo atendido por: {{ administrador(props.row) }} -->
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </template>
  </q-table>
  {{ administradores }}
</template>

<script>
import { onMounted, ref, computed, watch, reactive } from "@vue/runtime-core";
import { useQuasar } from "quasar";
import {
  getDatabase,
  ref as refdb,
  onValue,
  onChildChanged,
  update,
  child,
  get,
} from "firebase/database";
import { useSesion } from "src/stores/sesion";
const columns = [
  { name: "coordinacion", label: "Coordinacion", field: "coordinacion" },
  { name: "problema", label: "Tipo de problema", field: "problema" },
  {
    name: "comentarioAdicional",
    label: "Informacion adicional",
    field: "comentarioAdicional",
  },
];

export default {
  setup() {
    const db = getDatabase();
    const $q = useQuasar();
    const solicitudes = reactive([]);
    const sesion = useSesion();
    const administradores = reactive([]);
    onMounted(() => {
      var redb = refdb(db, "solicitudes/");
      onValue(
        redb,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            if (!childSnapshot.val().terminada) {
              var solicitud = childSnapshot.val();
              solicitud.key = childSnapshot.key;
              solicitudes.push(solicitud);
            }
          });
        },
        {
          onlyOnce: true,
        }
      );
      solicitudes.forEach((s) => {
        if (s.administrador) {
          const administrador = buscarAdministrador(s.administrador);
          administradores.push(administrador);
        }
      });
      onChildChanged(redb, (data) => {
        const refSolicitudes = solicitudes;
        const posicion = refSolicitudes.findIndex(
          (soli) => soli.key === data.key
        );
        if (data.val().terminada) {
          solicitudes.length;
          solicitudes.splice(posicion, 1);
        } else {
          solicitudes[posicion] = data.val();
        }
      });
      console.log(solicitudes);
    });

    const cambiarProceso = (solicitud) => {
      var redb = refdb(db, "solicitudes/" + solicitud.key);
      if (solicitud.enProceso) solicitud.administrador = sesion.sesion.uid;
      if (!solicitud.terminada && !solicitud.enProceso)
        solicitud.administrador = "";
      update(redb, solicitud);
    };

    const buscarAdministrador = async (id) => {
      try {
        const resultado = await get(
          child(refdb(getDatabase()), `usuarios/${id}`)
        );
        if (resultado.exists()) {
          return resultado.val().nombre;
        } else {
          return "error al buscar";
        }
      } catch (error) {
        return error;
      }
    };

    return {
      sesion,
      buscarAdministrador,
      administradores,
      columns,
      cambiarProceso,
      solicitudes,
    };
  },
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
