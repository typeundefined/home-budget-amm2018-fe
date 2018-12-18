<template>
  <div>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout
          row
          wrap
          align-center
        >
          <account-short
            v-for="{id, name, description, currency, currentValue} in accountList"
            :key="id"
            :id="id"
            :name="name"
            :description="description"
            :currency="currency.code"
            :amount="currentValue"
          />
        </v-layout>
      </v-container>
    </v-flex>
    <v-fab-transition>
      <v-btn
        dark
        fab
        fixed
        bottom
        right
        color="pink"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import AccountShort from '@/components/AccountShort'
import AccountService from '../services/account'

export default {
  name: 'Home',
  components: {
    'account-short': AccountShort
  },
  methods: {},
  data() {
    return {
      accountList: [],
      darkTheme: false,
      errorText: '',
      showAlert: false
    }
  },
  mounted() {
    AccountService.getAccounts().then(response => {
      this.accountList = response.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
