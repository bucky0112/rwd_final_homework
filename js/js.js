
// 漢堡選單
$(function() {
  $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });

  //  點擊喜歡的商品，愛心變化
 $(function(){
  $('.love_this').click(function(){
    $(this).find('i').toggleClass('far fa-heart fas fa-heart')
  });
});