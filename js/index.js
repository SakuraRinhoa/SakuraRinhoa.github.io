loadProperties($.i18n.browserLang()); //jQuery自动获取浏览器当前设置的[显示语言]的[语言代号]
//切换语言的函数
function loadProperties(language) {
    $.i18n.properties({ //属性[文件命名格式:{文件名}_{语言代号}.properties]
        name: 'strings', //{文件名}
        path: 'i18n/', //注意这里路径是[你语言文件的所在文件夹]
        mode: 'map', //导入方式
        language: language, //{语言代号}
        callback: function () {
            $("[data-i18n]").each(function () {
                console.log($(this).data("i18n"));
                $(this).html($.i18n.prop($(this).data("i18n")));
            });
        }
    });
}
$(document).ready(function () {
    $(".nav-link").mouseover(function(){
        $(this).addClass("active-nav-link");
        $(this).parent("li").addClass("active-nav-item");
    });
    $(".nav-link").mouseout(function(){
        $(this).removeClass("active-nav-link");
        $(this).parent("li").removeClass("active-nav-item");
    });
});