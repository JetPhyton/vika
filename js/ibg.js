function addData(t){for(var e=document.getElementsByTagName("img").getAttribute("src"),i=document.getElementsByTagName("img"),g=0;g<e.length;g++)i[g].setAttribute("src",t+e[g])}function ibg(){$each($("ibg"),function(t,e){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}params="";