// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10
const printPattern = (num)=>{
    let n = 0
    for(let i=1;i<=4;i++)
    {
        for(let j=1;j<=i;j++)
        {
            n+=1;
            process.stdout.write(`${n} `);
        }
        console.log()
    }
}
printPattern();

// 2. Write a program to find whether a given number is armstrong number or

// not-
// The Armstrong number is a number that is equal to the sum of cubes of

// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153

const armstrongNumber = (num) => {
    temp = num;
    sum = 0;
    while(temp>0)
    {
        sum = sum + (Math.floor(temp%10))**3;
        temp = Math.floor(temp/10);
    }
    if(sum===num)
    {
        console.log(`${num} is Armstrong Number`);
    }
    else{
        console.log(`${num} is not Armstrong Number`);
    }
}
armstrongNumber(407);
armstrongNumber(489);






// 3. Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

const specialNumber = (num) => {
    temp = num;
    sum = 0;
    const factorial = (n)=>{
        let fact = 1;
        while(n){
            fact *= n;
            n--;
        }
        return fact;
    }

    while(temp>0)
    {
        sum = sum + factorial(Math.floor(temp%10));
        temp = Math.floor(temp/10);
    }
    if(sum===num)
    {
        console.log(`${num} is Special Number`);
    }
    else{
        console.log(`${num} is not Special Number`);
    }
}

specialNumber(145);
specialNumber(234);