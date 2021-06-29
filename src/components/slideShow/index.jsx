import img_1 from "../../assets/img/gallery/2.jpg";
import img_2 from "../../assets/img/gallery/3.jpg";
import img_3 from "../../assets/img/gallery/4.jpg";
import img_4 from "../../assets/img/gallery/5.jpg";
import img_5 from "../../assets/img/gallery/1.jpg";

import "./style.scss";

import {useEffect, useRef} from "react";

import {mouseDownHandler, mouseMoveHandler, mouseUpHandler} from "./listenerHandlers";

export function SlideShow() {
    const gallery = useRef(null);
    

    useEffect(()=>{
        let refValue = null;

        if(gallery.current){
            refValue = gallery.current;
        }else{
            return;
        }

        refValue.style.width = gallery.current.childElementCount*380+'px';
        const mouseMoveHandlerReact = (gallery=>e=>mouseMoveHandler(e, gallery))(refValue);
        refValue.style.transform = `translateX(0px)`;
        refValue.addEventListener("touchend", mouseUpHandler);
        refValue.addEventListener("touchstart", mouseDownHandler);
        refValue.addEventListener("touchmove", mouseMoveHandlerReact);
        return ()=>{
            refValue.removeEventListener("touchmove", mouseMoveHandlerReact)
            refValue.removeEventListener("touchend", mouseUpHandler)
            refValue.removeEventListener("touchstart", mouseDownHandler)
        }
    }, [gallery]);

    return (
        <section className="header-gallery d-flex flex-nowrap" ref={gallery}>
                <img src={img_1} className="gallery_img" alt="Хенкали на блюде" />
                <img src={img_2} className="gallery_img" alt="Хенкальная" />
                <img src={img_3} className="gallery_img" alt="Девушка и парень" />
                <img src={img_4} className="gallery_img" alt="Едят хенкали" />
                <img src={img_5} className="gallery_img" alt="Счетчик хенкали" />
        </section>
    )
}