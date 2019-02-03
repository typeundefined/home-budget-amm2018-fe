<template>
  <div>
    <menu-bar v-on:logout="$emit('logout')" />
    <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
    <div class="d-flex">
      <div class="d-flex p-3 flex-column">
        <b-btn class="btn-success mb-3" @click="createAccount">New account</b-btn>
        <b-btn class="mb-3">Add expense</b-btn>
      </div>
      <template>
        <b-table striped hover :items="transactionList" :fields="fields"></b-table>
      </template>

    </div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'Home',
  components: {
    'menu-bar': MenuBar
  },
  methods: {
    loadTransactions () {
      this.$http.get('account/' + this.$route.params.id + '/transactions').then(resp => {
        this.transactionList = resp.data.content
        for (let i = 0; i < this.transactionList.length; i++) {
          console.log(this.transactionList[i])
          if (this.transactionList[i].type === 'withdraw') {
            this.transactionList[i]._cellVariants = {type: 'danger'}
          } else if (this.transactionList[i].type === 'deposit') {
            this.transactionList[i]._cellVariants = {type: 'success'}
          } else {
            this.transactionList[i]._cellVariants = {type: 'active'}
          }
        }
        console.log(this.transactionList)
      }).catch(err => {
        // TODO: improve this
        console.log(err)
      })
    },
    createAccount () {
      this.$router.push({name: 'NewAccount'})
    }
  },
  data () {
    return {
      transactionList: [],
      fields: [
        {
          key: 'id',
          sortable: true
        },
        {
          key: 'type',
          sortable: true
        },
        {
          key: 'createDate',
          label: 'Time',
          sortable: true
        },
        {
          key: 'newValue',
          label: 'Value',
          sortable: true
        },
        {
          key: 'reason',
          label: 'Transaction reason',
          sortable: true
        },
        {
          key: 'currency.code',
          label: 'Currency code',
          sortable: true
        },
        {
          key: 'amount',
          sortable: true
        }
      ],
      errorText: '',
      showAlert: false
    }
  },
  mounted () {
    this.loadTransactions()
  }
}
</script>
