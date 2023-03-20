
console.log(`to check given string is polindrome or not`);


function polindrome (string){
// find the length of a string
       const strLength = string.length;
     
    for (let index = 0; index < strLength/ 2 ; index++) {   //loop through half of string
     
        var char=string.charAt(index)
       if  (char !== string[strLength - 1 - index]) {
            
            return `given string ${string} is not polindrome`
        }
        
    }
    return `given string ${string} is  polindrome`
}

let result = polindrome ("madam");
console.log(result);

let result1 = polindrome ("super");
console.log(result1);

let result2 = polindrome ("naman");
console.log(result2);

