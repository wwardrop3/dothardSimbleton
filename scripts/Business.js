export const Customer = ( customerObject ) => {
    return `
        <section class="customer">
            <h2 class="customer__">${customerObject.companyName}</h2>
            <div class="customer__address">
                <p>${customerObject.addressFullStreet} </p>
                <p>${customerObject.addressCity}, ${customerObject.addressStateCode} ${customerObject.addressZipCode}</p>
            </div>
            <hr>
        </section>
    `
}




//The function that you pass to .filter() should return true or false.