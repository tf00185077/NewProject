var clear_el = document.getElementById("clear");
var send_el = document.getElementById("send");
var my_form = document.getElementById("my_form");
var card_el = document.getElementById("card");
my_form.addEventListener("submit",function(e){
  let name = document.getElementById("Name");
  let email = document.getElementById("Email");
  let know = document.getElementById("Know");
  if(name.value == ""){
    e.preventDefault();
    name.classList.remove("shake");
    name.classList.add("shake");
    name.classList.remove("error");
    name.classList.add("error");
    return;
  }else{
    name.classList.remove("shake");
    name.classList.remove("error");
  };
  if(email.value == ""){
    e.preventDefault();
    email.classList.remove("shake");
    email.classList.add("shake");
    email.classList.remove("error");
    email.classList.add("error");
    return;
  }else{
    email.classList.remove("shake");
    email.classList.remove("error");
  };
  if(know.value == ""){
    e.preventDefault();
    know.classList.remove("shake");
    know.classList.add("shake");
    know.classList.remove("error");
    know.classList.add("error");
    return;
  }else{
    know.classList.remove("shake");
    know.classList.remove("error");
  };
  card.style.transform = "rotateY(360deg)";
  card.innerHTML = "<h1>RECIEVE</h1>"
});
clear_el.addEventListener("click",function(){
  let name = document.getElementById("Name");
  let email = document.getElementById("Email");
  let know = document.getElementById("Know");
  name.value="";
  email.value="";
  know.value="";
});
clear_el.addEventListener("mousedown",function(){
  clear_el.style.transform = "translateY(5px)"
});
clear_el.addEventListener("mouseup",function(){
  clear_el.style.transform = "translateY(0px)"
});
send.addEventListener("mousedown",function(){
  send.style.transform = "translateY(5px)"
});
send.addEventListener("mouseup",function(){
  send.style.transform = "translateY(0px)"
});
