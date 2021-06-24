import {Carousel} from "./carousel";

export function Gallery(){
    const slides = [
        <img src={require("../../assets/img/slide_1.jpg").default} alt="1" />,
        <img src={require("../../assets/img/slide_1.jpg").default} alt="1" />,
        <img src={require("../../assets/img/slide_1.jpg").default} alt="1" />,
        <img src={require("../../assets/img/slide_1.jpg").default} alt="1" />,
        <img src={require("../../assets/img/slide_1.jpg").default} alt="1" />,
    ];

    return (
        <section className="gallery">
            <div className="container">
                <h2 className="heading">Фотогалерея</h2>
                <Carousel slides={slides} />
            </div>
        </section>
    );
}