
var icon = document.getElementById("icon");
var section = document.getElementById("section3");
console.log(section.style.top);

icon.onmousedown = function(event){
  console.log("on click");
  document.addEventListener("mousemove",onMouseMove);
}
section.onmousedown = function(event){
    console.log(event.offsetX,event.offsetY);
}
// 0 ~
icon.style.position = "absolute";

icon.ondragstart = function(event){
  console.log("on dorag");
  return false;
}


var onMouseMove = function(event){
  var x = event.offsetX;
  var y = event.offsetY;
  console.log(x,y)
  icon.style.top = y-50 / 2+ "px";
  icon.style.left =x-50 / 2 + "px";
  console.log("drag eve");

}

section.onmouseup = function(event){
  document.removeEventListener("mousemove",onMouseMove);
}