const input = document.getElementById("input-number")
const showPrice = document.getElementById("show-result")

const cashBack = document.getElementById("cash-back")

function dumbWaysJos() {
    // let price = 11000;
    let price = parseInt(input.value)
    let totalValue;

    if (price > 50000) {
        let discount = 21.1 / 100;
        let maksPrice= 100/21.1*20000;
        // console.log(maksDiscount)

        if (price >= maksPrice) {
            totalValue = price - 20000
            cashBack.innerHTML = 20000
            showPrice.innerHTML = totalValue
        } else {
            totalValue = price - (price * discount);
            showPrice.innerHTML = totalValue
            cashBack.innerHTML = parseInt(price * discount);
        }
        
    } else {
        alert("you cant use this discoout")
    }
}


function dumbWaysMantab() {
    let price = parseInt(input.value)
    let totalValue;

    if (price > 80000) {
        let discount = 30 / 100;
        let maksPrice = 100/30*40000
        // console.log(maksDiscount)

        if (price >= maksPrice) {
            totalValue = price - 40000
            cashBack.innerHTML = 40000
            showPrice.innerHTML = totalValue
        } else {
            totalValue = price - (price * discount);
            showPrice.innerHTML = totalValue
            cashBack.innerHTML = parseInt(price * discount);
        }
        
    } else {
        alert("you cant use this discoout")
    }
}
