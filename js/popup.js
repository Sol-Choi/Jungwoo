$(document).ready(function(){

    //btn-close 클릭하면 기능이 발생한다.
    $(".btn-close").click(function(){
        // 팝업창이 꺼진다.
    $(".popup_box").removeClass("active");
    $(".popup_bg").removeClass("active");
    });

});