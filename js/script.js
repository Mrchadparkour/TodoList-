$(document).ready(function() {
    $("button").click(function() {
        var item = $("#newTask").val();
        $('#toDolist').append('<li class="test"><input type="checkbox">' + item + '</li>');
    });
    $(document.body).on('click', 'li', function () {
      $(this).fadeOut(1000, function () {
        if ($(this).find("input").is(':checked')) {
          $(this).appendTo('#finishedList').fadeIn(2).addClass('done');
          $(this).
        }else {
          $(this).appendTo('#toDolist').fadeIn(2).removeClass('done');
        }

      });
    });

    // the following is the code for the balloon
var myp5 = new p5(function(sketch) {
  var yPos = 0;
  sketch.setup = function() {
    var myCanvas = sketch.createCanvas(100,900);
    myCanvas.parent("balloonContainer")
    sketch.frameRate(50);
  };

  sketch.draw = function() {
    yPos = yPos - 1;
    if (yPos < 0) {
      yPos = window.innerHeight;
    }

    sketch.background('#f8e2da');
    sketch.fill('blue');
    sketch.ellipse(50,yPos,60,75);
    sketch.line(50,yPos + 40,50,yPos + 115);
  };

});

myp5();

});
