// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [...arr];
// console.log(arr);
// console.log(arr2);
// let merged = [...arr, ...arr2];
// console.log(merged);

// let arr3=arr.map((num)=>num*2);
// console.log(arr3);
// Shared Utility Functions
// const Cart = {
//     get() {
//         return JSON.parse(localStorage.getItem('cakeCart')) || [];
//     },
//     save(cart) {
//         localStorage.setItem('cakeCart', JSON.stringify(cart));
//     },
//     add(product, qty) {
//         let cart = this.get();
//         const existing = cart.find(item => item.id === product.id);
//         if (existing) {
//             existing.quantity += parseInt(qty);
//         } else {
//             cart.push({ ...product, quantity: parseInt(qty) });
//         }
//         this.save(cart);
//         alert("Added to cart!");
//     }
// };
