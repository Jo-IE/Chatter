<template>
  <v-row v-if="allPosts&& allPosts.length >0">
    <v-col
      v-for="post in allPosts"
      :key="post.id"

      cols="12"
      md="4"
    >
      <v-card
        class="mx-auto"
        color="#26c6da"
        dark
        max-width="400"
      >
        <v-icon
          large
          left
        >
          mdi-comment-quote-outline
        </v-icon>
        <v-card-title>
          <span class="black--text headline font-weight-bold">{{ post.title }}</span>
        </v-card-title>

        <v-card-text class=" white--text font-weight-bold">
          {{ post.body }}
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title> User {{ post.userId }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <p
    v-else
    class="heading font-weight-bold"
  >
    Error displaying posts
  </p>
</template>

<script>
  import { mapState } from 'vuex'
  export default {

    name: 'AllPosts',
    data: () => ({

    }),

    computed: mapState(['allPosts']),
    created () {
      this.$store.dispatch('getPosts')
    },
  }
</script>
