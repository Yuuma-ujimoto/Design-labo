
var icon = document.getElementById("icon");

icon.onmousedown = function(event){
  console.log("on click");
  document.addEventListener("mousemove",onMouseMove);
}

icon.style.position = "absolute";

icon.ondragstart = function(event){
  console.log("on dorag");
  return false;
}



var onMouseMove = function(event){
  var x = event.clientX;
  var y = event.clientY;
  var width = icon.offsetWidth;
  var height = icon.offsetHeight;
  icon.style.top = (y-height/2) + "px";
  icon.style.left = (x-width/2) + "px";
}