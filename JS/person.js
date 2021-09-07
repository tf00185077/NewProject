var count = 0;
document.addEventListener("DOMContentLoaded",function(){
let count_bar = document.getElementById("count_bar");
let count_num = document.getElementById("count_num");
let loading_page = document.getElementById("loading_page");
let nav = document.getElementsByTagName("nav");
let time = setInterval(function(){
  if(count <= 100){
    count_bar.style.width = count + "%";
    count_num.innerText = count + "%";
    count++;
  }else{
    clearInterval(time);
    loading_page.style.transform = "scale(10)";
    loading_page.style.opacity = 0;
    nav[0].style.display = "block";
    loading_page.style.zIndex = -1;
  }
},10);
});
