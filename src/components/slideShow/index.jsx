import img_1 from "../../assets/img/gallery/2.jpg";
import img_2 from "../../assets/img/gallery/3.jpg";
import img_3 from "../../assets/img/gallery/4.jpg";
import img_4 from "../../assets/img/gallery/5.jpg";
import img_5 from "../../assets/img/gallery/1.jpg";

import {useEffect, useRef} from "react";

import {mouseDownHandler, mouseMoveHandler, mouseUpHandler} from "./listenerHandlers";

export function SlideShow() {
    const gallery = useRef(null);
    

    useEffect(()=>{
        gallery.current.style.width = gallery.current.childElementCount*380+'px';
        const mouseMoveHandlerReact = (gallery=>e=>mouseMoveHandler(e, gallery))(gallery.current);
        gallery.current.style.transform = `translateX(0px)`;
        gallery.current.addEventListener("touchend", mouseUpHandler);
        gallery.current.addEventListener("touchstart", mouseDownHandler);
        gallery.current.addEventListener("touchmove", mouseMoveHandlerReact);
        return ()=>{
            gallery.current.removeEventListener("touchmove", mouseMoveHandlerReact)
            gallery.current.removeEventListener("touchend", mouseUpHandler)
            gallery.current.removeEventListener("touchstart", mouseDownHandler)
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