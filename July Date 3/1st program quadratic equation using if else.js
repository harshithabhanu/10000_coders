
function printinglength(a){
    var count=0;
    for(i=0;a[i]!=undefined;i++){
        count+=1;
    }
    return count;
}
console.log(printinglength("hello"));
console.log(printinglength("Bhanu Harshitha"));
console.log(printinglength("10000 coders"));