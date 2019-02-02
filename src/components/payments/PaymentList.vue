<template>
  <div class="col-sm-12">
    <h4>Liste des paiements</h4>
    <button v-on:click="sort()"  class="btn btn-primary">Trier</button>
    <button v-on:click="fetchPayments()"  class="btn btn-primary">Recup payments</button>

    
    <div class="col-sm-6">
      <label for="">Filter by bénéficiaire</label>
      <input v-model="filterName" class="form-control" placeholder="Filtrez par bénéficiaire"  type="text">
    </div>
    <table class="table" >
      <thead>
        <tr>
          <th>id</th>
          <th>montant</th>
          <th>Envoyé par</th>
          <th>Recu par</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="payment.id" v-for="payment in filteredPayment" >
          <td>{{payment.id}}</td>
          <td>{{ payment.amount }}</td>
          <td>{{ payment.user.name }}</td>
          <td class="receiver-payment" >{{ payment.receiver.name }}</td>
        </tr>
      </tbody>
    </table>

    <p>Le montant total est {{ totalAmount()}}</p>
    <p>Le montant total brut est {{ prixTotalBrut}}</p>
    
  </div>
</template>

<script>
let taxes = 8;
import paymentService from "../../services/paymentService"
export default {
  name: 'PaymentList',
  data: function () {
    return {
      filterName: null,
      payments: []
    }
  },
  methods: {
    totalAmount: function () {
      console.log("totoalll")
      return this.payments.reduce((total, current) => total + current.amount, 0) - (taxes / 100)
    },
    sort: function () {
      this.payments = this.payments.sort((firstPayment, secondPayment) => {
        return firstPayment.amount - secondPayment.amount
      })
    },
    fetchPayments: function () {
      // paymentService.getPayments()
      //   .then(payments => {
      //     this.payments = payments;
      //   })
    }
  },
  computed: {
    prixTotalBrut: function () {
      console.log("brut")
      return this.payments.reduce((total, current) => total + current.amount, 0);
    },
    filteredPayment: function () {
      console.log("filterring")
      let filtre = this.filterName;
      if (!filtre) {
        return this.payments;
      }
      return this.payments.filter(payment => {
        return payment.receiver.name.toLowerCase().includes(filtre.toLowerCase())
      })
    }
  },
  created: function () {
    
    paymentService.getPayments()
    .then(payments => {
      this.payments = payments;
    })
  }
}
</script>

<style scoped>
  .receiver-payment {
    font-weight: bolder;
    font-size: 30px;
  }
</style>
