"use strict"

let originalString = prompt("enter a string","(type here)")
let compressedString = ""
let counter = 1;
for (var i = 0; originalString.length >= i + 1 ; i++) {
	originalString[i]

	
    if (originalString[i] === originalString[i-1]){
     counter += 1;
     if (originalString.length === i + 1){
     	compressedString += counter;
     	compressedString += originalString[i-1]

     }
      }
    else if ( i=== 0){
    	counter += 0}
    else if (originalString.length === i + 1){
    	compressedString += originalString[i]
    	compressedString += (counter - 1);
    }
    else {
      compressedString += counter;
      compressedString += originalString[i-1];
      counter = 1
      }
	
}

alert(compressedString)