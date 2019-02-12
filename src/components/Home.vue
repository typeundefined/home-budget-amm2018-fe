<template>
<div>
  <menu-bar v-on:logout="$emit('logout')" />
  <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
  <div class="d-flex">
    <div class="d-flex p-3 flex-column">
      <b-btn class="btn-success mb-3" @click="createAccount">New account</b-btn>
      <b-btn class="mb-3">Add expense</b-btn>
      <b-btn
        block
        color="primary"
        dark
        @click="ok"
      >
        Show Snackbar
      </b-btn>
    </div>
    <div class="d-flex flex-wrap p-3">
      <account-short v-for="{id, name, description, currency, currentValue} in accountList" :key="id"
            :id="id"
            :name="name"
            :description="description"
            :currency="currency.code"
            :amount="currentValue"
      />
    </div>
  </div>
</div>
</template>

<script>
import AccountShort from '@/components/AccountShort'
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Home',
  components: {
    'account-short': AccountShort,
    'menu-bar': MenuBar
  },
  methods: {
    loadAccounts () {
      this.$http.get('account').then(resp => {
        this.accountList = resp.data
        // this.ok(resp.status)
      }).catch(err => {
        // TODO: improve this
        console.log(err.status)
        // this.ok(err.toString())
      })
    },
    createAccount () {
      this.$router.push({name: 'NewAccount'})
    },
    showNotification(status) {
      this.$snack.success({
        text: 'Conversa arquivada',
        button: status
      })
      this.$snack.metodo('My Message')
    }
  },
  data () {
    return {
      accountList: [],
      errorText: '',
      showAlert: false
    }
  },
  mounted () {
    this.loadAccounts()
    this.showNotification()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
