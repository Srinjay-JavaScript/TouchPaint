
/* var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

 */


 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");
 var color = "black";
var width_of_line = 3;
var lastXposition = 0;
var lastYposition = 0;
var screenWidth = screen.width;
var new_width = screenWidth - 100;
var new_height = screen.height - 300;

if (screenWidth < 992){
    canvas.width = new_width;
    canvas.height = new_height;

    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", UserTouchstart);

function UserTouchstart(e){
    lastXposition = e.touches[0].clientX - canvas.offsetLeft;
    lastYposition = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", UserTouchmove);

function UserTouchmove(e){
    currentXposition = e.touches[0].clientX - canvas.offsetLeft;
    currentYposition = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(lastXposition, lastYposition);
    ctx.lineTo(currentXposition, currentYposition);
    ctx.stroke();

    lastXposition = currentXposition;
    lastYposition = currentYposition;
}

function c(){
    console.log("I am inside clear function")
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
