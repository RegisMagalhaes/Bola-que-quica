window.onload=function(){
    var canvas = document.getElementById("canvas"),
        context= canvas.getContext("2d"),
        width=canvas.width=window.innerWidth,
        height=canvas.height=window.innerHeight;

   var centerY = height*.5,
    centerX = width*.5,
    offset = height*.4,
    speed=0.1,
    angle=0;

    render();

    function render(){
        var y = centerY + Math.sin(angle)*offset;
        
        context.clearRect(0,0,width,height);
        context.beginPath();
        context.arc(centerX,y,50,505,Math.PI*2,true);
        context.fill();

        angle+=speed;

        requestAnimationFrame(render);
    }

}