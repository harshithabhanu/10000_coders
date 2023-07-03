//Program To print the length of a String with out using pre-defined Methods 
function printinglength(a){
    var count=0;
    for(i=0;a[i]!=undefined;i++){
        count+=1;
    }
    return count;
}
console.log("The Length of the string hello");
console.log(printinglength("hello"));
console.log("The Length of the string Bhanu Harshitha");
console.log(printinglength("Bhanu Harshitha"));
console.log("The Length of the string 10000 coders");
console.log(printinglength("10000 Coders"));