document.getElementById("contact_form").addEventListener("submit", (e) => {
  alert("Please")
  e.preventDefault();
  var error_message = document.getElementById("error_message");
  if (validate()) {
    alert("tout est ok");
    error_message.style.display = "none";
  } else {
    alert("non")
    error_message.style.display = "block";
  }
});


function validate(){
  var name = document.getElementById("name").value;
  console.log(name);
  var subject = document.getElementById("subject").value;
  console.log(subject);
  var email = document.getElementById("email").value;
  console.log(email);
  var message = document.getElementById("message").value;
  console.log(message);
  var error_message = document.getElementById("error_message");
  
  var text;
  if( name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    
    return false;
  }

  if(subject.length < 10){
    text = "Veuillez entrer un nom valide";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Veuillez entrer un email valide";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Message trop court : 140 caractères minimum";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
