// build time:Thu Oct 03 2019 12:20:24 GMT+0800 (GMT+08:00)
var OriginTitile=document.title;var titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="shortcut icon"]').attr("href","/TEP.png");document.title="w(ﾟДﾟ)w 出BUG啦！！！！";clearTimeout(titleTime)}else{$('[rel="shortcut icon"]').attr("href","/favicon.png");document.title="♪(^∇^*)又好了。。。 "+OriginTitile;titleTime=setTimeout(function(){document.title=OriginTitile},2e3)}});
//rebuild by neat 