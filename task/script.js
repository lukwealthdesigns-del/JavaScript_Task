
// Task 1: Simple Grading System
let score = 100;

function getGrade(score) {
    
    if (score === 100) {
        console.log(`Outstanding! Grade: A+`)
    } else if (score >= 90) {
        console.log(`Score: ${score} ---> Grade: A`)
    } else if (score >= 80) {
        console.log(`Score: ${score} ---> Grade: B`)
    } else if (score >= 70) {
        console.log(`Score: ${score} ---> Grade: C`)
    } else if (score >= 60) {
        console.log(`Score: ${score} ---> Grade: D`)
    } else {
        console.log(`Score: ${score} ---> Grade: F`)
    } 
    
}

getGrade(score)


// Task 2: Discount Calculator





// function calculatePrice(price, customerType, isFirstPurchase) {
    

//     if (customerType === "student" && isFirstPurchase === true) {
//         console.log(`You are a ${customerType} and its your first purchase, you have 15% Discount`)
//     } else if (customerType === "student" && isFirstPurchase === false) {
//         console.log(`You are a ${customerType} but not your first purchase, you have 10% Discount`)
//     } 
//     if (customerType === "senior" && isFirstPurchase === true) {
//         console.log(`You are a ${customerType} and its your first purchase, you have 20% Discount`)
//     } else if (customerType === "senior" && isFirstPurchase === false) {
//         console.log(`You are a ${customerType} but not your first purchase, you have 15% Discount`)
//     } 
//     if (customerType === "senior" && isFirstPurchase === true) {
//         console.log(`You are a ${customerType} and its your first purchase, you have 15% Discount`)
//     } else if (customerType === "senior" && isFirstPurchase === false) {
//         console.log(`You are a ${customerType} but not your first purchase, you have 10% Discount`)
//     } 
    

// }
let price = 1000;
let customerType = "student";
let isFirstPurchase = true;

function calculatePrice(price, customerType, isFirstPurchase) {
    let discount = 0;
    

   

    if (customerType === "student") {
        discount = 0.10;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee"){
        discount = 0.20;
    }
    
    if (isFirstPurchase) {
        discount += 0.5;
    }

    let finalPrice = price * (1 - discount);
    let NewfinalPrice = finalPrice.toFixed(2);
    let discountPercent = discount * 100;
    

    console.log("====== RECEIPT ======");
    console.log(`Original Price: ${price}`);
    console.log(`Discount Percent: ${discountPercent}%`);
    console.log(`Final Price: ₦${NewfinalPrice}`);
   
   
}


// Task 3: Weather Advisor
let temperature = 30;
let isRaining = false;

function weatherAdvice(temperature, isRaining) {
    if (temperature <= 32 && isRaining === true){
        console.log(`freezing rain! Stay inside!`)
    } else if (temperature < 32){
        console.log(`Very cold, wear a heavy jacket`)
    } else if (temperature >= 32 && temperature <= 60){
        console.log(`Chilly, bring a jacket.`)
    } else if (temperature >= 60 && temperature <=80){
        console.log(`Nice weather!`)
    } else if (temperature > 80) {
        console.log(`It's hot, stay hydrated`)
    }

}



// Task 4: ATM Simulation

function atm(balance, action, amount) {
    if (action === "withdraw"){
        if (amount <= balance){
            let newBalance = balance - amount;
            console.log(`You have successfully withdrawn $${amount}, your current balance is $${newBalance}`)
        } else if (amount > balance){
            console.log(`Insufficient Funds`)
        }
    } else if (action === "deposit") {
        let currentBalance = balance + amount;
        console.log(`You have successfully added $${amount}, Your current balance is ${currentBalance}`)
    }

}


// Task 5: Personal Assistant Function

function personalAssistant(){
    
}
