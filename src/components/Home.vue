<template>
<div>
  <menu-bar v-on:logout="$emit('logout')" />
  <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
  <div class="d-flex">
    <div class="d-flex p-3 flex-column">
      <b-btn class="btn-success mb-3" @click="createAccount">New account</b-btn>
      <b-btn class="mb-3">Add expense</b-btn>
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
      this.$http.get('accounts').then(resp => {
        this.accountList = resp.data
      })
    },
    createAccount () {
      this.$router.push({name: 'NewAccount'})
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
  }
}
</script>
