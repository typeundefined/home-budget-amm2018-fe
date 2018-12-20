<template>
  <v-flex>
    <v-data-table
      :headers="headers"
      :items="transactions"
      hide-actions
      class="elevation-1"
    >
      <template
        slot="items"
        slot-scope="props"
      >
        <td>{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.reason }}</td>
        <td class="text-xs-right">{{ props.item.category }}</td>
        <td class="text-xs-right">{{ props.item.amount }}</td>
        <td class="text-xs-right">{{ props.item.newValue }}</td>
        <td class="text-xs-right">{{ props.item.type }}</td>
        <td class="text-xs-right">{{ props.item.createDate }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination
        v-model="pagination.pageNumber"
        :length="pagination.totalPages"
        v-on:input="loadAccountDetails(`${pagination.pageNumber}`)"
      ></v-pagination>
    </div>
    <v-fab-transition>
      <v-btn
        dark
        fab
        fixed
        bottom
        right
        color="blue"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-flex>
</template>

<script>
import AccountService from '../services/account'

export default {
  name: 'account-details',
  props: ['id'],
  methods: {
    loadAccountDetails(pageNumber = 1, numberOfElements = 10) {
      AccountService.getAccountTransactions(this.id, {
        page: pageNumber - 1,
        size: numberOfElements
      })
        .then(data => {
          this.transactions = data.content

          this.pagination = {
            numberOfElements: data.numberOfElements,
            totalPages: data.totalPages,
            pageNumber: data.number + 1
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  data() {
    return {
      transactions: [],
      pagination: {},
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Reason', value: 'reason' },
        { text: 'Category', align: 'left', sortable: false, value: 'category' },
        { text: 'Amount', value: 'amount' },
        { text: 'New Value', value: 'newValue' },
        { text: 'Type', value: 'type' },
        { text: 'Created Date', value: 'createdDate' }
      ]
    }
  },
  mounted() {
    this.loadAccountDetails()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
