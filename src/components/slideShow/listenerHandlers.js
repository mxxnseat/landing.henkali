const slideEventState = {
    isMouseDown: false,
    startX: 0,
    moveX: 0,
    moveX2: 0,
};

export function mouseDownHandler(e){
    slideEventState.isMouseDown = true;
    slideEventState.startX = slideEventState.moveX = e.changedTouches[0].clientX;
}
export function mouseUpHandler(e){
    slideEventState.isMouseDown = false;
}
export function mouseMoveHandler(e, gallery){
    if(!slideEventState.isMouseDown) return null;
    slideEventState.moveX2 = slideEventState.moveX-e.changedTouches[0].clientX;
    slideEventState.moveX = e.changedTouches[0].clientX;
    const currentTransform = +(gallery.style.transform.match(/[-0-9.]+(?=px)/)[0]);
    
    let dx = currentTransform-slideEventState.moveX2;
    const {width,right} = gallery.getBoundingClientRect();

    console.log(right, window.innerWidth);
    if(currentTransform <=0 && dx>0) return;
    
    if(right-window.innerWidth <= 0 && slideEventState.moveX2 >= 1){
        dx = window.innerWidth - width;
    }
    gallery.style.transform = `translateX(${dx}px)`;
}