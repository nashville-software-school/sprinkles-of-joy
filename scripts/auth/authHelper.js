export const authHelper = {
  isUserLoggedIn: () => {
    if (sessionStorage.getItem("soj-customer-id")) {
      return true
    }
    return false
  },
  getCurrentUserId: () => sessionStorage.getItem("soj-customer-id"),
  storeUserInSessionStorage: (userId) => sessionStorage.setItem("soj-customer-id", userId)
}
