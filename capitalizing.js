function capitalizeWords(inputString) {
    
    let words = inputString.split(" ");

    
    for (let i = 0; i < words.length; i++) {
        
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let result = words.join(" ");

    return result;
}

let inputString = "hello world";
let capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString); 
