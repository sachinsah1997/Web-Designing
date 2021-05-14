function formValidation()
{
var email = document.registration.email;
var uname = document.registration.uname;
var password = document.registration.password;
var repassword = document.registration.repassword;

/* most of the browser default provides email check if we specify the input type email*/
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var str = "The Following fields must be filled out";
/* this variable is used to check if no field is empty and the str value is unchanged */
var temp = "The Following fields must be filled out";

if(email.value.length == 0){
  str += "\nEmail :";
}

if(uname.value.length == 0){
  str += "\nUsername :";
}

if(password.value.length == 0){
  str += "\npassword :\nPassword has to be 8 characters long!";
}

if(repassword.value.length == 0){
  str += "\nConfirm Password :";
}

if(str != temp){
  alert(str);
  return true;
}else{

      if(!email.value.match(mailformat)){
          alert("Invalid email address!\nPlease enter valid email address");
          document.registration.email.focus();
          return true;
      }

      if(uname.value.length > 40){
          alert("Username can be  max 40 characters long!");
          return true;
      }


      if(password.value != repassword.value){
          alert("Password and confirm password should be same !");
          return true;
      }


      if(email.value.length > 60){
          alert("Email can be max 60 characters long!");
          return true;
      }

      if(password.value.length != 8){
          alert("Password has to be 8 characters long!");
          return true;
      }

         alert("The Following fields filled out  \nEmail : "+ email.value +"\nUsername : "+ uname.value +"\npassword : "+ password.value  + "\nconfirm Password :" + repassword.value);
         return true;
}

// if(email.value.length == 0 && uname.value.length == 0 && password.value.length == 0 && repassword.value.length == 0){
//   alert("The Following fields must be filled out \nEmail : \nUsername : \npassword : \nPassword has to be 8 characters long! " +  "\nconfirm Password :");
//   return true;
// }

// if(email.value.length == 0 && uname.value.length == 0 && password.value.length == 0 ){
//   alert("The Following fields must be filled out \nEmail : \nUsername : \npassword :  \nPassword has to be 8 characters long! ");
//   return true;
// }

// if(email.value.length == 0 && uname.value.length == 0 && repassword.value.length == 0){
//  alert("The Following fields must be filled out \nEmail : \nUsername : \nconfirm Password : ");
//   return;  
// }

// if(email.value.length == 0 && uname.value.length == 0){
//    alert("The Following fields must be filled out \nEmail : \nUsername : ");
//   return;  

// }

// if(email.value.length == 0 && password.value.length == 0  && repassword.value.length == 0){
//   alert("The Following fields must be filled out \nEmail : \npassword : \nPassword has to be 8 characters long! \nconfirm Password : ");
//   return true;
// }

// if(email.value.length == 0 && password.value.length == 0){
//  alert("The Following fields must be filled out \nEmail : \npassword : \nPassword has to be 8 characters long! ");
//   return true; 
// }

// if(password.value.length == 0 && repassword.value.length == 0){
//  alert("The Following fields must be filled out " + 
//    "\npassword : \nPassword has to be 8 characters long! \nconfirm Password : ");
//   return true; 
// }


// if(repassword.value.length == 0){
//    alert("The Following fields must be filled out \nConfirm password: \nPassword and Confirm Password should be same!");
//   return true;
// }

  return false;
}