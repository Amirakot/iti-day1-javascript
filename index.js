// // 1-takes today’s temperature as a parameter, prints: “HOT” if the entered temperature are more than or equals 30 and “Cold” if it’s less than 30 (use ternary conditional operator).
// let temperatue = parseInt(prompt("enter atoday temperature"));
// let result = temperatue >= 30 ? "HOT" : "COLD";
// console.log(result);
// // On contact page prompt user to enter his name, make sure that name is string, and let the user enter his birth year and make sure that it is a number, and it is less than 2010, and then calculate his age. For each prompt if user input valid show him next prompt, if not valid show him the same prompt again 3 times if put valid data stop loops without break keyword (use loops). And after validating user input, write all user input on the page in that format:

// // Name: ahmed

// // Birth year: 1981

// // Age: 30
let birthdayyeras;
let age;
let currentyear=2022;
let username=prompt("enter your name");
if(String(username)){
birthdayyeras=prompt("enter birthdayyear");
if(isFinite(birthdayyeras)&&!isNaN(birthdayyeras)&&birthdayyeras<2010){
age =currentyear-birthdayyeras;
console.log(age)
}

}

    for(var i=0;i<3;i++){
        birthdayyeras = prompt("enter your name");
        if(Number(birthdayyeras)){
       
        }
        else{
            console.log("username :",username)
            console.log("birthday:",birthdayyeras);
            console.log("age:",age)
        }
    }
// // 3.// A X^2+B X + C = 0
// program to solve quadratic equation
let root1,root2;
let a=(prompt("entrer value of a"));
console.log(a);
let b = (prompt("entrer  avalur of b"));
console.log(b);
let c = (prompt("entrer avalue of c"));
console.log(c);
 let base=2*a;
let disc=Math.sqrt( b * b - 4 * a * c);
if(disc>0){
  root1 = (-b + disc) / base;
  root2 = (-b - disc) / base;
  console.log("the quedratic of root is ="+root1,root2)

}
else if(disc==0){
    root1=root2=-b /(2*a);
    console.log("root1 ="+root1+" "+"root2 ="+root2)
}
else{
    let realpart=-b/(2*a).toFixed(2);
    console.log(realpart);
}

//
// 
// console.log("root1 = ",root1);
// console.log("root2 =",root2)

// // 4.
// // Given two numbers N and M. Print the summation of their last digits. 

// // Input N: 12 

// // Input M: 13 

// // Output: 5 

let num1=prompt("enter num1");
console.log(num1);

let num2=prompt("enter num2");
console.log(num2)
let res=Number(num1.slice(1))+Number(num2.slice(1));
console.log(res)

// 5.
let distance=prompt("enter a distance");
let calculate=distance*2
console.log("distance to other"+calculate);