<template>
  <v-flex>
    <v-list two-line>
      <template v-for="(currency, index) in currencies">
        <v-list-tile :key="currency.code">
          <v-list-tile-content>
            <v-list-tile-title v-html="currency.code"></v-list-tile-title>
            <v-list-tile-sub-title v-html="currency.humanReadableName"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>
  </v-flex>
</template>

<script>
import CurrencyService from '@/services/currency'

export default {
  name: 'currencies',
  props: [],
  created() {
    CurrencyService.getCurrencies()
      .then(data => {
        this.currencies = data
      })
      .catch(error => {
        console.log(error)
      }
      )
  },
  data() {
    return {
      currencies: []
    }
  },
  mounted() {
  }
}
</script>
