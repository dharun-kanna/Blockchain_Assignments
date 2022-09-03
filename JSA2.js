// Javascript Assignment 2

// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function triangleType(a,b,c){
    if(a==b && b==c)
    {
     console.log(`Equilateral`);
    }
    else if(a==b || b==c || c==a)
    {
        console.log(`Isosceles`)
    }
    else{
        console.log(`Scalane`)
    }
}
triangleType(60,60,60)
triangleType(45,45,90)
triangleType(30,60,90)

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
function grade(m){
    let grade;
    if(m<=100 && m>=90) grade="S";
    else if(m<=90 && m>=80) grade="A";
    else if(m<=80 && m>=70) grade="B";
    else if(m<=70 && m>=60) grade="C";
    else if(m<=60 && m>=50) grade="D";
    else if(m<=50&& m>=40)  grade="E";
    else if(m<=40 && m>=0)  grade="F";
    else grade="I";
    switch(grade)
    {
        case "S":
            console.log("S grade");break;
        case "A":
            console.log("A grade");break;
        case "B":
            console.log("B grade");break;
        case "C":
            console.log("C grade");break;
        case "D":
            console.log("D grade");break;
        case "E":
            console.log("E grade");break;
        case "F":
            console.log("Student has failed");break;
        default:
            console.log("Invalid marks");
    }
}
grade(45)
grade(78)
grade(94)
grade(-4)

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