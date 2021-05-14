$(document).ready(function() {

  $("#button1").click(function() {
    $(".box").each(function(){
        var colorCardinal = "rgb(120, 151, 51)";
            if($(this).css('background-color') == colorCardinal){
                $(this).css('background-color', '');
            }else{
                $(this).css('background-color', colorCardinal);
            }
    }); 
  });

  $("#button2").click(function() {
    $('.box').each(function(){
        $(this).toggleClass('round-edge');
    });
  });

  $("#button3").click(function() {
    var new_box = document.createElement('div');
    var existingBoxes = $(".box").length;
    var new_id = existingBoxes+1;
    $(new_box).attr("id", "box"+new_id);
    $(new_box).addClass("box");
    $(new_box).addClass("outlined");
    $("#boxes").append(new_box);
  });

  
});
