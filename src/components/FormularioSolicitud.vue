<template>
  <div class="q-pa-md shadow-1" style="width: 600px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="text-h5">Formulario de solicitud</div>
      <q-separator inset />
      <q-select
        standout="bg-teal text-white"
        class="q-mb-lg"
        style="max-width: 300px"
        v-model="coordinacion"
        :options="coordinaciones"
        label="Coordinación"
      />

      <q-select
        standout="bg-teal text-white"
        style="max-width: 300px"
        class="q-mb-lg"
        v-model="problema"
        :options="tipoDeProblema"
        label="Tipo de problema"
      />

      <q-input
        class="q-mb-lg"
        label="Comentarios adicionales"
        v-model="comentarioAdicional"
        filled
        type="textarea"
      />

      <div>
        <q-btn label="Enviar" type="submit" color="primary" />
        <q-btn
          label="Restablecer"
          type="reset"
          color="negative"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useQuasar } from "quasar";

export default {
  setup() {
    const coordinacion = ref(null);
    const problema = ref(null);
    const comentarioAdicional = ref("");
    const $q = useQuasar();
    const resetForm = function () {
      coordinacion.value = null;
      problema.value = null;
      comentarioAdicional.value = "";
    };
    return {
      problema,
      coordinacion,
      comentarioAdicional,
      coordinaciones: [
        "Gerencia",
        "RRHH",
        "Contabilidad",
        "Recaudacion",
        "Planificacion y Presupuesto",
      ],
      tipoDeProblema: ["Internet", "Equipo", "Otro"],

      onSubmit() {
        store.solicitudes.push({
          coordinacion: coordinacion.value,
          problema: problema.value,
          comentarioAdicional: comentarioAdicional.value,
          enProceso: false,
          terminada: false,
          solicitante: null,
          id: uuidv4(),
          administrador: null,
        });
        $q.notify({
          type: "positive",
          message: "Su solicitud fue enviada con exito.",
        });
        resetForm();
      },

      onReset() {
        resetForm();
      },
    };
  },
};
</script>
