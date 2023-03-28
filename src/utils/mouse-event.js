let oy=0,preMy=0;

export const mouseDownEvent = (e,c,h,s) => {
    oy = e.target.offsetTop;  
    preMy = e.clientY 
    const target = e.target
    s.onmouseup = function mouseUpEvent(){
        console.log("over")
        s.onmousemove  = s.onmouseup = null;
        target.onmousedown = null;
    };
    s.onmousemove = function mouseMoveEvent(e) {
        e.stopPropagation();
        e.preventDefault();
        if(target.offsetTop>237){
            target.style.top = 237+"px"
        }else if(target.offsetTop<0){
            target.style.top = 0 +"px"
        }else{
            target.style.top = oy+e.clientY-preMy+"px";
            c.scrollTop = target.offsetTop*c.scrollHeight/h;
        } 
    };
}

