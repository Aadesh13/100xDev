//createOrder , proceedToPayment , orderSummary, updateWallet

const cart = ['shoe', 'pants', 'socks'];

createOrder(cart)
     .then(function(orderId) {
        console.log(orderId);
        return orderId;
     })
     .then(function(orderId) {
        return proceedToPayment(orderId);
     })
     .then(function(paymentInfo) {
        console.log(paymentInfo);
        return paymentInfo;
     })
     .then(function(paymentInfo) {
        return orderSummary(paymentInfo);
     })
     .then(function(summary) {
        console.log(summary);
        return summary;
     })
     .then(function(paymentInfo) {
        return updateWallet(paymentInfo);
     })
     .then(function(wallet) {
        console.log(wallet);
     })
     .catch(function(err) {
        console.log(err);
     });


function createOrder(cart) {
    return new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("cart i empty");
            reject(err);
        }
        const orderId = "12345";
        if(orderId) {
            resolve(orderId);
        }
    });
}

function validateCart(cart) {
    return Array.isArray(cart) && cart.length > 0;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject) {
        if(orderId) {
            resolve("Payment Successfull");
        } else {
            const err = new Error("Payment failed");
            reject(err);
        }
   });
}

function orderSummary(paymentInfo) {
    return new Promise(function(resolve, reject) {
        if(paymentInfo) {
            resolve("Order Summary");
        } else {
            const err = new Error("Payment failed");
            reject(err);
        }
    })
}

function updateWallet(paymentInfo) {
    return new Promise(function(resolve,reject) {
        if(paymentInfo) {
            resolve("Wallet Updated");
        } else {
            const err = new Error("Wallet not updated");
            reject(err);
        }
    })
}