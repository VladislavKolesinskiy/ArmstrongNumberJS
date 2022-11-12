let fn = (num) => {
    let arr = ('' + num).split('');
     let sum = 0;
     for(let i = 0; i < arr.length; i++) {
             sum = sum + Math.pow(arr[i], arr.length);
         
 }
     return sum == num ?
       console.log(true):
       console.log(false);
     
 }
 
 fn(7);
 fn(371);
 fn(1652);