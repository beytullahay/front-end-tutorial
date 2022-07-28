// ********** Karsilastirma Operatorleri ve Mantiksal Operatorler **********
// https://www.w3schools.com/js/js_comparisons.asp

let price = "100"
let user = "hakan"

// == Eşitse
console.log("== :", price == 1 )      // false
console.log("== :", price == 100 )    // true

// === Hem değeri hem de türü eşitse
console.log("=== :", price === 1 )    // false
console.log("=== :", price === 100 )  // false biri string biri int

// != Eşit değilse
console.log(user != "guest" )    // true

// < Küçükse
console.log("price < 50", price < 50)    // false	

// <= Küçük veya eşitse
console.log("price <= 100", price <= 100) // true

// > Büyükse
console.log("price > 200", price > 200)   // false

// >= Büyük veya eşitse
console.log("price >= 100", price >= 100)  // true


// && ve
price2 = 0
console.log( price2 > 0 && user != "guest" )  // false

// || veya
console.log( price2 > 0 || user != "guest" )  // true

// ! degil (tersi)
user2 = "guest"
price3 = 1
console.log( price3 > 0 && !user2 == "guest" )  // false