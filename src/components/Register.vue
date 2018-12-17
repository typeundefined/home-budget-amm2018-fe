<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Register a User</div>
            </div>
          </v-card-title>
          <v-card-text class="pt-4">
            <v-form>
              <v-text-field
                label="Username"
                v-model="username"
                name="username"
                id="username"
                :rules="usernameRules"
                required
              ></v-text-field>
              <v-text-field
                label="Full name"
                v-model="fullname"
                name="fullname"
                id="fullname"
                :rules="fullnameRules"
                required
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :error-messages="pwdError"
                type="password"
                @change="checkPwd"
                name="password"
                id="pwd"
              ></v-text-field>
              <v-text-field
                label="Repeat password"
                v-model="password1"
                :error-messages="pwdError"
                type="password"
                @change="checkPwd"
                name="password1"
                id="password1"
                required
              ></v-text-field>
              <div class="form-group">
                <v-btn
                  justify-space-between
                  @click="register"
                  :disabled="pwdError != null"
                  variant="info"
                  color="info"
                >Register</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Register',
  data () {
    return {
      showAlert: false,
      showSuccess: false,
      errorText: '',
      pwdError: null,
      username: '',
      usernameRules: [v => !!v || 'Username is required'],
      fullname: '',
      fullnameRules: [v => !!v || 'Full Name is required'],
      password: '',
      password1: ''
    }
  },
  methods: {
    ...mapMutations(['showSnackbar', 'closeSnackbar']),
    openSnackbar (message, color) {
      this.showSnackbar({ text: message, color: color })
    },
    checkPwd () {
      this.pwdError = null
      if (this.password !== this.password1) {
        this.pwdError = 'Passwords do not match'
      }
    },
    register () {
      this.openSnackbar(
        `Username ${this.username} has been registered! Redirect to homepage.`,
        'info'
      )
      this.$router.push({
        name: 'Home'
      })
      // TODO: Implement
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
