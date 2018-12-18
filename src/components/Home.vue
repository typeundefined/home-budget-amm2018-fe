<template>
  <div>
    <v-flex xs12>
      <v-container grid-list-xl>
        <v-layout
          row
          wrap
          align-center
        >
          <account-grid-list></account-grid-list>
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
import AccountGridList from '@/components/AccountGridList'
import store from '../store/store'

export default {
  name: 'Home',
  components: {
    'account-short': AccountShort,
    'account-grid-list': AccountGridList
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.accounts.accounts.length) {
      next()
    } else {
      store.dispatch('accounts/getAccounts')
        .then(next)
        .catch(error => {
          console.log(error)
        })
    }
  },
  methods: {},
  data() {
    return {
      darkTheme: false,
      errorText: '',
      showAlert: false
    }
  },
  mounted() { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
