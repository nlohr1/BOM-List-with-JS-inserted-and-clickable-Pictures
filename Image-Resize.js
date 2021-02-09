//Image-Resize.js
//Script to make all images in a HTML-file resizeable with only a mouse-click.

<script>
function ImgRez(e){var t=document.images[e];1==res?(w=t.width,h=t.height,t.removeAttribute("width"),t.removeAttribute("height"),t.scrollIntoView(),res=0):0==res&&((t=document.getElementById(e)).width=w,t.height=h,t.style.borderColor="#bdf",res=1)}window.onload=function(){var e=document.getElementsByTagName("img"),t=e.length;for(i=0;i<t;i++)e[i].id=[i],w=e[i].width,h=e[i].height,e[i].style.border="1px solid #bdf",e[i].setAttribute("title","Click to enlarge"),e[i].onclick=function(){ImgRez(this.id)}},res=1;
</script>

