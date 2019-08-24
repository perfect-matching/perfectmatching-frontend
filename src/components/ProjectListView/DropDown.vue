<template>
  <div class="drop_box">
    <v-select
      :items="items"
      :label="title"
      :value="value"
      @change="selectValue"
    ></v-select>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    value: String,
    items: Array
  },

  methods: {
    selectValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>
