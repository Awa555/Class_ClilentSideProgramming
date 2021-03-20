// alert('Welcom to Awa website!')


// Go back top
// The following go back top of code has been sourced from https://www.itread01.com/article/1456879057.html
$(document).ready(function(){
 // First hidden #back-to-top
 $("#back-to-top").hide();
 //當滾動條的位置處於距頂部600畫素以下時，跳轉連結出現，否則消失
 $(function () {
  $(window).scroll(function(){
   if ($(window).scrollTop()>600){
    $("#back-to-top").fadeIn(500);
   }else{
    $("#back-to-top").fadeOut(500);
   }
 });
 //當點選跳轉連結後，回到頁面頂部位置
 $("#back-to-top").click(function(){
  $('body,html').animate({scrollTop:0},500);
   return false;
  });
 });
});



// Date
// The following 3 lines of code has been sourced from https://www.w3schools.com/js/
function ShowTime(){
    　document.getElementById('showbox').innerHTML = new Date();
    　setTimeout('ShowTime()',1000);
}

