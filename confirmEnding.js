
function confirmEnding(str, target) {
 
//   // create a variable and store sthe starting position (Location at which to begin extracting characters)
//   // substr() synatax :  "str.substr(start [, length])"
//   var pos = str.length - target.length;
  
//   // if the extracted characters are equal to the target return true, else return false
//   return (str.substr(pos, str.length) === target) ? true : false;
  
   // check if the last character of the string is the same as the target 
   return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");

