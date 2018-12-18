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
          class="blue--text"
        >View details</v-btn>
        <v-btn
          @click="deleteDialog = true"
          flat
          class="red--text"
        >Delete</v-btn>
      </v-card-actions>

      <v-dialog
        v-model="deleteDialog"
        max-width="400"
      >
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete the account "{{ name }}"?</v-card-title>

          <v-card-text>
            All related transactions will be deleted.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="deleteDialog = false"
            >
              Cancel
            </v-btn>

            <v-btn
              color="red darken-1"
              flat="flat"
              @click="deleteAccountById(id)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'account-short',
  props: ['id', 'name', 'description', 'currency', 'amount'],
  data() {
    return {
      deleteDialog: false
    }
  },
  methods: {
    ...mapActions({
      deleteAccount: 'accounts/deleteAccount'
    }),
    deleteAccountById(id) {
      this.deleteAccount(id).then(() => {
        this.deleteDialog = false
      })
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
