function findhappynumber(n){
    var arr = n.toString().split('')
    console.log("array", arr)
    var psum = 0;
     sum = arr.reduce((psum, a)=> psum + a*a, 0);//reduce method
     console.log(sum)
      if(sum ==1){
      return true
   }else {
     var number =sum;
     findhappynumber(number)// recursive function
   }
}