import "./style.css";

console.log("heys");


function fibs(n) {
    
    let fibs = [0, 1]
    for (let index = 2; index < n; index++) {
         fibs[index] = fibs[index - 1] + fibs[index - 2]
         }
    
    return fibs
        }

console.log(fibs(15))

function fibsRec(n, index = 2, fibs = [0, 1]) {
    if (index === n) {
        return fibs
    } else {
        fibs[index] = fibs[index -1] + fibs[index - 2];
        return fibsRec(n, index + 1,fibs)

    }
}
console.log(fibsRec(15))


function mergeSort(array) {
    if (array.length < 2) {
        return array
} else if (array.length > 1) {
    const  half = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, half);
    const secondHalf = array.slice(half);
     return merge(mergeSort(firstHalf),mergeSort(secondHalf))
}
function merge(firstHalf,secondHalf) {
     const merged = []  
   
 while (firstHalf.length && secondHalf.length) {
    if (firstHalf[0] < secondHalf[0]) {
      merged.push(firstHalf.shift());
    } else {
      merged.push(secondHalf.shift());
    }
  }
     return merged.concat(firstHalf,secondHalf) 
      
    }

    


}

console.log(mergeSort([39,204,1,2,6,7,8]))