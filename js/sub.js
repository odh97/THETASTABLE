/*main.js*/
$(document).ready(function(){    

/* container Swiper */

    $(window).scroll(function(){
        var scrolltop = $("html, body").scrollTop();
        console.log("scrolltop : "+scrolltop);
        if(scrolltop <= 0){
            $(".header_wrap").removeClass("ad");
            $(".aside").removeClass("ad");
        }else if(scrolltop > 0){
            $(".header_wrap").addClass("ad");
            $(".aside").addClass("ad");
        }
    });

    // 주메뉴
    $("nav ul li").bind("mouseover focus",function(){
        $(".header_wrap").addClass("on");
    });

    $(".header_wrap").bind("mouseleave blur",function(){
        $(".header_wrap").removeClass("on");
    });

    // 검색버튼
    $(".srch_wrap").bind("mouseover focus",function(){
        $(".srch_wrap").addClass("on");
    });


    /* 사이드 바 */
    $(".Family_Site a").bind("mouseover focus",function(){
        $(".Family_Site").addClass("on");
    });

    $(".Family_Site").bind("mouseleave blur",function(){
        $(this).removeClass("on");
    });

    /* 햄버거 버튼 */
    $(".btn_allmenu").click(function(){
        $("#header").toggleClass("ov");
        $(".aside").toggleClass("ov");

    });

    // 전체 리스트
    $(".allmenu_inner > ul > li > a").on("click", function(){
        var ht = $(this).next().height();
        var thisOn = $(this).parent().hasClass("on");

        $(this).parent().siblings().removeClass("on");
        $(this).parent().siblings().children("ul").slideUp();
        $(this).parent().siblings().children("ul").css({"visibility":"hidden"});

        $(this).next().slideDown();
        $(this).next().delay(300).css({"visibility":"visible"});
        $(this).parent().toggleClass("on");

        
        if(thisOn){
            $(this).next().slideUp();
            $(this).next().css({"visibility":"hidden"});
            $(this).parent().stop().animate({"height":"65px"},300,"linear");
        }else{
            $(this).parent().stop().animate({"height":(ht+50)},300,"linear");
            $(this).parent().siblings().stop().animate({"height":"65px"},300,"linear");
        }
    });

    // content4 이용약관
    $(".btn_custom a").click(function(e){
        e.preventDefault();
        $(".information").css("display","block");
    });

    $(".provision_close").click(function(e){
        e.preventDefault();
        $(".information").css("display","none");
    });

});