
$(".first").hover(function(){
  $(".first").animate({padding:"5%"});
  $(".secund").animate({padding:"-5%"});
  $(".third").animate({padding:"-5%"});
});

$(".secund").hover(function(){
  $(".first").animate({padding:"-5%"});
  $(".secund").animate({padding:"5%"});
  $(".third").animate({padding:"-5%"});
});

$(".third").hover(function(){
  $(".first").animate({padding:"-5%"});
  $(".secund").animate({padding:"-5%"});
  $(".third").animate({padding:"5%"});
});
/*https://www.one-tab.com/page/IaCf74z8Tf6l24hSvfSkEw*/