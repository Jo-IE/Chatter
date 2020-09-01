<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Compose
            </div>

            <div class="subtitle-1 font-weight-light">
              Create a new post
            </div>
          </template>

          <v-form
            ref="form"
            v-model="valid"

            lazy-validation
            @submit.prevent="handleSubmit"
          >
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="userId"
                    label="User Id"
                    :rules="idRules"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-textarea

                    v-model="title"
                    filled
                    label="Title"
                    auto-grow
                    :rules="titleRules"
                    required
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="12"
                >
                  <v-textarea

                    v-model="body"
                    filled
                    label="Body"
                    auto-grow
                    :rules="bodyRules"
                    required
                  />
                </v-col>

                <v-btn
                  absolute
                  dark
                  fab
                  bottom
                  right
                  color="#26c6da"
                  type="submit"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          avatar="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=White&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Black"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              PROFILE
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              Janice Doe
            </h4>

            <p class="font-weight-light grey--text">
              She who arrival end how fertile enabled. Brother she add yet see minuter natural smiling article painted. Themselves at dispatched interested insensible am be prosperous reasonably it. In either so spring wished. Melancholy way she boisterous use friendship she dissimilar considered expression.
            </p>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'UserProfile',
    data: () => ({
      valid: true,
      userId: '',
      idRules: [
        v => !!v || 'User ID is required',

      ],
      title: '',
      titleRules: [
        v => !!v || 'A title is required',

      ],
      body: '',
      bodyRules: [
        v => !!v || 'Post content is required',

      ],

    }),
    methods: {
      handleSubmit (evt) {
        this.$refs.form.validate()
        if (this.valid) {
          const payload = { title: this.title, body: this.body, userId: this.userId }
          this.$store.dispatch('createPost', payload)
        }
      },

    },
  }
</script>
