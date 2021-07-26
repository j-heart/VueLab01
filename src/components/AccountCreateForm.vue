<template>
  <div>
      <div class="AccForm">
          <div class="IncomeLabel">
              <label for="Income" class="Income">Income</label>
              <input type="text" v-model="form.Income">
          </div>

          <div class="ExpenseLable">
              <label for="Expense" class="Expense">Expense</label>
              <input type="text" v-model="form.Expense">
          </div>

          <div class="DateLable">
              <label for="Date" class="Date">Date</label>
              <input type="text" v-model="form.Date">
          </div>

          <div class="DetailLable">
              <label for="Detail" class="Detail">Detail</label>
              <input type="text" v-model="form.Detail">
          </div>

          <div>
              <button v-on:click="addAccount">Add</button>
          </div>
      </div>
  </div>
</template>

<script>
import AccountStore from '@/store/Account'
export default {
        data() {
        return {
            form: {
                Income: '',
                Expense: '',
                Date: '',
                Detail: ''
            }
        }
    },
    methods: {
        clearForm() {
            this.form = {
                Income: '',
                Expense: '',
                Date: '',
                Detail: ''
            }
        },
        addAccount() {
            let payload = {
                Income: this.form.Income,
                Expense: this.form.Expense,
                Date: this.form.Date.split(',').map(
                    (item) => item.trim()),
                Detail: this.form.Detail
            }
            AccountStore.dispatch('addAccount', payload)
            console.log(payload)
            this.clearForm()
        }
    }
}
</script>

<style>
.AccForm {
    display: flex;
    align-items: center;
    margin-left: 17.5%;
    margin-top: 10px;
}

.IncomeLabel {
    margin: 20px;
}

.ExpenseLable {
    margin: 20px;
}

.DateLable {
    margin: 20px;
}

.DetailLable {
    margin: 20px;
}

.Income {
    margin-right: 20px;
}

.Expense {
    margin-right: 20px;
}

.Date {
    margin-right: 20px;
}

.Detail {
    margin-right: 20px;
}
</style>