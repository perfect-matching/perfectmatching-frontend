<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        :label="labelName"
        prepend-icon="event"
        :error-messages="errorMessages"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="setDate()">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: {
    labelName: String,
    errorMessages: Array
  },

  data: () => ({
    date: "",
    menu: false
  }),

  methods: {
    setDate() {
      this.$refs.menu.save(this.date);
      this.$emit("input", this.$_moment(this.date).format());
    }
  }
};
</script>

<style scoped></style>
