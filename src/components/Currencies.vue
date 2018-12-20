<template>
  <v-flex>
    <v-list two-line>
      <template v-for="(currency, index) in currencies">
        <v-list-tile :key="currency.code">
          <v-list-tile-content>
            <v-list-tile-title v-html="currency.code"></v-list-tile-title>
            <v-list-tile-sub-title v-html="currency.humanReadableName"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              icon
              ripple
            >
              <v-icon color="grey lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>
    <v-fab-transition>
      <v-btn
        dark
        fab
        fixed
        bottom
        right
        color="blue"
        @click="currencyDialog = true"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
    <v-dialog
      v-model="currencyDialog"
      max-width="600px"
    >
      <v-card>
        <v-card-title><span class="headline">Add currency</span></v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field
                  label="Code"
                  v-model="currency.code"
                  :rules="codeRule"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Human Readable Name"
                  v-model="currency.humanReadableName"
                ></v-text-field>
              </v-flex>
              <v-card-actions>
                <v-btn
                  color="darken-1"
                  flat="flat"
                  @click="currencyDialog = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click="createCurrency(currency)"
                >
                  Create
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import store from '../store/store'

export default {
  name: 'currencies',
  props: [],
  created() { },
  beforeRouteEnter(to, from, next) {
    if (store.state.currencies.currencies.length) {
      next()
    } else {
      store.dispatch('currencies/getCurrencies')
        .then(next)
        .catch(error => {
          console.log(error)
        })
    }
  },
  methods: {
    ...mapActions({
      addCurrency: 'currencies/addCurrency'
    }),
    createCurrency(payload) {
      this.addCurrency(payload).then(() => {
        this.currency = {
          code: '',
          humanReadableName: null
        }
        this.currencyDialog = false
      })
    }
  },
  data() {
    return {
      currencyDialog: false,
      currency: {
        code: '',
        humanReadableName: null
      },
      codeRule: [v => !!v || 'Code is required']
    }
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      currencies: 'currencies/currencies'
    })
  }
}
</script>
