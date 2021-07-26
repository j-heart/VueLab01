<template>
  <div class="Acc">
      <h2>Account</h2>
      <account-create-form></account-create-form>
      <account-table></account-table>
  </div>
</template>

<script>
import AccountCreateForm from '../components/AccountCreateForm.vue'
import AccountTable from '../components/AccountTable.vue'
export default {
  components: {
    AccountCreateForm,
    AccountTable 
  },
}
</script>

<style>
.Acc {
  margin-top: 20px;
}
h2 {
  font-size: 50px;
  font-weight: bold;
  text-shadow: rgb(61, 250, 140) 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #2ff128 0px 0px 20px, #4ef324 0px 0px 30px, #29f017 0px 0px 40px, #09ee27 0px 0px 50px, #11e245 0px 0px 75px, 2px 2px 3px rgba(206,182,35,0);
  color: #ffffff;
  font-family: Lobster;
}
</style>