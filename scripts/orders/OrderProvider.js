import { bakeryAPI } from "../Settings.js"

let orders = []

export const useOrders = () => orders.slice()

export const getOrders = (customerId) => {
  return fetch(`${bakeryAPI.baseURL}/orders?_expand=status&customerId=${customerId}`)
    .then(response => response.json())
    .then(response => {
      orders = response
    })
}
