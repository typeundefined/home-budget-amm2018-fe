<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm card">
        <div class="card-body">
          <h3 class="card-title">Register a User</h3>
          <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
          <b-alert :show="showSuccess" variant="success">User {{username}} has been registered! Would you like to <router-link to="/login">log in</router-link>?</b-alert>
          <br>
          <form id="register">
            <div class="form-group">
              <label for="username">Username: </label>
              <input v-model="username" name="username" id="username">
            </div>
            <div class="form-group">
              <label for="fullname">Full name: </label>
              <input v-model="fullname" name="fullname" id="fullname">
            </div>
            <div class="form-group">
              <label for="pwd">Password: </label>
              <input v-model="password" @change="checkPwd" type="password" name="password" id="pwd">
              <small :show="pwdError != null" class="form-text text-error">{{pwdError}}</small>
            </div>
            <div class="form-group">
              <label for="pwd1">Repeat password: </label>
              <input v-model="password1" @change="checkPwd" type="password" id="pwd1">
            </div>
            <b-btn :disabled="pwdError != null" @click="register" variant="info" class="m-1">Register</b-btn>

          </form>
        </div>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      showAlert: false,
      showSuccess: false,
      errorText: '',
      pwdError: null,
      username: '',
      fullname: '',
      password: '',
      password1: ''
    }
  },
  methods: {
    checkPwd () {
      this.pwdError = null
      if (this.password !== this.password1) {
        this.pwdError = 'Passwords do not match'
      }
    },
    register () {
      var reqObj = {
        'username': this.username,
        'password': this.password,
        'fullName': this.fullname
      }
      this.$http.post('auth/register', reqObj).then(
        response => {
          this.showAlert = false
          this.showSuccess = true
        },
        err => {
          this.showAlert = true
          this.showSuccess = false
          this.errorText = err.data.message
        }
      )
    }
  }
}
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
