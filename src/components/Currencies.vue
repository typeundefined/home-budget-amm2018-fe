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
export default {
  name: 'currencies',
  props: [],
  methods: {
    loadCurrencies() {
      this.$http
        .get('currency/')
        .then(resp => {
          this.currencies = resp.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  data() {
    return {
      currencies: []
    }
  },
  mounted() {
    this.loadCurrencies()
  }
}
</script>
