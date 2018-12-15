<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card>
        <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
        <b-alert :show="showSuccess" variant="success">
          User {{username}} has been registered! Would you like to
          <router-link to="/login">log in</router-link>?
        </b-alert>
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
              required
            ></v-text-field>
            <v-text-field
              label="Full name"
              v-model="fullname"
              name="fullname"
              id="fullname"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              @change="checkPwd"
              name="password"
              id="pwd"
            ></v-text-field>
            <v-text-field
              label="Repeat password"
              v-model="password1"
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      showAlert: false,
      showSuccess: false,
      errorText: "",
      pwdError: null,
      username: "",
      fullname: "",
      password: "",
      password1: ""
    };
  },
  methods: {
    checkPwd() {
      this.pwdError = null;
      if (this.password !== this.password1) {
        this.pwdError = "Passwords do not match";
      }
    },
    register() {
      console.log("IMPLEMENT ME");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  text-align: right;
}

div.container-fluid {
  margin-top: 10rem;
}

div.card {
  max-width: 34em;
}

.text-error {
  color: red;
}
</style>
