$(document).on("turbolinks:load", function(){

  var showExp = function(target) {
    var exp = $(target).find(".exp").text();
    $('.qd-area').val(exp);
  };

  $(".q-box").on("mouseover",function(){
    showExp(this);
  });

});
