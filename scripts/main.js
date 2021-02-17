console.log("Welcome to the main module")

import { CategorySelect } from "./categories/CategorySelect.js"
import { LoginForm } from "./customers/LoginForm.js"
import { OrderList } from "./orders/OrderList.js"
import { ProductList } from "./products/ProductList.js"
import "./customers/RegisterForm.js"

CategorySelect()
ProductList()
LoginForm()
OrderList()
