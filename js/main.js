// 'use strict';
$(function() {
    $(window).scroll(function () {
        //顶部登录按钮
        $('#exampleModal').on('show.bs.modal', function (click) {
            var button = $(click.relatedTarget);
            var recipient = button.data('whatever');
            var modal = $(this);
            modal.find('.modal-title').text('New message to ' + recipient);
            modal.find('.modal-body input').val(recipient);
        });

        //滚动置顶
        if ($(this).scrollTop() >= $("#nav").height() + $(".wrapper").height()){
            $("#nav").addClass("navbar-fixed-top");
        }else {
            $("#nav").removeClass("navbar-fixed-top");
        }
        //返回顶部
        //    1、滚动条向下滚动时，获取滚动的高度。
        if ($(this).scrollTop() >= $(".wjs_top").height() + $(".wrapper").height()){
            $(".backtop").stop().fadeIn(1000);
        } else {
            $(".backtop").stop().fadeOut(1000);
        }
        //    2、为小火箭添加点击事件
        $(".backtop").click(function () {
            $("body,html").animate({scrollTop:0},2000);
        });
    });
    //产品栏的添加类名和移除类名操作
    $(" .wjs_product > .container > .sub-wrapper > .nav > li").on("click",function () {
        $(this).addClass("act").siblings().removeClass("act");
    });

    //    新闻栏添加新闻题目及内容操作(新闻内容部分差一个淡入淡出效果)
    $(".wjs_news > .container > .row > #news02 > .nav > li").on("click",function () {
        //新闻题目随点击的图标变化而变化，并通过css样式隐藏news02里面的news_lis标签
        $(".wjs_news > .container > .row > #news01 > .tit-new").html("");
        $(this).children(".news_lis").clone().appendTo(".wjs_news > .container > .row > #news01 > .tit-new");
        //    新闻内容随点击的图标变化而变化，需考虑索引
        var $idx = $(this).index();
        // console.log($idx);       // 获取索引ok
        $(".wjs_news > .container > .row > #news03 > div").eq($idx).removeClass("news03_act").siblings().addClass("news03_act");
        //    点击，图标的背景色变化
        //     $(this).css("backgroundColor","#23527c").siblings().css("backgroundColor","#fff");
        $(this).addClass("bgc").siblings().removeClass("bgc");
    });

    //    信息栏
    $(".wjs_info > .container >.row > div").children("a").css({"textDecoration":"none","color":"#888"});
    $(".wjs_info > .container >.row > div").children("a").on("mouseenter",function () {
        // console.log($(this));
        $(this).css("color","#333");
    });
    $(".wjs_info > .container >.row > div").children("a").on("mouseleave",function () {
        $(this).css("color","#888");
    });

//    产品栏
    $(".wjs_product > .container > .sub-wrapper > ul > li").on("click",function () {
        var $index = $(this).index();
        $(".wjs_product > .container > #products > .container > .tab-content > div").eq($index).addClass("in active").siblings().removeClass("in active");
    });
});
