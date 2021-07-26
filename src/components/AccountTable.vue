<template>
  <div>
      <Table>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Income</th>
                  <th>Expense</th>
                  <th>Date</th>
                  <th>Detail</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(acc, index) in accounts" v-bind:key="index">
                  <td>{{index +1}}</td>
                  <td v-if="index !== editIndex">{{acc.Income}}</td>
                  <td v-if="index === editIndex">
                      <input type="text" v-model="form.Income"></td>

                  <td v-if="index !== editIndex">{{acc.Expense}}</td>
                  <td v-if="index === editIndex">
                      <input type="text" v-model="form.Expense"></td>

                  <td v-if="index !== editIndex">{{acc.Date}}</td>
                  <td v-if="index === editIndex">
                      <input type="text" v-model="form.Date"></td>
                    <td v-if="index !== editIndex">{{acc.Detail}}</td>
                    <td v-if="index === editIndex">
                      <input type="text" v-model="form.Detail"></td>
                  <td v-if="index !== editIndex"><button @click="openForm(index, acc)">Click to Edit</button></td>
                  <td v-if="index === editIndex"> >
                      <button @click="editAccount">Update</button>
                      <button @click="closeForm">Cancel</button>
                  </td>
              </tr>
          </tbody>
      </Table>
      <h1>Total {{result}}</h1>
  </div>
</template>

<script>
import AccountStore from '@/store/Account'
export default {
    data() {
        return {
            accounts: [],

            editIndex: -1,
            form: {
                Income: '',
                Expense: '',
                Date: '',
                Detail: ''
            }
        }
    },
    computed: {
    result: function() {
      let x = 0;
      let y = 0;
      for (let acc of this.accounts) {
        x += parseFloat(acc.Income);
        y += parseFloat(acc.Expense);
      }
      return x - y;
      },
    },
    created() {
        this.fetchAccount()
    },
    methods: {
        fetchAccount() {
            AccountStore.dispatch('fetchAccount')
            this.accounts = AccountStore.getters.accounts
        },
        openForm(index, accounts) {
            this.editIndex = index
            let cloned = JSON.parse(JSON.stringify(accounts))
            this.form.Income = cloned.Income
            this.form.Expense = cloned.Expense
            this.form.Date = cloned.Date
            this.form.Detail = cloned.Detail
        },
        closeForm() {
            this.editIndex = -1
            this.form = {
                Income: '',
                Expense: '',
                Date: '',
                Detail: ''
            }
        },
        editAccount() {
            let payload = {
                index: this.editIndex,
                Income: this.form.Income,
                Expense: this.form.Expense,
                Date: this.form.Date,
                Detail: this.form.Detail,
            }
            console.log(payload)
            AccountStore.dispatch("editAccount", payload)
            this.closeForm()
        },
    }
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #04AA6D;
  color: white;
}

h1 {
    background-color: #04AA6D;
    color: white;
}
</style>