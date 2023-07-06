//Program To Create a function to checking mobile number india or not
function phonenumber(){
    let a=prompt("Enter your mobile number");
   let b=(a.length==10);
   let c= a.startsWith(a,8);
   let d= a.startsWith(a,6);
   let e= a.startsWith(a,7);
   let f= a.startsWith(a,9);
   if(b==true||c==true||d==true||e==true||f==true){
    console.log("It is an indian number");
}else{
    console.log("Not an indian number");
}
}
phonenumber();

