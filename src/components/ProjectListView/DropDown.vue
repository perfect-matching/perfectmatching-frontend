<template>
  <div class="drop_box">
    <p>{{ title }}</p>
    <v-overflow-btn
      :items="dropdown_font"
      label="Overflow Btn"
      target="#dropdown-example"
    ></v-overflow-btn>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data: () => ({
    dropdown_font: ["Arial", "Calibri", "Courier", "Verdana"]
  })
};
</script>
