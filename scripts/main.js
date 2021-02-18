console.log("Welcome to the main module")

import { CategorySelect } from "./categories/CategorySelect.js"
import { LoginForm } from "./customers/LoginForm.js"
import "./orders/OrderList.js"
import { ProductList } from "./products/ProductList.js"
import "./customers/RegisterForm.js"
import { CustomerNav } from "./customers/CustomerNav.js"
import "./orders/OpenCart.js"

CategorySelect()
ProductList()
LoginForm()
CustomerNav()
