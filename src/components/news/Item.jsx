import {Info} from "../reused/Info";

export function NewsItem(){
    return (
        <div className="col-12 d-flex flex-wrap news__item pl-md-0 px-0">
            <div className="news__image col-md-4 col-12 pl-md-0 px-0">
                <img src={require("../../assets/img/news_stub.png").default} alt="Изображения новости" />
            </div>
            <div className="news__content d-flex flex-column justify-content-center col-md-8 col-12">
                <div className="subtitle news__title">Lorem ipsum dolor sit.</div>
                <div className="text news__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo distinctio adipisci atque. Voluptates in libero quas et? Assumenda, corrupti facilis?
                </div>
                <Info />
            </div>
        </div>
    )
}