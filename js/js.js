
// 漢堡選單
$(function () {
  $('.showmenu').on('click',  function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
});

  //  點擊喜歡的商品，愛心變化
$(function () {
  $('.love_this').on('click', function (e) {
    e.preventDefault();
    $(this).find('i').toggleClass('far fa-heart fas fa-heart');
  });
});


// 點擊加入購物車，顯示數字累加
var count = 0;
$(function () {
  $('.add_to_cart').on('click', function (e) {
    e.preventDefault();
    count = count + 1;
    $('.add_number').html(count);
  });
});