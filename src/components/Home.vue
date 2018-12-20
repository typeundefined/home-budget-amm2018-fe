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
        color="blue"
        @click="accountDialog = true"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog
      v-model="accountDialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title><span class="headline">Add account</span></v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="Name"
                  v-model="account.name"
                  :rules="nameRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Decsription"
                  v-model="account.description"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-autocomplete
                  :items="currencies()"
                  item-text="humanReadableName"
                  item-value="code"
                  v-model="account.currency.code"
                  label="Currency"
                ></v-autocomplete>
              </v-flex>
              <v-card-actions>
                <v-btn
                  color="darken-1"
                  flat="flat"
                  @click="accountDialog = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click="createAccount(account)"
                >
                  Create
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AccountShort from '@/components/AccountShort'
import AccountGridList from '@/components/AccountGridList'
import store from '../store/store'
import { mapGetters, mapActions } from 'vuex'

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
  methods: {
    ...mapGetters({
      currencies: 'currencies/currencies'
    }),
    ...mapActions({
      addAccount: 'accounts/addAccount'
    }),
    createAccount(payload) {
      // TODO: Add validation
      this.addAccount(payload).then(() => {
        this.account = {
          name: '',
          currency: {
            code: ''
          },
          description: null
        }
        this.accountDialog = false
      })
    }
  },
  data() {
    return {
      darkTheme: false,
      errorText: '',
      showAlert: false,
      accountDialog: false,
      account: {
        name: '',
        currency: {
          code: ''
        },
        description: null
      },
      nameRules: [v => !!v || 'Name is required']
    }
  },
  mounted() {
    if (!store.state.currencies.currencies.length) {
      store.dispatch('currencies/getCurrencies')
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
