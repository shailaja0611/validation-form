const form=document.querySelector("form"),
   emailfield =form.querySelector("email-field"),
   emailinput=emailfield.querySelector("email"),
   passfield=form.querySelector("creat-passwosd"),
   passinput=passfield.querySelector("password"),
   cpassfield=form.querySelector("confirm-password"),
   cpassinput=cpassfield.querySelector("cpassword");



   //Email validation
   function checkEmail(){


   }

   // calling function on form sumit
   form.addEventListener("submit",(e)=>{ 
    e.preventDefault();//preventing form submitting
   })