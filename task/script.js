
// Task 1: Simple Grading System


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



// Task 2: Discount Calculator

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


function weatherAdvice(temperature, isRaining) {
    if (temperature <= 32 && isRaining === true){
        console.log(`freezing rain! Stay inside!`)
    } else if (temperature < 32){
        console.log(`Very cold, wear a heavy jacket and bring an umbrella`)
    } else if (temperature >= 32 && temperature <= 60){
        console.log(`Chilly, bring a jacket and an umbrella.`)
    } else if (temperature >= 60 && temperature <=80){
        console.log(`Nice weather! No umbrella needed.`)
    } else if (temperature > 80) {
        console.log(`It's hot, stay hydrated`)
    }

}




// Task 4: ATM Simulation
let balance = 1000;
let action = "withdraw";
let amount = 500;

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
    let time = prompt(`Kindly enter the time in hour`);
    let weather = prompt(`Kindly enter the weather (sunny, rainy, cloudy`);
    let dayType = prompt (`Kindly enter your day type (workday, weekend, holiday)`);

    if (time === "" || weather === "" || dayType === ""){
        console.log(`Kindly input the field`)

    } else if (time === 10 && weather === "sunny" && dayType === "weekend")
        console.log("It's sunny, You can enjoy your weekend at home")

}
