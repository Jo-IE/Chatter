<template>
  <v-container

    fluid
  >
    <v-row>
      <v-col cols="12">
        <base-material-card
          height="600"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Search posts by Id
            </div>
          </template>
          <v-row>
            <v-col md="4">
              <v-text-field
                v-model="postId"
                class="mt-5 mx-auto"
                :label="$t('search')"
                solo
                :rules="[rules.required, rules.number, rules.length]"
              >
                <template
                  v-if="$vuetify.breakpoint.mdAndUp"
                  v-slot:append-outer
                >
                  <v-btn
                    class="mt-n2"
                    elevation="1"
                    fab
                    small
                    @click="search"
                  >
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
            >
              <v-card
                v-if="postResult.id"
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
                  <span class="title font-weight-light">{{ postResult.title }}</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                  {{ postResult.body }}
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
                      <v-list-item-title> User {{ postResult.userId }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
              <v-progress-circular
                v-else-if="loading"
                indeterminate
                color="primary"
              />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    data: () => ({
      postId: '',
      rules: {
        required: value => !!value || 'Required.',
        number: value => !isNaN(Number(value)) || 'Please enter a valid ID',
        length: value => Number(value) <= 10 || 'ID cannot be greater than 10',

      },

    }),
    computed: {
      postResult () {
        return this.$store.state.postResult
      },
      loading () {
        return this.postResult.id === ''
      },
    },
    methods: {
      search () {
        const payload = { query: this.postId }
        this.$store.dispatch('searchPosts', payload)
      },
    },
  }
</script>
