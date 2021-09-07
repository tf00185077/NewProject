var light_el = document.getElementsByClassName("light");
for(let i = 0;i < light_el.length; i++){
  light_el[i].addEventListener("click",function(){
    let bright_el = light_el[i].closest("div");
    bright_el.classList.toggle("-bright");
  })
};
