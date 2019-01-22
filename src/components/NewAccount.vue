<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm card">
        <div class="card-body">
          <h3 class="card-title">Create Account</h3>
          <br>
          <form id="createAccount">
            <div class="form-group">
              <label for="name">Name: </label>
              <input v-model="name" name="name" id="name">
            </div>
            <div class="form-group">
              <label for="description">Description: </label>
              <input v-model="description" name="description" id="description">
            </div>
            <div class="form-group">
              <label for="code">Currency code: </label>
              <input v-model="code" name="code" id="code">
            </div>
            <b-btn @click="createAccount" variant="info" class="m-1">Create</b-btn>
          </form>
        </div>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewAccount',
  data () {
    return {
      name: '',
      description: '',
      code: ''
    }
  },
  methods: {
    createAccount () {
      let accObj = {
        name: this.name,
        description: this.description,
        currency: { code: this.code }
      }

      this.$http.post('account', accObj, {
        headers: {
          'Authorization': localStorage.getItem('accessToken')
        }
      })
        .then(response => {
          this.showAlert = false
          this.$emit('jwtUpdated', response.data.accessToken)
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
    margin-top: 10rem;
  }

  div.card {
    max-width: 34em;
  }

  .text-error {
    color: red;
  }
</style>
