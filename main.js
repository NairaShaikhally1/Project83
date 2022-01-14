canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
mouseevent="";
lastposX=0
lastposY=0
color="red"
linewidth=4

screenwidth=screen.width;
newwidth=screen.width-70
newheight=screen.height-300

if(screenwidth<992){
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").width=newheight
    document.body.style.overflow="hidden"
}


canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    color=document.getElementById("textinputcolor").value ;
    linewidth=document.getElementById("textinputwidth").value ;
    lastposX=e.touches[0].clientX-canvas.offsetLeft
    lastposY=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove(e){
    currentposX=e.touches[0].clientX-canvas.offsetLeft
    currentposY=e.touches[0].clientY-canvas.offsetTop
    
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=linewidth

        ctx.moveTo(lastposX,lastposY)
        ctx.lineTo(currentposX,currentposY)
        ctx.stroke()
    
        
    lastposX=currentposX
    lastposY=currentposY

}

canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("textinputcolor").value ;
    linewidth=document.getElementById("textinputwidth").value ;
    mouseevent="mousedown"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
}
console.log(mouseevent)

canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave"
}

canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentposX=e.clientX-canvas.offsetLeft
    currentposY=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=linewidth

        ctx.moveTo(lastposX,lastposY)
        ctx.lineTo(currentposX,currentposY)
        ctx.stroke()
    }
    lastposX=currentposX
    lastposY=currentposY

}