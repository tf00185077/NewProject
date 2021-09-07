var read_more = document.getElementsByClassName("read_more");
for(let i = 0;i < read_more.length; i++){
  let card = read_more[i].closest("div.card");
  let span = card.querySelector("span");
  let img = card.querySelector("img");
  let detail_img = document.getElementById("detail_img");
  let detail_text = document.getElementById("detail_text");
  read_more[i].addEventListener("click",function(){
    detail_img.src = img.src;
    detail_text.innerText = span.innerText;
  });
};
