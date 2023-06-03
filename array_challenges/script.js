//Always Hungry
function Hungry(){

    var alwaysHungry = [3.14, "food", "pie", true, "food", 4, 1, 5, 7, 2];
    for(var i = 0; i < alwaysHungry.length; i++){
        if (alwaysHungry[i] == 3.14){
            console.log('yummy, yummy');
        }else if (alwaysHungry[i] == "food"){
            console.log('yummy, yummy');
        }else if (alwaysHungry[i] == "pie"){
            console.log('yummy, yummy');
        }else if(alwaysHungry[i] == true){
        console.log('yummy, yummy');
        }else{
            console.log("I'm hungry");
        }
    }
}
Hungry();

//High Pass Filter
let arr = [6,8,3,10,-2,5,9];
let cutoff = filteredAr(arr, 5);

function filteredAr(array, cutoff) {
    let filteredAr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
        filteredAr.push(array[i]);
      }
    }
    return filteredAr;
  }
console.log(cutoff);
    


//Better than average
let numbers = [6,8,3,10,-2,5,9];
let count = betterThanAverage(numbers);
console.log(count);

function betterThanAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let average = sum / arr.length;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > average) {
        count++;
      }
    }
    return count;
}

//Array Reverse
var result = ["a", "b", "c", "d", "e"].reverse();
console.log(result);

//Fibonacci Array
function FibonacciArray(n) {
    let fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr;
  }

let fibArr = FibonacciArray(10);
console.log(fibArr);
