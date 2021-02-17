import { bakeryAPI } from "../Settings.js"

let statuses = []

export const useStatuses = () => products.slice()

export const getStatuses = () => {
  return fetch(`${bakeryAPI.baseURL}/statuses`)
    .then(r => r.json())
    .then(r => products = r)
}
