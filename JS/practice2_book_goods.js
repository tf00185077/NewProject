let finance = document.getElementById("finance").outerHTML;
let novel = document.getElementById("novel").outerHTML;
let inspire = document.getElementById("inspire").outerHTML;
let financeMark =  document.getElementById("financeMark");
let novelMark =  document.getElementById("novelMark");
let inspireMark =  document.getElementById("inspireMark");
let outbook =  document.getElementById("outbook");
let count = 0;
let count2 = 0;
financeMark.addEventListener("click",function(){
  outbook.innerHTML = finance;
  count = 0;
  count2 = 0;
})
novelMark.addEventListener("click",function(){
  outbook.innerHTML = novel;
  count = 0;
  count2 = 0;
})
inspireMark.addEventListener("click",function(){
  outbook.innerHTML = inspire;
  count = 0;
  count2 = 0;
})
$("div.content").click(function(e) {
  $("div.content").removeClass("check");
  $(this).addClass("check");
  $("main").css("backgroundColor",$(this).css("backgroundColor"))
})
$("button.hamburger").click(function() {
  $("button.hamburger").toggleClass("is-active");
  $("nav").toggleClass("open");
})


$("div.arrow.right").click(function() {
  if ($("div.box:last-child").position().left>10) {
    count -= 70;
    $("div.box").css("transform", "translateX(" + count + "%)");
  }
})
$("div.arrow.left").click(function() {
  if (count < 0) {
    count += 70;
    $("div.box").css("transform", "translateX(" + count + "%)")
  }

})

$("div.arrow.down").click(function() {
  if ($("div.box:last-child").position().top > 50) {
    count2 -= 70;
    $("div.box").css("transform", "translateY(" + count2 + "%)");
  }
})
$("div.arrow.up").click(function() {
  ;
  if (count2 < 0) {
    count2 += 70;
    $("div.box").css("transform", "translateY(" + count2 + "%)")
  }
})
$(window).resize(function(){
  $("div.box").css("transform","translate(0)");
  count = 0;
  count2 = 0;
})
