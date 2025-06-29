let validate= ()=>{
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#email").value.trim();
    let num = document.querySelector("#num").value.trim();
    let pass = document.querySelector("#pass").value.trim();
    let cpass = document.querySelector("#cpass").value.trim();

    let errorname = document.querySelector("#errorname");
    let emailerror = document.querySelector("#emailerror");
    let numerror = document.querySelector("#numerror");
    let passerror = document.querySelector("#passerror");
    let cpasserror = document.querySelector("#cpasserror");


    if(name==""){
        errorname.innerHTML = " Please enter your name";
        // errorname.Style.color = "red";
        return false;
    }
    else if (email==""){
       emailerror.innerHTML = " Please enter your Email" ;
       return false;
    }
    
    else if (!(email.include("@") && email.include(".com"))){
       emailerror.innerHTML = " Please enter valid Email" ;
       return false;
    }
      else if (num==""){
       numerror.innerHTML = " Please enter your number" ;
       return false;
    }
    else if (num.length!==10){
        numerror.innerHTML = " Please enter 10 digit number !";
        return false ;
    }
    else if (isNaN(num)){
        numerror.innerHTML = " Please enter number only ";
        return false;
    } 
      else if (pass==""){
       passerror.innerHTML = " Please enter your pass" ;
       return false;
    }
      else if (cpass==""){
       cpasserror.innerHTML = " Please enter your cpass" ;
       return false;
    }
    
    else if (pass!=cpass){
       cpasserror.innerHTML="please Enter same password" ;
       document.querySelector("#cpass").value="";
       document.querySelector("#cpass").focus()
       return false ;
    }
    else if (!(pass.match(/[1234567890]/)) && pass.match(/[!@#$%&*_()]/) && pass.match(/[A-Z]/) && pass.match(/[a-z]/))
        {
 passerror.innerHTML = " please Enter a strong password";
 return false;
    }
};