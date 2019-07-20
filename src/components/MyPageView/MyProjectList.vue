<template>
  <article>
    <v-container fluid grid-list-md>
      <h3>프로젝트 이력</h3>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <my-project-card></my-project-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md4>
          <my-project-card></my-project-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md4>
          <my-project-card></my-project-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md4>
          <my-project-card></my-project-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md4>
          <my-project-card></my-project-card>
        </v-flex>
      </v-layout>
    </v-container>
  </article>
</template>

<script>
import MyProjectCard from "./MyProjectCard.vue";
export default {
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  }),
  components: {
    MyProjectCard
  }
};
</script>

<style scoped>
article {
  width: 100%;
}
</style>
