<template>
  <v-layout align-center>
    <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
    <v-text-field
      :disabled="!enabled"
      :label="labelName"
      type="number"
      outline
    ></v-text-field>
  </v-layout>
</template>
<script>
export default {
  props: {
    labelName: String
  },
  data: () => ({
    enabled: false
  })
};
</script>
