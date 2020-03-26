$(document).ready(function() {
    $("div.bb-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bb-tab>div.bb-tab-content").removeClass("active");
        $("div.bb-tab>div.bb-tab-content").eq(index).addClass("active");
    });
});

$("li.slidez").click(function(ev) {
    $(this).find(">ul.slidez2").slideToggle();
    ev.stopPropagation();
});