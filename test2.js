<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="500" height="500" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



ctx.translate(250,250);


ctx.moveTo(0,0);
ctx.lineTo(80,60);
ctx.stroke();

//ctx.save();
	ctx.rotate(76 * Math.PI/180);
    
ctx.moveTo(0,0);
ctx.lineTo(40,50);       
ctx.stroke();

//ctx.restore();

ctx.moveTo(0,0);
ctx.lineTo(40,50);       
ctx.stroke();


///////////////////////////////////////////////////////

let i = 0;
let Vector2 = {};
 Vector2.x = Math.sin(i * Math.PI / 180 ) * 55;   
 Vector2.y = Math.cos(i * Math.PI / 180 ) * 55;
 
setInterval(function(){

 
ctx.rotate(i * Math.PI/180);

ctx.moveTo(0,0);
ctx.lineTo(Vector2.x,Vector2.y); 
ctx.stroke();

i+=6;
},1000);




</script>

</body>
</html>
