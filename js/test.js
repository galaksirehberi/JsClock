<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="500" height="450" style="border:1px solid #d3d3d3;">Your browser does not support the HTML5 canvas tag.</canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.save();
ctx.translate(300,300);
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();

// Use the identity matrix while clearing the canvas
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, 500, 450);
ctx.restore();

ctx.beginPath();
ctx.translate(300,300);
ctx.rotate(6 * Math.PI / 180);
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();

</script>

</body>
</html>