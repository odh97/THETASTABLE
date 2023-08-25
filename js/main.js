/*main.js*/
$(document).ready(function(){

// <!-- Swiper JS -->

// <!-- Initialize Swiper -->

var ww = $(window).width();
var padSize=1023;
var moSize=768;


if (ww >= padSize && swiper == undefined) {
    var swiper = new Swiper(".mySwiper", {
    
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },
            
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 0,
        mousewheel: true,
        pagination : false,
        speed: 800,
        allowTouchMove: false,
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

} else if (ww < padSize && swiper != undefined) {
    swiper.destroy();
    swiper = undefined;
    swiper.mousewheel.disable();//swiper 함수 휠 이벤트 끄기
}

    
/* <!-- //Swiper JS --> */

    // 윈도우 사이즈
    var wh = $(window).height();
    console.log(wh);
    $(".main_visual").height(wh);
    $(".content1").height(wh);
    $(".content2").height(wh);
    $(".content3").height(wh);
    $(".content4").height(wh);

    $(window).on('resize', function (){
        var wh = $(window).height();

        $(".main_visual").height(wh);
        $(".content1").height(wh);
        $(".content2").height(wh);
        $(".content3").height(wh);
        $(".content4").height(wh);

        ww = $(window).width();

        if (ww >= padSize && swiper == undefined) {
            var swiper = new Swiper(".mySwiper", {
            
                navigation : {
                    nextEl : '.swiper-button-next',
                    prevEl : '.swiper-button-prev',
                },
                    
                direction: "vertical",
                slidesPerView: "auto",
                spaceBetween: 0,
                mousewheel: true,
                pagination : false,
                speed: 800,
                allowTouchMove: false,
            
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        
        } else if (ww < padSize && swiper != undefined) {
        swiper.destroy();
        swiper = undefined;
        }
        
        console.log("type : "+$.type(swiper));
    });
    console.log("type : "+$.type(swiper));

$(window).mousewheel(function(){
    if(ww<padSize) return false;//함수 실행 정지
    swiper.mousewheel.enable();//swiper 함수 휠 이벤트 켜기
    
});




    

/* container Swiper */
    // mousewheel (PC 사이즈)
    $(window).on("mousewheel",function() {
        if(ww<padSize) return false;//함수 실행 정지
        var has1 = $(".swiper-pagination-bullet").eq(0).hasClass("swiper-pagination-bullet-active");
        var has2 = $(".swiper-pagination-bullet").eq(1).hasClass("swiper-pagination-bullet-active");
        var has3 = $(".swiper-pagination-bullet").eq(2).hasClass("swiper-pagination-bullet-active");
        var has4 = $(".swiper-pagination-bullet").eq(3).hasClass("swiper-pagination-bullet-active");
        var has5 = $(".swiper-pagination-bullet").eq(4).hasClass("swiper-pagination-bullet-active");
        var has6 = $(".swiper-pagination-bullet").eq(5).hasClass("swiper-pagination-bullet-active");

        if(has1){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(0).addClass("white");

            $(".swiper-pagination-bullet.white").siblings().css({"background":"#fff"});
            $(".swiper-pagination-bullet.white").css({"background":"transparent"});

        }
        if(has2){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(1).addClass("white");

            $(".swiper-pagination-bullet.white").siblings().css({"background":"#fff"});
            $(".swiper-pagination-bullet.white").css({"background":"transparent"});

        }
        if(has3){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(2).addClass("black");

            $(".swiper-pagination-bullet.black").siblings().css({"background":"#666"});
            $(".swiper-pagination-bullet.black").css({"background":"transparent"});          

        }
        if(has4){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");


            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(3).addClass("black");

            $(".swiper-pagination-bullet.black").siblings().css({"background":"#666"});
            $(".swiper-pagination-bullet.black").css({"background":"transparent"}); 
        }
        if(has5){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"none"});
            $(".Scroll_topbtn").addClass("on");
            $(".Scroll_topbtn").removeClass("ad");

            // 콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(4).addClass("black");

            $(".swiper-pagination-bullet.black").siblings().css({"background":"#666"});
            $(".swiper-pagination-bullet.black").css({"background":"transparent"}); 
        }
        if(has6){
            // 헤더
            $(".header_wrap").stop().animate({"opacity":"0","z-index":"-1"},500,"linear");

            // 사이드바 
            $(".Scroll_topbtn").addClass("on");
            $(".Scroll_topbtn.on").addClass("ad");

            // 콘텐츠 nav_txt
            $(".swiper-pagination-bullet").css({"background":"#666"});

        }

    });
    
    // click (PC 사이즈)
    $(".swiper-pagination-bullet").click(function(){
        if(ww<padSize) return false;//함수 실행 정지

        var thisNum = $(this).index();
        console.log(thisNum);

        if(thisNum == 0){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(0).addClass("white");

            $(".swiper-pagination-bullet.white").siblings().css({"background":"#fff"});
            $(".swiper-pagination-bullet.white").css({"background":"transparent"});

        }
        if(thisNum == 1){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(1).addClass("white");

            $(".swiper-pagination-bullet.white").siblings().css({"background":"#fff"});
            $(".swiper-pagination-bullet.white").css({"background":"transparent"});

        }
        if(thisNum == 2){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(2).addClass("black");

            $(".swiper-pagination-bullet.black").siblings().css({"background":"#666"});
            $(".swiper-pagination-bullet.black").css({"background":"transparent"});          

        }
        if(thisNum == 3){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");


            //콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(3).addClass("black");

            $(".swiper-pagination-bullet.black").siblings().css({"background":"#666"});
            $(".swiper-pagination-bullet.black").css({"background":"transparent"}); 
        }
        if(thisNum == 4){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"none"});
            $(".Scroll_topbtn").addClass("on");
            $(".Scroll_topbtn").removeClass("ad");

            // 콘텐츠 nav_txt
            $(".swiper-pagination-bullet").removeClass("white black");
            $(".swiper-pagination-bullet").eq(4).addClass("black");

            $(".swiper-pagination-bullet.black").siblings().css({"background":"#666"});
            $(".swiper-pagination-bullet.black").css({"background":"transparent"}); 
        }
        if(thisNum == 5){
            // 헤더
            $(".header_wrap").stop().animate({"opacity":"0","z-index":"-1"},500,"linear");

            // 사이드바 
            $(".Scroll_topbtn").addClass("on");
            $(".Scroll_topbtn.on").addClass("ad");

            // 콘텐츠 nav_txt
            $(".swiper-pagination-bullet").css({"background":"#666"});

        }

    });


    var wintop = 0;
    // 태블릿 사이즈
    $(window).scroll(function(){    
        wintop = $(window).scrollTop();
        console.log("wintop : " + wintop);

        if(ww>padSize) return false;//태블릿 사이즈 끄기 (윈도우 사이즈가 더 크면 1023)
        if(ww<moSize) return false;//태블릿 사이즈 끄기 (모바일 사이즈가 더 크면 375)

        if(wintop >= 0 && wintop < 700){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-slide").removeClass("swiper-slide-active");
            $(".swiper-slide").eq(0).addClass("swiper-slide-active");

        }
        if(wintop >= 700 && wintop < 1600){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-slide").removeClass("swiper-slide-active");
            $(".swiper-slide").eq(1).addClass("swiper-slide-active");

        }
        if(wintop >= 1600 && wintop < 2200){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-slide").eq(0).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(3).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(2).addClass("swiper-slide-active");       

        }
        if(wintop >= 2200 && wintop < 2800){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");


            //콘텐츠 nav_txt
            $(".swiper-slide").eq(1).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(4).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(3).addClass("swiper-slide-active");

        }
        if(wintop >= 2800){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"none"});
            $(".Scroll_topbtn").addClass("on");
            $(".Scroll_topbtn").removeClass("ad");

            // 콘텐츠 nav_txt
            $(".swiper-slide").eq(2).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(4).addClass("swiper-slide-active");

        }

    });
    console.log("wintop : " + wintop);

    // 모바일 사이즈
    $(window).scroll(function(){    
        wintop = $(window).scrollTop();
        console.log("wintop : " + wintop);

        if(ww>moSize) return false;//모바일 사이즈 끄기

        if(wintop >= 0 && wintop < 450){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-slide").removeClass("swiper-slide-active");
            $(".swiper-slide").eq(0).addClass("swiper-slide-active");


        }
        if(wintop >= 450 && wintop < 1300){
            // 헤더
            $(".header_wrap").removeClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").removeClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-slide").removeClass("swiper-slide-active");
            $(".swiper-slide").eq(1).addClass("swiper-slide-active");

        }
        if(wintop >= 1300 && wintop < 2000){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-slide").eq(0).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(3).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(2).addClass("swiper-slide-active");       

        }
        if(wintop >= 2000 && wintop < 2600){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"block"});
            $(".Scroll_topbtn").removeClass("on ad");

            //콘텐츠 nav_txt
            $(".swiper-slide").eq(1).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(4).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(3).addClass("swiper-slide-active");

        }
        if(wintop >= 2600){
            // 헤더
            $(".header_wrap").addClass("ad");
            $(".header_wrap").stop().animate({"opacity":"1","z-index":"10"},500,"linear");

            // 사이드바
            $(".aside").addClass("ad");
            $(".Scroll").css({"display":"none"});
            $(".Scroll_topbtn").addClass("on");
            $(".Scroll_topbtn").removeClass("ad");

            // 콘텐츠 nav_txt
            $(".swiper-slide").eq(2).removeClass("swiper-slide-active");
            $(".swiper-slide").eq(4).addClass("swiper-slide-active");

        }

    });
    console.log("wintop : " + wintop);


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

    /* content3 */
    // brand_visual

    // pc 사이즈
    var leftmove = 0;
    var pc_liww = (7.727 * 4.401);
    var pc_ul_basic = (-23.183 * 4.401);

    $(".brand_visual_list").mousewheel(function(event,delta){
        if(ww<padSize) return false;//태블릿 사이즈 끄기
        swiper.mousewheel.disable();//swiper 함수 휠 이벤트 끄기

        if(delta>0){
            leftmove++;
            $(".brand_visual_list ul").stop().animate({"left":pc_ul_basic+(pc_liww*leftmove)+"%"},300);

            if(leftmove == 4){
                leftmove = -4;
                $(".brand_visual_list ul").stop().css({"left":pc_ul_basic+(pc_liww*leftmove)+"%"});
            }

        //마우스 휠을 내렸을때
        }else if(delta<0){
            leftmove--;
            $(".brand_visual_list ul").stop().animate({"left":pc_ul_basic-(-pc_liww*leftmove)+"%"},300);

            if(leftmove == -8){
                leftmove = 0;
                $(".brand_visual_list ul").stop().css({"left":pc_ul_basic+"%"});
            }
           
        }
        
    });

    $(".btn_box .next").on("click",function(){
        if(ww<padSize) return false;//태블릿 사이즈 끄기

        //왼쪽
        leftmove++;
        $(".brand_visual_list ul").stop().animate({"left":ul_basic+(liww*leftmove)+"%"},300);

        if(leftmove == 4){
            leftmove = -4;
            $(".brand_visual_list ul").stop().css({"left":ul_basic+(liww*leftmove)+"%"});
        }

    });

    $(".btn_box .prev").on("click",function(){
        if(ww<padSize) return false;//태블릿 사이즈 끄기

        //오른쪽
        leftmove--;
        $(".brand_visual_list ul").stop().animate({"left":ul_basic-(-liww*leftmove)+"%"},300);

        if(leftmove == -8){
            leftmove = 0;
            $(".brand_visual_list ul").stop().css({"left":ul_basic+"%"});
        }

    });

    // 태블릿 사이즈
    var leftmove = 0;
    var pad_liww = (7.727 * 6.6872);
    var pad_ul_basic = (-23.183 * 6.6872);
    
    $(".brand_visual_list").mousewheel(function(event,delta){
        if(ww>padSize) return false;//태블릿 사이즈 끄기 (윈도우 사이즈가 더 크면 1023)
        if(ww<moSize) return false;//태블릿 사이즈 끄기 (모바일 사이즈가 더 크면 375)

        if(delta>0){
            leftmove++;
            $(".brand_visual_list ul").stop().animate({"left":pad_ul_basic+(pad_liww*leftmove)+"%"},300);

            if(leftmove == 4){
                leftmove = -4;
                $(".brand_visual_list ul").stop().css({"left":pad_ul_basic+(pad_liww*leftmove)+"%"});
            }

        //마우스 휠을 내렸을때
        }else if(delta<0){
            leftmove--;
            $(".brand_visual_list ul").stop().animate({"left":pad_ul_basic-(-pad_liww*leftmove)+"%"},300);

            if(leftmove == -8){
                leftmove = 0;
                $(".brand_visual_list ul").stop().css({"left":pad_ul_basic+"%"});
            }
           
        }
        
    });

    $(".btn_box .next").on("click",function(){
        if(ww>padSize) return false;//태블릿 사이즈 끄기 (윈도우 사이즈가 더 크면 1023)
        if(ww<moSize) return false;//태블릿 사이즈 끄기 (모바일 사이즈가 더 크면 375)

        
        //왼쪽
        leftmove++;
        $(".brand_visual_list ul").stop().animate({"left":pad_ul_basic+(pad_liww*leftmove)+"%"},300);

        if(leftmove == 4){
            leftmove = -4;
            $(".brand_visual_list ul").stop().css({"left":pad_ul_basic+(pad_liww*leftmove)+"%"});
        }

    });

    $(".btn_box .prev").on("click",function(){
        if(ww>padSize) return false;//태블릿 사이즈 끄기 (윈도우 사이즈가 더 크면 1023)
        if(ww<moSize) return false;//태블릿 사이즈 끄기 (모바일 사이즈가 더 크면 375)


        //오른쪽
        leftmove--;
        $(".brand_visual_list ul").stop().animate({"left":pad_ul_basic-(-pad_liww*leftmove)+"%"},300);

        if(leftmove == -8){
            leftmove = 0;
            $(".brand_visual_list ul").stop().css({"left":pad_ul_basic+"%"});
        }

    });

    // 모바일 사이즈
    var mo_leftmove = 0;
    var mo_liww = (14.2925 * 6.9966);
    $(".brand_roll_btn a").eq(mo_leftmove).addClass("on");
    
    $(".brand_visual_list").mousewheel(function(event,delta){

        if(ww>moSize) return false;//태블릿 사이즈 끄기 (모바일 사이즈가 더 크면 375)

        if(delta>0){
            mo_leftmove++;
            $(".brand_visual_list ul").stop().animate({"left":+(mo_liww*mo_leftmove)+"%"},300);

            if(mo_leftmove == 1){
                mo_leftmove = -6;
                $(".brand_visual_list ul").stop().css({"left":+(mo_liww*mo_leftmove)+"%"});
            }

        //마우스 휠을 내렸을때
        }else if(delta<0){
            mo_leftmove--;
            $(".brand_visual_list ul").stop().animate({"left":-(-mo_liww*mo_leftmove)+"%"},300);

            if(mo_leftmove <= -7){
                mo_leftmove = 0;
                $(".brand_visual_list ul").stop().css({"left":0+"%"});
            }
            
            console.log("number"+mo_leftmove);
        }

        $(".brand_roll_btn a").removeClass("on");
        $(".brand_roll_btn a").eq(-mo_leftmove).addClass("on");

        
    });

    $(".btn_box .next").on("click",function(){
        if(ww>moSize) return false;//태블릿 사이즈 끄기 (모바일 사이즈가 더 크면 375)      

        
        //왼쪽
        mo_leftmove++;
        $(".brand_visual_list ul").stop().animate({"left":+(mo_liww*mo_leftmove)+"%"},300);

        if(mo_leftmove == 1){
            mo_leftmove = -5;
            $(".brand_visual_list ul").stop().css({"left":+(mo_liww*mo_leftmove)+"%"});
        }

    });

    $(".btn_box .prev").on("click",function(){
        if(ww>moSize) return false;//태블릿 사이즈 끄기 (모바일 사이즈가 더 크면 375)    

        //오른쪽
        mo_leftmove--;
        $(".brand_visual_list ul").stop().animate({"left":-(-mo_liww*mo_leftmove)+"%"},300);

        if(mo_leftmove == -6){
            mo_leftmove = 0;
            $(".brand_visual_list ul").stop().css({"left":0+"%"});
        }

    });

    // 롤링버튼
    $(".brand_roll_btn a").click(function(e){
        e.preventDefault();
        var roll_index = $(this).index();

        $(".brand_visual_list ul").stop().animate({"left":+(-mo_liww*roll_index)+"%"},300);

        mo_leftmove = roll_index;

        $(".brand_roll_btn a").removeClass("on");
        $(this).addClass("on");
        
    });


    // content4 이용약관
    $(".provision").click(function(){
        $(".information").css("display","block");
    });

    $(".provision_close").click(function(){
        $(".information").css("display","none");
    });

    $(".top-btn").click(function(){
        $("html, body").animate({"scrollTop":0},600);
    });

});