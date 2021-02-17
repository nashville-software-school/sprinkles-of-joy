import { authHelper } from "../auth/authHelper.js"
import { getCustomer } from "../customers/CustomerProvider.js"
import { Order } from "./Order.js"
import { getOrders, useOrders } from "./OrderProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".userOrders")

let customerOrders = []

export const OrderList = () => {
  if (authHelper.isUserLoggedIn()) {
    getOrders(authHelper.getCurrentUserId())
      .then(() => {
        customerOrders = useOrders()
        render()
      })
  }
}

const render = () => {
  const ordersHtmlRepresentation = customerOrders.map(order => Order(order)).join("")


  const loggedInUserId = authHelper.getCurrentUserId()
  getCustomer(loggedInUserId)
    .then(userObject => {

      contentTarget.innerHTML = `
        <button id="newOrder">Start a New Order</button>
        <h3>${userObject.name}'s Orders</h3>
        <div>${ordersHtmlRepresentation}</div>
      `
    })
}

eventHub.addEventListener("userLoggedIn", event => {
  debugger
  OrderList()
})
