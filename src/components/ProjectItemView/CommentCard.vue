<template>
  <v-card class="mx-auto" color="#26c6da" dark>
    <v-card-text class="headline font-weight-bold">"백엔드는 스프링을 쓰나요, Node.js 를 쓰나요?"</v-card-text>
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
          <v-list-tile-title>Nick name</v-list-tile-title>
        </v-list-tile-content>
        <v-layout align-center justify-end>
          <span class="subheading mr-2">2019년 02월 03일</span>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "commentCard",
  data: () => ({
    //
  })
};
</script>

<style scoped></style>
