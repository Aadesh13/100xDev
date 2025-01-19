//Promise in js is used to handle asynchronous operations. It is a way to handle the result of an asynchronous operation.
// A promise is a proxy for a value not necessarily known when the promise is created. 
// It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

// const cart = ["shoe","pants","shirt","socks"];

// createOrder(cart);  //orderId

// proceedToPayment(orderId); //paymentId

// //both the function are asynchronous & dependent on each other so better use callback hell or promise ?
// createOrder(cart , function(orderId) {
//     proceedTOPayment(orderId);
// });

//this leads to callback hell so better use promise
const promise = createOrder(cart);

promise.then(function(orderId) {
    proceedToPayment(orderId);
})

//promise chaining
createOrder(cart) 
 .then(function(orderId) {
     return proceedToPayment(orderId);
 })
 .then(function(paymentId) {
     return confirmPayment(paymentId);
 });

 //make sure you are returning the promise from the function so that you can chain the promise
 //it can also be done using arrow function
createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentId => confirmPayment(paymentId))
  .then(confirmation => console.log(confirmation));