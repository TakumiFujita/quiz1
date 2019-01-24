$(document).on("turbolinks:load", function(){

  $("#btnCheck3").on('click',function() {

    var q1 = $("input[name=q3-q1]:checked").val();
    var q2 = $("input[name=q3-q2]:checked").val();
    var q3 = $("input[name=q3-q3]:checked").val();

    var right = 0;
    if(q1 == 3) {
      right += 1;
    }
    if(q2 == 1) {
      right += 1;
    }
    if(q3 == 1) {
      right += 1;
    }

    var percent = Math.floor(right/3*100);
    var text = `正答率は${percent}%でした！`;
    $(".result").html(text);

    if (percent == 100) {
      $(".result").css({color:"#000", background:"#ff0"});
    }
    else if (percent == 0) {
      $(".result").css({color:"#000", background:"#f00"});
    }
    else {
      $(".result").css({color:"#000", background:"#0f0"});
    }
  });

});
