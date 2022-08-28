// Javascript Assignment 1

// 1. Write a program to find whether a given year is a leap year or not.

// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// 3. Write a program to find the factorial of a number.

function leapYear(year)
{
    if(year%4==0 && year%100==0){
        console.log(`${year} is a leap year`);
    }
    else if(year%400==0){
        console.log(`${year} is not a leap year`);
    }
}

// function TempConvert(celsiusTemp)
// {

// }

function factorial(num)
{
    let fact = 1
    while(num){
        fact *= num;
        num-=1;
    }
    console.log(fact);
}
leapYear(2014)
factorial(7)