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
    //return Array.isArray(cart) && cart.length > 0;
    return false;
}

const promise = createOrder(cart); //orderId

promise
   .then(function(orderId) {
      console.log(orderId);
      //proceedToPayment(orderId);
    })
    .catch(function(err) {
        console.log(err);
    });

