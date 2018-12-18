<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card>
          <v-card-text class="pt-4">
            <v-form @keyup.native.enter="doLogin">
              <v-text-field
                label="Username"
                v-model="username"
                name="username"
                id="username"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                type="password"
                name="password"
                id="pwd"
              ></v-text-field>
              <div class="form-group">
                <v-btn
                  justify-space-between
                  to="/register"
                >Register</v-btn>
                <v-btn
                  justify-space-between
                  @click="doLogin"
                  variant="info"
                  color="info"
                >Log in</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      showAlert: false,
      errorText: '',
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({ login: 'auth/login' }),
    doLogin() {
      this.login({username: this.username, password: this.password})
        .then(() => this.$router.push({path: '/'}))
        .catch(error => {
          console.log(error)
        })
      // AuthService.login(this.username, this.password)
      //   .then(response => {
      //     this.showAlert = false
      //     this.$emit('jwtUpdated', response.data.accessToken)
      //   }).catch(err => {
      //     console.log(err)
      //   })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
