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
        <td class="text-xs-left">{{ props.item.createDate | moment }}</td>
        <td class="text-xs-left">{{ props.item.type }}</td>
        <td class="text-xs-left">{{ props.item.reason }}</td>
        <td class="text-xs-left">{{ props.item.amount }}</td>
        <td class="text-xs-left">{{ props.item.newValue }}</td>
        <td class="text-xs-left">{{ props.item.category }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
          >
            edit
          </v-icon>
          <v-icon
            small
          >
            delete
          </v-icon>
        </td>
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
import moment from 'moment'

export default {
  name: 'account-details',
  props: ['id'],
  methods: {
    loadAccountDetails(pageNumber = 1, numberOfElements = 10) {
      AccountService.getAccountTransactions(this.id, {
        page: pageNumber - 1,
        size: numberOfElements,
        sort: 'createDate,desc'
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
  // TODO: delete and edit
  filters: {
    moment: (date) => {
      if (date) {
        return moment(String(date)).format('hh:mm DD.MM.YYYY')
      }
    }
  },
  data() {
    return {
      transactions: [],
      pagination: {},
      headers: [
        { text: 'Created Date', sortable: false, value: 'createdDate' },
        { text: 'Type', sortable: false, value: 'type' },
        { text: 'Reason', sortable: false, value: 'reason' },
        { text: 'Amount', sortable: false, value: 'amount' },
        { text: 'New Value', sortable: false, value: 'newValue' },
        { text: 'Category', sortable: false, value: 'category' },
        { text: 'Actions', sortable: false, value: 'actions' }
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
