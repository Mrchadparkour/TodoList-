$(document).ready(function() {
    $("button").click(function() {
        var item = $("#newTask").val();
        $('#toDolist').append('<li class="test"><input type="checkbox">' + item + '</li>');
    });
    $(document.body).on('click', 'li', function () {
      $(this).fadeOut(1000, function () {
        if ($(this).find("input").is(':checked')) {
          $(this).appendTo('#finishedList').fadeIn(2).addClass('done');
        }
        else {
          $(this).appendTo('#toDolist').fadeIn(2).removeClass('done');
        }

      });
    });

    $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
