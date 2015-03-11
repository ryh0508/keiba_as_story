$(function(){
$("img").hover(function(){
//$(a img).hover(function(){ ←すべてのリンク付き画像に適応
    $(this).fadeTo("normal", 0.6); // マウスオーバーで透明度を60%にする
    },function(){
    $(this).fadeTo("normal", 1.0); // マウスアウトで透明度を100%に戻す
    });
});