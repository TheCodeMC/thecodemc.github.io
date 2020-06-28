$(document).ready(function(){
  
  var vidId = $("#vidID").text();

  var vid = document.getElementById("logoVideo");

  $("img.responsive").click(function(){
    if($("#lightbox").css("display") == "none") {
      $(".lightboxImg").css("display", "none");
      $("this").css("display", "block");

      $("#lightbox").css("display", "block");

      var alt = $(this).attr("alt");
      $(".lightboxImg").each(function(){
        if($(this).attr("alt") == alt){
          $(this).css("display", "block")
        }
      });
    }
  });

  $("#close").click(function(){
    $("#lightbox").css("display", "none");
  });

  $("#dim").click(function(){
    $("#lightbox").css("display", "none");
  });

  //$("#logo").click(function(){
  //  $(this).css("display", "none");
  //  $(".trailer").css("display", "block");
  //});

  function onPlayerStateChange(event) {
    switch(event.data) {
        case YT.PlayerState.ENDED:
          $(".logo").css("display", "block");
          $(".trailer").css("display", "none");

          $('#trailerWrapper').html();

          vid.play();
          break;
    }
  }

  $('#logoVideo').click(function() {

    $(".logo").css("display", "none");
    $(".trailer").css("display", "block");

    $('#trailerWrapper').html('<iframe id="trailerFrame" width="420" height="315" src="https://www.youtube.com/embed/'+
      vidId+'?enablejsapi=1&autoplay=1&autohide=1&showinfo=0" '+
      'frameborder="0" allowfullscreen></iframe>');

    new YT.Player('trailerFrame', {
      events: {
          'onStateChange': onPlayerStateChange
      }
    });

    vid.currentTime = 0;
    vid.pause();
  });

  $("#logoVideo").on("ended",function(){
    vid.currentTime = 3.76;
    vid.play();
  });

});
