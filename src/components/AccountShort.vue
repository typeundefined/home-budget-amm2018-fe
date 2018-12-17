<template>
  <v-flex
    xs12
    md4
  >
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">{{name}}</div>
          <span class="grey--text">{{amount}} {{currency}}</span>
        </div>
      </v-card-title>
      <v-card-text>{{description}}</v-card-text>

      <v-card-actions>
        <v-btn
          :to="'/account/' + id"
          flat
          class="red--text"
        >View details</v-btn>
      </v-card-actions>

    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'account-short',
  props: ['id', 'name', 'description', 'currency', 'amount'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
