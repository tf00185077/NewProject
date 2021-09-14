$("div.login_page").hide();
$("button.hamburger").click(function() {
  $("button.hamburger").toggleClass("is-active");
  $("nav").toggleClass("open");
})
$("div.login_page_close").click(function(){
  $("div.login_page").hide();
})
$("a.log_in").click(function(){
  $("div.login_page").show();
})
