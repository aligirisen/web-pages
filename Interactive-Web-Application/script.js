$(document).ready(function () {
  $("#myForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $("#name").val("");
    $("#email").val("");
    $("#message").val("");

    $("#dialog")
      .text("Thank you, " + name + "! Your message has been sent successfully.")
      .dialog();
  });
  $('img')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();

  $(window).fadeThis({speed: 700});

  $('.showmore').showMore({
    minheight: 100,
    buttontxtmore: 'Read more...',
    buttoncss:'show-button',
    buttontxtless: 'Read less..',
    animationspeed: 500
});
});


