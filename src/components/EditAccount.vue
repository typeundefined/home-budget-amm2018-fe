<template>
<div>
  <menu-bar v-on:logout="$emit('logout')" />
  <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
  <div class="d-flex">
    <div class="d-flex p-3 flex-column">
      <b-btn class="btn-success mb-3">New account</b-btn>
      <b-btn class="mb-3">Add expense</b-btn>
    </div>
    <div class="d-flex flex-wrap p-3">
      <b-form>
        <b-form-group label="Name:" label-for="name">
          <b-form-input v-model="name" id="name"></b-form-input>
        </b-form-group>
        <b-form-group label="Description:" label-for="desc">
          <b-form-input v-model="description" id="desc"></b-form-input>
        </b-form-group>
        <b-form-group label="Currency:" label-for="curr">
          <b-form-select v-model="currency" id="curr">
            <option v-for="curr in currencyList" v-bind:key="curr.code" v-bind:value="curr.code">
              {{ curr.humanReadableName }}
            </option>
          </b-form-select>
        </b-form-group>

        <div class="form-group">
          <b-btn @click="save" variant="info" class="m-1">Save</b-btn>
        </div>
      </b-form>
    </div>
  </div>
</div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'EditAccount',
  props: ['id'],
  components: {
    'menu-bar': MenuBar
  },
  methods: {
    save () {
      let req = {
        currency: {
          code: this.currency
        },
        name: this.name,
        description: this.description
      }
      this.$http.post('accounts', req).then(
        response => {
          this.showAlert = false
          this.$router.push({name: 'Home'})
        },
        err => {
          this.showAlert = true
          this.errorText = err.data.message
        }
      )
    },
    loadCurrencies () {
      this.$http.get('currencies').then(
        response => {
          this.showAlert = false
          this.currencyList = response.data
        },
        err => {
          this.showAlert = true
          this.errorText = err.data.message
        }
      )
    }
  },
  data () {
    return {
      name: '',
      description: '',
      currencyList: [],
      currency: null,
      errorText: '',
      showAlert: false
    }
  },
  created () {
    this.loadCurrencies()
  },
  watch: {
    '$route': 'loadCurrencies'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
