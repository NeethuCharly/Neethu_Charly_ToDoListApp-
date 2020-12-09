let username=document.getElementById("Username");
let pwd=document.getElementById("Password");
let usernameerror=document.getElementById("usernameerror");
let pwderror=document.getElementById("pwderror");
let flag=0;
function validation()
{
let user=/^(admin)$/
let exp=/^(12345)$/
    if(username.value.match(user)){
        usernameerror.innerHTML="Valid";
        usernameerror.style.color="green";
        flag=flag+1;
       
    }
    else{
        usernameerror.innerHTML="Invalid!";
        usernameerror.style.color="red";
        flag=0;
    }

    if(pwd.value.match(exp)){
        pwderror.innerHTML="Valid";
        pwderror.style.color="green";
        flag=flag+1;
       
    }
    else{
        pwderror.innerHTML="Invalid!";
        pwderror.style.color="red";
        flag=0;
    }   

  if(flag==2){
      return true;
  }
  else{
      return false;
  }
}
