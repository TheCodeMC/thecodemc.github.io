$(document).ready(function(){

    url = document.location.HREF+"?code=35792";
    window.history.replaceState(null, "", url);

    id = 1;

    window.setInterval(function(){
        $(".paper").css("display", "none");

        $("#paper" + id).css("display", "block");
        id++;
        if(id > 37) {
            id = 1;
        }
    }, 80);

    $( function() {
        $( "#paper" ).draggable({ containment: "#boundary", scroll: false });
    } );

    var currentMousePos = { x: -1, y: -1 };
        $(document).mousemove(function(event) {
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;
        });

    mouseOnPaper = false;

    $(document).on('mousedown', function(){
        if($('#paper:hover').length != 0){
            mouseOnPaper = true;
        }
    });

    $(document).on('mouseup', function(){
        if(mouseOnPaper){
            screenWidth = $(window).width()
            screenHeight = $(window).height()

            if((currentMousePos.x > (screenWidth / 2) - 64 && currentMousePos.x < (screenWidth / 2) + 64) && (currentMousePos.y > (screenHeight / 1.8) && currentMousePos.y < (screenHeight / 1.8) + 145)) {
                $("#anvilOverlay").css("display", "block");
                $("#anvilImg").attr("draggable", false);
            }
            else if ((currentMousePos.x > (screenWidth / 2) - 99 && currentMousePos.x < (screenWidth / 2) + 99) && (currentMousePos.y > (screenHeight / 1.32) && currentMousePos.y < (screenHeight / 1.32) + 72)) {
                $("#paper").css("display", "none");
                
                //Javascipt is, without question, one of the dumbest languages I've ever worked with
                $("#textBox").css("animation", "none")
                setTimeout(function(){
                    $("#textBox").text("[The Code] checking...").css("animation", "message 4s");
                    setTimeout(function(){
                        $("#textBox").css("animation", "none");
                        setTimeout(function(){
                            if(hashCode($("#paper").text().replace(/\s/g, '')) == 48733166)
                            {
                                $("#textBox").text("[The Code] correct code, redirecting...").css("animation", "message 4s");
                                setTimeout(function(){
                                    var _0x50e6=["\x70\x72\x6F\x67\x72\x65\x73\x73\x2E\x68\x74\x6D\x6C","\x72\x65\x70\x6C\x61\x63\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E"];
                                    window[_0x50e6[2]][_0x50e6[1]](_0x50e6[0])
                                }, 1000);
                            }else{
                                $("#textBox").text("[The Code] incorrect code").css("animation", "message 4s");
                                $("#paper").css("display", "block");
                            } 
                        }, 20);
                    },4000);
                }, 20);
            }
        }

        mouseOnPaper = false;
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $("#anvilOverlay").css("display", "none");
    }
    });

    $("#dim").click(function(){
        $("#anvilOverlay").css("display", "none");
    });

    $("#confirm").click(applyName);

    $(document).keyup();

    function applyName() {
        $("#anvilOverlay").css("display", "none");

            $("#name").html($("#input").val());

            var anvilSound = document.createElement("audio");
            anvilSound.src = "sounds/anvil.ogg";
            anvilSound.volume = 0.5;
            anvilSound.play();
    }
    
});

function hashCode (str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
