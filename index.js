function hasTargetSum(array, target) {
  // Write your algorithm here

function hasTarget(array,target){
  //iterate over the array of numbers
  for(let i=0;i<array.length; i++){
    //for the current number ,identify the number that adds to out target
    //(ie,if our number is 3,and the target is 7,the complementary number is 4)
    const complement=target-array[i];
    //iterate over the remaining numbers in the array

    for(let j=i + 1;j<array.length;j++){
      //check if any of the remaining numbers is a complement
      //if so,return true
      if(array[j]===complement) return true;
    }
  }
  // if we reach the end of our array,return false
   return false;
}






}

/* 
  Write the Big O time complexity of your function here
  
*/
function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
  }
  // if we reach the end of the array, return false
  return false;
}
/* 
  Add your pseudocode here
  iterate over the array of numbers, for the current number,identify a complementary number that adds to the target,(for example,if our number is 2,and the target is 5,the complementary number is 3),iterate over of the remaining numbers in the array,check if they compement if ,so,return true
  if we reach the end of our array,return false
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
