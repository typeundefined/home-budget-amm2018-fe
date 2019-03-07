<template>
<div>
  <menu-bar v-on:logout="$emit('logout')" />
  <b-alert :show="showAlert" variant="danger">{{errorText}}</b-alert>
  <div class="d-flex">
    <div class="d-flex p-3 flex-column">
      <b-button class="btn-success mb-3" @click="showDepositDlg">Deposit...</b-button>
      <deposit-dlg ref="depositDlg" :account="id" type="deposit" v-on:done="loadAll" />

      <b-btn class="btn-warning mb-3" @click="showWithdrawalDlg">Withdraw...</b-btn>
      <deposit-dlg ref="withdrawalDlg" :account="id" type="withdrawal" v-on:done="loadAll" />
    </div>
    <div class="p-3">
      <h2>Account details</h2>
      <table class="table" v-if="!!account.id">
        <tr>
          <td>Name</td>
          <td>{{account.name}}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{{account.description}}</td>
        </tr>
        <tr>
          <td>Amount</td>
          <td>{{account.currentValue}}</td>
        </tr>
        <tr>
          <td>Currency code</td>
          <td>{{account.currency.code}}</td>
        </tr>
        <tr>
          <td>Currency name</td>
          <td>{{account.currency.humanReadableName}}</td>
        </tr>
        <tr>
          <td>Creation date</td>
          <td>{{account.createDate}}</td>
        </tr>
      </table>
    </div>
    <div class="d-flex flex-column align-self-stretch p-3">
      <h2>Transaction history</h2>
      <b-table striped bordered hover :fields="fields" :items="transactionList"></b-table>
      <b-pagination size="md" :total-rows="totalRows" @change="pageChanged" v-model="currentPage" :per-page="20"></b-pagination>
    </div>
  </div>
</div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
import NewDeposit from '@/components/dialogs/NewDeposit'
import moment from 'moment'

export default {
  name: 'AccountDetails',
  props: ['id'],
  components: {
    'menu-bar': MenuBar,
    'deposit-dlg': NewDeposit
  },
  methods: {
    pageChanged (page) {
      this.getTransactions({'page': page - 1})
    },
    loadAll () {
      this.loadAccount()
      this.getTransactions()
    },
    loadAccount () {
      this.$http.get('accounts/' + this.id).then(
        response => {
          this.showAlert = false
          this.account = response.data
        },
        err => {
          this.showAlert = true
          this.errorText = err.data.message
        }
      )
    },
    getTransactions (params) {
      let q = {}
      if (params) {
        q.params = params
      }
      this.$http.get('accounts/' + this.id + '/transactions', q).then(
        response => {
          this.transactionList = response.data.content
          this.currentPage = response.data.number + 1
          this.totalRows = response.data.totalElements
        }
      )
    },
    showWithdrawalDlg () {
      this.$refs.withdrawalDlg.show()
    },
    showDepositDlg () {
      this.$refs.depositDlg.show()
    }
  },
  data () {
    return {
      totalRows: 0,
      currentPage: 0,
      fields: [
        'id', {
          key: 'createDate',
          label: 'Date',
          formatter: (value) => { return moment(value).format('DD.MM.YY HH:mm:ss') }
        }, {
          key: 'amount1',
          label: 'Income',
          formatter: (value, key, item) => { return item.type === 'deposit' ? item.amount : '' },
          tdClass: 'table-success'
        }, {
          key: 'amount2',
          label: 'Outcome',
          formatter: (value, key, item) => { return item.type !== 'deposit' ? item.amount : '' },
          tdClass: 'table-warning'
        }, {
          key: 'currency.code',
          label: 'Currency'
        }
      ],
      transactionList: [],
      account: {},
      errorText: '',
      showAlert: false
    }
  },
  created () {
    this.loadAll()
  },
  watch: {
    '$route': 'loadAll'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
