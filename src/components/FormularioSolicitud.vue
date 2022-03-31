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

export default {
  setup() {
    return {
      name,
      age,
      accept,
      coordinacion: ref(null),
      coordinaciones: [
        "Gerencia",
        "RRHH",
        "Contabilidad",
        "Recaudacion",
        "Planificacion y Presupuesto",
      ],
      problema: ref(null),
      tipoDeProblema: ["Internet", "Equipo", "Otro"],
      comentarioAdicional: ref(""),

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
