
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8



var generateParenthesis = function(n) {
    let res = []
    let generator = (str, open,close)=>{
        
        console.log(res,open,close,str)
        if(open >n || close >n || close>open){
return;
        }
if(open === close && str.length === 2*n){
    res.push(str)
    return ;
}

        generator("(", open+1, close)
        generator(")", open, close+1)
    }

    generator("",0,0);
    return res
};