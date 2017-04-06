$(document).ready(function() {
    $("button").click(function() {
        var item = $("#newTask").val();
        $('#toDolist').append('<li class="test"><input type="checkbox">' + item + '</li>');
    });
    $(document.body).on('click', 'li', function () {
      $(this).fadeOut(1000, function () {
        if ($(this).find("input").is(':checked')) {
          $(this).appendTo('#finishedList').fadeIn(2).addClass('done');
        }else {
          $(this).appendTo('#toDolist').fadeIn(2).removeClass('done');
        }

      });
    });
  // the following is the code for the balloon
    var balloon = function (sketch) {

  var x = 50;
  var y = 50;

  sketch.setup = function() {
    sketch.createCanvas(100,200);

  };

  sketch.draw = function() {
    sketch.background('#f8e2da');
    sketch.fill('blue');
    sketch.ellipse(x,y,60,75);
    sketch.line(x,87,50,175);


  };
};

var myBalloon = new p5(balloon);

});
