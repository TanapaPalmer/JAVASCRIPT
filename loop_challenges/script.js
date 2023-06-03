//Print odds 1-20
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (var i = 1 ; i < 20 ; i += 2){
    console.log(i);
}

//Decreasing Multiples of 3
for (var a = 100 ; a > 0 ; a -= 3){
    console.log(a);
}

//Print the sequence
for (var b = 4 ; b > -4 ; b -= 1.5){
    console.log(b);
}

//Sigma
let sum = 0;
for (let c = 1; c <= 100 ; c++){
    sum += c;
}
console.log(sum)

//Factorial
let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
}
console.log(product);

