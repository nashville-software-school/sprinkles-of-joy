import { authHelper } from "../auth/authHelper.js"
import { getCustomer } from "../customers/CustomerProvider.js"

const eventHub = document.querySelector("#container")
const userNav = document.querySelector(".userNav")

export const CustomerNav = () => {
  if (authHelper.isUserLoggedIn()) {
    getCustomer(authHelper.getCurrentUserId())
      .then(userObject => {
        render(userObject)
      })
  }
}

const render = (customer) => {
  userNav.innerHTML = `
    <h3>Welcome ${customer.name}!</h3>
    <ul class="userNav__links">
    <li class="userNav__link" id="userNav--newOrder">Cart</li>
    <li class="userNav__link" id="userNav--newReview">New Review</li>
    <li class="userNav__link" id="userNav--pastOrders">Past Orders</li>
    </ul>
  `
}

eventHub.addEventListener("userLoggedIn", event => {
  CustomerNav()
})

eventHub.addEventListener("click", event => {
  if (event.target.id.startsWith("userNav--")) {
    const [idPrefix, idSuffix] = event.target.id.split("--")
    let customEvent
    switch (idSuffix) {
      case "newOrder":
        customEvent = new CustomEvent("showNewOrderForm")
        break;
      case "newReview":
        customEvent = new CustomEvent("showNewReviewForm")
        break;
      case "pastOrders":
        customEvent = new CustomEvent("showPastOrders")
        break;
    }
    eventHub.dispatchEvent(customEvent)
  }
})
