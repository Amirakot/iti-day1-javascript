var sum=0;
var input = prompt("enter a number");
for(var i=0;i<input.length;i++)
{
sum +=Number(input[i]);

}
console.log(sum);
// 2.
var input2,array,reversed
 input2=prompt("enter anumber");
 array=input2.split("");
 reversed=array.reverse();
 console.log(Number(reversed.join("")));
//  3.
var input3=prompt("enter anumber");
var y=Number(input3);
var x;
//111
///123 321 50000
x=Number(input3.split("").reverse().join(""));
if(y==x){
    console.log(true)
}
else {
    console.log(false)
}
function getanumber(input4,n){
input4=prompt("enter anumber");
console.log(input4)
n=prompt("enter your search")
console.log(n)
var x=input4.split("");
console.log(x)
for(var i=0;i<x.length;i++){
    if(x[i].includes(n)){
     console.log(x.indexOf(n));
    }
}
}
console.log(getanumber());
// 5.
function dele(input,index){
    input=prompt("enter anumber");
    index=prompt("enter your index number");
     var x=input.split('')
var z=x.splice(index);
console.log(z)
console.log(x)
}
console.log(dele())
// 6.
var str=prompt("enter astring");
if(str.length<2){
    console.log(" ");
}
else{
   var str2= str.slice(0,2)+str.slice(str.length-2,str.length);
// console.log(str.slice(0, 2));
   console.log(str2)
}
7.
var input5=prompt("enter astring")
var counter1=0;
var counter2=0;
var i=input5.split("")
for(var j=0;j<i.length;j++){
    if(i[j].includes("z")){
        counter1++;
    }
    else if(i[j].includes("o")){
        counter2++;

    }
  
}
  if (counter1*2 == counter2 ) {
    console.log(true);
  } else {
    console.log(false);
  }


var a=  Number(prompt("enter anumber a"));
var b = Number(prompt("enter anumber b"));
var c = Number(prompt("enter anumber c"));
var d = Number(prompt("enter anumber d"));
if((a+(b*c))===d){
    console.log(true);
}
else if(a+(b*c)!=d){
    console.log(false)
}
