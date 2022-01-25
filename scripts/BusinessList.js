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
            customerTarget.innerHTML+= `<h2 class="customer__">${agent.agentName}</h2>
            <div class="customer__address">
                <p>${agent.agentCompany} </p>
                <p>${agent.agentPhone}</p>`
        }
    )
    customerTarget.innerHTML+= "</ul>"
    customerTarget.innerHTML += `</article>`
}

// const companySearchResultArticle = document.querySelector(".foundCompanies")

// document
//     .querySelector("#companySearch")
//         .addEventListener(
//             "keypress", //when we press the key enter
//             keyPressEvent => { //do this when we press the key
//                 if (keyPressEvent.charCode === 13) { //if the key that is being pressed is enter
//                     /*
//                         When the user presses 'Enter', find the matching business.

//                         You can use the `.includes()` string method to
//                         see if a smaller string is part of a larger string.

//                         Example: business.companyName.includes(keyPressEvent.target.value)
//                     */
//                     const userInput = document.getElementById("companySearch").value
//                     const businesses = getCustomers()

//                     const foundBusiness = businesses.find(company => company.companyName.includes(userInput))
//                     companySearchResultArticle.innerHTML += Customer(foundBusiness)
                    

                    

                    
//                 }
//         });

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#agentSearch")
        .addEventListener(
            "keypress", //when we press the key enter
            keyPressEvent => { //do this when we press the key
                if (keyPressEvent.charCode === 13) { //if the key that is being pressed is enter
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                    const userInput = document.getElementById("agentSearch").value
                    const agentList = filteredAgents()

                    const foundAgent = agentList.find(agent => agent.agentName.includes(userInput))
                    if(foundAgent===undefined) {
                        window.alert("Try again.  No agent found.")
                    } else {
                        companySearchResultArticle.innerHTML =`<div class="customer__address">
                        <h2><p>${foundAgent.agentName} </p></h2>
                        <p>${foundAgent.agentCompany}</p>
                        <p>${foundAgent.agentPhone}</p>`
                    }
                    
                    

                    

                    
                }
        });
