<template>
  <v-card class="comment_card mx-auto" color="#fff" flat dark>
    <v-card-text class="headline font-weight-bold">{{
      comment.content
    }}</v-card-text>
    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-btn icon>
            <v-avatar :tile="false" :size="36">
              <img
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                alt="avatar"
              />
            </v-avatar>
          </v-btn>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title class="nick_name">
            {{ comment.userName }}
          </v-list-tile-title>
        </v-list-tile-content>
        <v-layout align-center justify-end>
          <span class="create_date subheading mr-2">
            {{ comment.createdDate }}
          </span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "commentCard",
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.headline {
  color: #898989;
  font-size: 17px !important;
}
.nick_name {
  color: #232323;
}
.create_date {
  color: #b6b6b6;
}
</style>
