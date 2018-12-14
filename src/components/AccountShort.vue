<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{name}} <span class="badge badge-secondary">{{amount}} {{currency}}</span></h5>
      <p>{{description}}</p>

      <router-link :to="'/account/' + id" class="btn btn-primary">View details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account-short',
  props: ['id', 'name', 'description', 'currency', 'amount'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.card {
  width: 22em;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
}

.text-error {
  color: red;
}
</style>
