let li_el = document.querySelectorAll("ul.select li");

for(let i = 0; i < li_el.length; i++){
  li_el[i].addEventListener("click",function(){
    let o = 0;
    while(o < li_el.length){
      li_el[o++].className = "check";
    }
    li_el[i].className = "check active"
  })
}

function changeimg(any,color){
  document.querySelector(".fruits").src = any;
  let bg = document.querySelector(".bg");
  bg.style.background = color;
}
let nav = document.querySelector("ul.nav");
let toggle = document.querySelector("div.toggle");
toggle.addEventListener("click",function(){
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});
