function validateForm(){
  
  let error = "";
  var _error= document.getElementById("_error");

  let firstName = document.getElementById("fname").value;
      if (firstName == ""){
          _error.style.display="block";
          return false;
      }

  let lastName = document.getElementById("lname").value;
      if (lastName == ""){
          _error.style.display="block";
          return false;
      }

  let emailE = document.getElementById("email").value;
      if (emailE == ""){
          _error.style.display="block";
          return false;
      }

  let passwordE = document.getElementById("password").value;
      if (passwordE == ""){
          _error.style.display="block";
          return false;
      }
      let passwordC = document.getElementById("confirm").value;
      if (passwordC == ""){
          _error.style.display="block";
          return false;
      }

}


/*
function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x ==""){
        alert("Name must be filled out");
        return false;
    }
function validateForm(){
  
  let error = "";

  let firstName = document.getElementById("fname").value;
      if (firstName == ""){
          error += 'First name is required';
      }


  let er = document.getElementById("display");
  if(er == "error"){
    
  }
}
    <script>
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

onsubmit="return validateForm()" method="post"


<!- div class="alert alert-warning">
                        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                        Please fill this field
                    </div -->
</script>

 let emailE = document.getElementById("email").value;
      if (emailE == ""){
          error += 'email is required';
          _error.style.display="block";
          return false;
      }
}*/