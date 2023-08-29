console.log("======== && operator ========");
$x = 10;
$y = "20";
console.log($x == 10 && $y == 20 ? "Good" : "Bad") ;
console.log(($x == 10 && $y == 20) ? "Good" : "Bad"); 
console.log(($x == 10 && $y == 2) ? "Good" : "Bad"); 

console.log("======== || operator ========");
$x = 10;
$y = "20";
console.log($x == 10 || $y == 20 ? "Good" : "Bad") ;
console.log(($x == 10 || $y == 20) ? "Good" : "Bad"); 
console.log(($x == 9 || $y === 20) ? "Good" : "Bad"); 

console.log("======== ! operator ========");
console.log(!false);
console.log(!0);
console.log(!true);
console.log(!1);
console.log(!-1);
console.log(!"Manish");
console.log(![1,2]);