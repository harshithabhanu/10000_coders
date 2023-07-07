// Two programs otp and pop
// Program for OTP generation
function otp(){
    let a=prompt("Enter your mobile number");
    let b=(a.length==10);
   let c= Math.random().toFixed(5)*10;
   c=String(c);
   let d=c.split(".");
   let e=d[d.length-1];
    if(b==true){
        alert("otp is sent on the console");
        console.log(e);
    }else{
        console.log("enter a valid number");
    }
}
otp();

// Program that behaves like a pop method with out using pop method
function popp(){
    let a=[1,2,3,4,5];
    let b=[];
    for(i=0;i<a.length-1;i++){
    b[i]=a[i];
    }
console.log(b);
}
popp();

