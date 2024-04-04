function isPalindrome(word) {
  // Write your algorithm here
    let RightToLeft =""
    for (let i= word.length-1; i>=0;i--){
      RightToLeft += word[i]
    }
    
    return  word===RightToLeft?true:false
  
    }
  isPalindrome("lot")
/* 
  Add your pseudocode here
    iterate through argument and store value with text starting from right to left
    introduce a conditional statement for comparison
    call function with a string argument

*/

/*
  Add written explanation of your solution here
  When function is called with 'lot' argument 
  line 3 declares and initializes with an empty string
  the for loop iterates over the word parameter('lot') and for each iteration;
    takes the argument as an array and then beginning at the end of the array;
      iteration 1: length is at 3 and index 2 (length-1)=> saves 't'
      iteration 2:                    index 1 => saves 'o'
      iteration 3:                    index 0 => saves 'l'
    with each iteration, the variable Right to left takes an increment of the element
    currently . We then end up with "tol" when i is < 0 and the iteration has reached an end
  word parameter is compared with the new reversed string and returns true or false if the 
  letters (strings) match or dont respectively
*/ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
