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
              <small :show="nameError != null" class="form-text text-error">{{nameError}}</small>
              <label for="name">Name: </label>
              <input v-model="name" @change="checkName" name="name" id="name">
            </div>
            <div class="form-group">
              <small :show="descriptionError != null" class="form-text text-error">{{descriptionError}}</small>
              <label for="description">Description: </label>
              <input v-model="description" @change="checkDescription" name="description" id="description">
            </div>
            <div class="form-group">
              <small :show="currencyError != null" class="form-text text-error">{{currencyError}}</small>
              <div>
                <b-dropdown id="ddown-divider" class="m-2" v-bind:text="chosenCurrency">
                  <b-dropdown-item-button v-for="currency in currencyList"
                                          :key="currency.code"
                                          @click="setCurrency(currency.code, currency.humanReadableName)"
                                          >{{currency.code}} - {{currency.humanReadableName}}</b-dropdown-item-button>
                </b-dropdown>
              </div>
            </div>
            <b-btn :disabled="nameError != null || descriptionError != null || currencyError != null" @click="createAccount" variant="info" class="m-1">Create</b-btn>
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
      chosenCurrency: 'Currency',
      nameError: 'Enter name',
      descriptionError: 'Enter description',
      currencyError: 'Select currency',
      currencyList: [],
      name: '',
      description: '',
      currencyCode: ''
    }
  },
  mounted () {
    this.getCurrencyList()
  },
  methods: {
    checkName () {
      if (this.name === '' || this.name == null) {
        this.nameError = 'Enter name'
      } else {
        this.nameError = null
      }
    },
    checkDescription () {
      if (this.description === '' || this.description == null) {
        this.descriptionError = 'Enter description'
      } else {
        this.descriptionError = null
      }
    },
    setCurrency (code, humanReadableName) {
      this.chosenCurrency = code + ' - ' + humanReadableName
      this.currencyCode = code
      if (this.currencyCode === '' || this.currencyCode == null) {
        this.currencyError = 'Select currency'
      } else {
        this.currencyError = null
      }
    },
    createAccount () {
      let accObj = {
        name: this.name,
        description: this.description,
        currency: { code: this.currencyCode }
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
    },
    getCurrencyList () {
      this.$http.get('currency', {
        headers: {
          'Authorization': localStorage.getItem('accessToken')
        }
      }).then(resp => {
        this.currencyList = resp.data
      }).catch(err => {
        // TODO: improve this
        console.log(err)
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
