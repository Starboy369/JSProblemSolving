
var repetetionarray  =[]

function findhappynumber(n){
    var arr = n.toString().split('')
    console.log("array", arr)
    var psum = 0;
     sum = arr.reduce((psum, a)=> psum + a*a, 0);//reduce method
     console.log(sum)
      if(sum ==1){
      return true
   }else if(repetetionarray.includes(sum)) { //to avoid infinite loop
    return false
   }else {
    repetetionarray.push(sum)
    var number =sum;
    return findhappynumber(number)    // recursive function
   }
}

//here is the link where you can find the explanation - https://medium.com/@rgakshay336/leetcode-happynumber-in-javascript-f33eef09aa81
