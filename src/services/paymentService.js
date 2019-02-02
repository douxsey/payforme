
import httpService from "./http";

export default {
  getPayments: function () {
    return httpService.get('/payments')
    .then(res => res.data)
  }
}