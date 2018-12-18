<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      align-center
    >
      <account-short
        v-for="{id, name, description, currency, currentValue} in accounts"
        :key="id"
        :id="id"
        :name="name"
        :description="description"
        :currency="currency.code"
        :amount="currentValue"
      />
    </v-layout>
  </v-container>
</template>

<script>
import AccountShort from '@/components/AccountShort'
import { mapGetters } from 'vuex'

export default {
  name: 'account-grid-list',
  components: {
    'account-short': AccountShort
  },
  methods: {},
  data() {
    return {}
  },
  mounted() { },
  computed: {
    ...mapGetters({
      accounts: 'accounts/accounts'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
