var count = 0;
document.addEventListener("DOMContentLoaded", function() {
  let count_bar = document.getElementById("count_bar");
  let count_num = document.getElementById("count_num");
  let loading_page = document.getElementById("loading_page");
  let nav = document.getElementsByTagName("nav");
  let time = setInterval(function() {
    if (count <= 100) {
      count_bar.style.width = count + "%";
      count_num.innerText = count + "%";
      count++;
    } else {
      clearInterval(time);
      loading_page.style.transform = "scale(10)";
      loading_page.style.opacity = 0;
      nav[0].style.display = "block";
      loading_page.style.zIndex = -1;
      setTimeout(function() {
        loading_page.style.display = "none";
      }, 600)
    }
  }, 10);
});
var scale =1;
var scale2=1;
document.addEventListener("wheel",function(e){
  // console.log(e.deltaX);
  // console.log(e.deltaY);
  this.preventDefault();
  let nav = document.getElementById("nav");
  if(scale > 3){
nav.innerHTML="";
    return;
  }else{
    if(e.deltaY > 0){

      nav.style.transform=`scale(${scale=scale+0.1})`;
      nav.style.opacity = scale2 =scale2-0.05;
      console.log(scale2);
      console.log(scale);
    };
  }

})
