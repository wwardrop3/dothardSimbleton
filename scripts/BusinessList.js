import { Customer } from "./Business.js";
import { filteredCustomers, getCustomers, filteredManufacturingBusinesses, filteredAgents } from "./database.js";




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



export const manufacturingBusinesses = () => {
    const manBusiness = filteredManufacturingBusinesses()
    customerTarget.innerHTML += `<article class = "manufacturingBusinesses">`
    customerTarget.innerHTML+= "<h1>Manufacturing Businesses</h1>"
    
    manBusiness.forEach(
        (manObject) => {
            customerTarget.innerHTML += Customer(manObject)
        }
    )
    customerTarget.innerHTML += `</article>`
}

export const agents = () => {
    const agents = filteredAgents()
    customerTarget.innerHTML += `<article class = "agents">`
    customerTarget.innerHTML+= "<h1>Business Agents</h1>"
    
    
    
    agents.forEach(
        (agent) => {
            customerTarget.innerHTML+= `<h2 class="customer__">${agent[0]}</h2>
            <div class="customer__address">
                <p>${agent[1]} </p>
                <p>${agent[2]}</p>`
        }
    )
    customerTarget.innerHTML+= "</ul>"
    customerTarget.innerHTML += `</article>`
}

