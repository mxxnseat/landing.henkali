import axios from "axios";
import { useEffect, useRef } from "react"

export function Info({date, views, whoIs, id}) {
    const info = useRef(null);

    useEffect(()=>{
        const scrollHandler = e=>{
            if(info.current){
                const {top} = info.current.getBoundingClientRect();
                if(top>=0 && top<=window.innerHeight){
                    axios.post("/view", {whoIs,id})

                    window.removeEventListener("scroll", scrollHandler);
                }
            }
        }

        window.addEventListener("scroll", scrollHandler);

        return ()=>{
            window.removeEventListener("scroll", scrollHandler);
        }
    }, [whoIs,id]);
    
    return (
        <div className="info d-flex justify-content-between" ref={info}>
            <div className="info__date subheading">{date}</div>
            <div className="info__views subheading">{views}</div>
        </div>
    )
}