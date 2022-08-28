// Javascript Assignment 1

// 1. Write a program to find whether a given year is a leap year or not.
function leapYear(year)
{
    if(year%4==0 && year%100!=0){
        console.log(`${year} is a leap year`);
    }
    else if(year%400==0){
        console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year} is not a leap year`);
    }
}
leapYear(2014)


// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function TempConvert(temp)
{
    if(temp[temp.length-1] == "C")
    {
       let t = parseFloat(temp);
       let f = 9/5*t+32;
       console.log(`${temp} is ${f}°F`);
    }
    else if(temp[temp.length-1] == "F"){
       let t = parseFloat(temp);
       let c = 5/9*(t-32);
       console.log(`${temp} is ${c}°C`);
    }
}
TempConvert("60°C")
TempConvert("45°F")


// 3. Write a program to find the factorial of a number.

function factorial(num)
{
    let fact = 1
    while(num){
        fact *= num;
        num-=1;
    }
    console.log(fact);
}

factorial(7)