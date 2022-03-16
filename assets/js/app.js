var audio = document.getElementById("myAudio");

$(document).ready(function() {
    setTimeout(function() {
        audio.play();
        $(".main3-chat").fadeIn();
        $(".main3-chat").fadeIn("slow");
        $(".main3-chat").fadeIn(2000);
        $(".chat-sub-icon1").toggle();
        $(".chat-sub-icon2").toggle();
    }, 1000);
});




$(".chat-icon2").click(function() {
    $(".main3-chat").toggle();

    $(".chat-sub-icon1").toggle();
    $(".chat-sub-icon2").toggle();
});


$(".chat-icon3").click(function() {
    $(".sub-chat").toggle();
    $(".chat-sub-icon1").toggle();
    $(".chat-sub-icon2").toggle();
});




$(".new-con").click(function() {
    $(".sub-chat").toggle();
    $(".main3-chat").toggle();
    $(".chat-icon3").toggle();
    $(".chat-icon2").toggle();

});



$(".submit-buttom").click(function() {


    var inputVal = $("#inputtext").val();

    if (inputVal != '') {

        $("#inputtext").val('');
        var inputText = inputAppend(inputVal);

        $("#chat-item").append(inputText);


        getApi();

    } else {
        alert('Enter Valid Input');
    }


});


function getApi() {
    $.ajax({
        dataType: "json",
        type: "get",
        url: 'https://api.adviceslip.com/advice',
        data: { "type": "check" },
        success: function(response) {
            audio.play();
            var outp = outputAppend(response.slip.advice)
            $("#chat-item").append(outp);
            var scroll = document.getElementById("chat-item");
            scroll.scrollTop = scroll.scrollHeight;
        }

    });
}


function inputAppend(text) {
    var ip = "<div class='text-left  me-4  mb-4  d-flex justify-content-start align-items-start'><div class='mt-2 user-icon me-2'> <i class='fa fa-user'></i></div> <p>" + text + "</p> </div>";
    return ip;

}


function outputAppend(text) {
    var op = "<div class='text-right  ms-4  mb-4  d-flex justify-content-end align-items-start'> <p>" + text + "</p><div class='mt-2 user-icon ms-2'> <i class='fa fa-user'></i></div> </div>";
    return op;

}





//