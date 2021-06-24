import {Info} from "../reused/Info";

export function NewsItem(){
    return (
        <div className="col-12 d-flex news__item pl-0">
            <div className="news__image col-4 pl-0">
                <img src={require("../../assets/img/news_stub.png").default} alt="Изображения новости" />
            </div>
            <div className="news__content d-flex flex-column justify-content-center col-8">
                <div className="subtitle news__title">Lorem ipsum dolor sit.</div>
                <div className="text news__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio adipisci atque. Voluptates in libero quas et? Assumenda, corrupti facilis?
                </div>
                <Info />
            </div>
        </div>
    )
}