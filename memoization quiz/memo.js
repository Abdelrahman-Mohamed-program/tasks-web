function add() {
    let cache={
      
    }
    
      function n(num1,num2){
        if (`${num1},${num2}`in cache||`${num2},${num1}`in cache) {
            console.log(true);//test
        }else{
            cache[`${num1},${num2}`]=num1+num2
            cache[`${num2},${num1}`]=num1+num2
        }
       return cache[`${num1},${num2}`]
    }

    return n;
}

addition=add()

console.log(addition(1,2));
console.log(addition(3,2));


console.log(addition(1,2));
console.log(addition(3,2));


console.log(addition(2,3));
console.log(addition(2,1));