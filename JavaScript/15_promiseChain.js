const cart = ["shoe" , "pants" , "socks"];

//create our own promise
function createOrder(cart) {
    const pr = new Promise(function(resolve , reject) {      
        //create order
        //validate cart
        //order id
        if(!validateCart(cart)) {
            const err = new Error("cart is empty");
            reject(err);
        }
        //order id 
        const orderId = "12345";
        if(orderId) {
            resolve(orderId);
        }
    });
    return pr;
}

function validateCart(cart) {
    return Array.isArray(cart) && cart.length > 0;
    //return false;
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve , reject) {                   //returning a promise
        resolve("Payment successful");
    })
}

createOrder(cart)
   .then(function(orderId) {                           
      console.log(orderId);                            
      return orderId;                                  //returning the orderId so that it can be used in the next then block
    })
    .then(function(orderId) {
        return proceedToPayment(orderId);              //for a promise to be chained it should return a promise
    })
    .then(function(paymentInfo) {                      //this will be called when the promise is resolved
        console.log(paymentInfo);                      //paymentInfo is the value that is resolved by the promise
    })
    .catch(function(err) {                             //this will be called when the promise is rejected
        console.log(err);
    });

    //catch block is used to handle the error in the promise chain
