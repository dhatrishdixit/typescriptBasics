type cardNumber = {
    cardNumber : string
}

type expiryDate = {
    expiry : string
}

type cardDetails = cardNumber & expiryDate & {
    cvv : number
}

let dhatrishCard : cardDetails = {
    cardNumber : '1234',
    expiry : '1234',
    cvv : 1234
}

export {}