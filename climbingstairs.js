function climbingstairs(n){

    // You are climbing a staircase. It takes n steps to reach the top.
    // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//Eg-1
//     Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

//Eg-2
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//it forms a series where Cn = Cn-1 + Cn-2 where n >0
var seriesarr=[1,2]
if(n ==1){
    return 1
}else if(n ==2){
    return 2
}else{
    for(var i=2;i<n;i++){
seriesarr[i] = seriesarr[i-1] + seriesarr[i-2]
    }
    return seriesarr[n-1]
}


}