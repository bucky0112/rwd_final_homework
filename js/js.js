$(document).ready(function() {

  // 漢堡選單
  $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });


  //  點擊喜歡的商品，愛心變化
  $('.love_this').click(function(e){
    e.preventDefault();
    if($('#hollow_heart').attr('class') == 'far fa-heart'){
      $('#hollow_heart').attr('class', 'fas fa-heart');
    } else {
      $('#hollow_heart').attr('class', 'far fa-heart')
    }
  })
 });
