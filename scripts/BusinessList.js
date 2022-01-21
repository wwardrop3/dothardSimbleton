import { Customer } from "./Business.js";
import { filteredCustomers, getCustomers } from "./database.js";




const customerTarget = document.querySelector(".customerName")

export const nameCustomers = () => {
    const customerArray = getCustomers()
    customerTarget.innerHTML += "<h1>Active Businesses</h1>"

    customerArray.forEach(
        (customerObject) => {
            customerTarget.innerHTML += Customer(customerObject)
        }
    );
}


export const nyBusinesses = (state) => {
    const stateArray = filteredCustomers(state)
    customerTarget.innerHTML += `<article class = "businessList--${state}>`
    customerTarget.innerHTML += `<h1>${state} Businesses</h1>`
    stateArray.forEach(
        (customerObject) => {
            customerTarget.innerHTML += Customer(customerObject)
        }
    )
    customerTarget.innerHTML+= "</article>"
}