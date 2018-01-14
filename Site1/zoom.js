var box;

function zoomIn()
{
  var filename = this.src.split( "_thumb.png");
  box.style.background="url("+filename[0]+ ".png)";
}


function zoomOut()
{
    box.style.background="inherit";
}


function init()
{
 box=document.getElementById("zoomBox");
 
 var ichigo = document.getElementById("ichigo");
 ichigo.onmouseover=zoomIn;
 ichigo.onmouseout=zoomOut; 
 
 var kindred = document.getElementById("kindred");
 kindred.onmouseover=zoomIn;
 kindred.onmouseout=zoomOut; 
 
 var darker = document.getElementById("darker");
 darker.onmouseover=zoomIn;
 darker.onmouseout=zoomOut; 
 
 var Kaneki = document.getElementById("Kaneki");
 Kaneki.onmouseover=zoomIn;
 Kaneki.onmouseout=zoomOut;

}
document.addEventListener("DOMContentLoaded", init , false ) ;