//Program To Create a function that eliminates spaces between two strings

function stringmanipulation(){
    let a=prompt("Enter the Required string");
    let e=a.split(" ");
    let b=e[0]+e[e.length-1];
    return b;
}
console.log(stringmanipulation());
// const str1 = "Hello";
// const str2 = "World";
// const combinedStr = str1 + " " + str2; // "Hello World"
// const withoutSpace = combinedStr.replace(" ", "");

// console.log(withoutSpace);

