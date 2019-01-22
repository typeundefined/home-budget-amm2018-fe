<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm card">
        <div class="card-body">
          <h3 class="card-title">Home Budget</h3>
          <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
          <br>
          <form id="login">
            <div class="form-group">
              <label for="username">Username: </label>
              <input v-model="username" name="username" id="username">
            </div>
            <div class="form-group">
              <label for="pwd">Password: </label>
              <input v-model="password" type="password" name="password" id="pwd">
            </div>
            <div class="form-group">
              <router-link to="/register">Register</router-link>
              <b-btn @click="doLogin" variant="info" class="m-1">Log in</b-btn>
            </div>

          </form>
        </div>
      </div>
      <div class="col-sm"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showAlert: false,
      errorText: '',
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin () {
      let reqObj = {
        username: this.username,
        password: this.password
      }

      this.$http.post('auth/login', reqObj)
        .then(response => {
          this.showAlert = false
          this.$emit('jwtUpdated', response.data.accessToken)
          localStorage.setItem('accessToken', 'Bearer ' + response.data.accessToken)
        })
        .catch(err => {
          this.errorText = err.data.message
          this.showAlert = true
        })
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
  margin-top: 12rem;
}

div.card {
  max-width: 28em;
}
</style>
