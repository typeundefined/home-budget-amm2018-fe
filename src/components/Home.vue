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

export default {
  name: 'Home',
  components: {
    'account-short': AccountShort
  },
  methods: {
    loadAccounts() {
      this.$http
        .get('account')
        .then(resp => {
          this.accountList = resp.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  data() {
    return {
      accountList: [],
      darkTheme: false,
      errorText: '',
      showAlert: false
    }
  },
  mounted() {
    this.loadAccounts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
