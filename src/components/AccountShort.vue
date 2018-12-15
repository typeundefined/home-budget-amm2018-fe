<template>
  <v-flex xs12 md4>
    <v-card class="elevation-0 transparent">
      <v-card-text class="text-xs-center"></v-card-text>
      <v-card-title primary-title class="layout justify-center">
        <div class="headline">{{name}}</div>
      </v-card-title>
      <span class="badge badge-secondary">{{amount}} {{currency}}</span>
      <v-card-text>{{description}}</v-card-text>
      <v-card-actions>
        <v-btn :to="'/account/' + id" icon class="red--text">View details</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "account-short",
  props: ["id", "name", "description", "currency", "amount"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
