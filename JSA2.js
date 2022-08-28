// Javascript Assignment 2

// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function triangleType(a,b,c){
    if(a==b && b==c)
    {
     console.log(`Equilateral`);
    }
}
triangleType(60,60,60)

// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.



// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000
function sum(n=1000){
    let sum=0;
    for(let i=1;i<n;i++)
    {
        if(i%3==0 && i%5==0)
        {
            sum+=i;
        }
        else if(i%3==0)
        {
            sum+=i;
        }
        else if(i%5==0)
        {
            sum+=i;
        }
    }
    console.log(sum);

}

sum();
// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

function prime(s,e){
    const isPrime = (num)=>{
        for(let i=2;i<num;i++)
        {
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
    const fact =(num)=>{
        let fact = 1
        while(num){
            fact *= num;
            num-=1;
        }
        console.log(fact);
    }

    for(let a=s;a<e;a++)
    {
        if(isPrime(a)){
            fact(a);
        }
    }
}

prime(1,100)