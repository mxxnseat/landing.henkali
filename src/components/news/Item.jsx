import {Info} from "../reused/Info";

export function NewsItem({title, img, date, subtitle}){
    return (
        <div className="col-12 d-flex flex-wrap news__item pl-md-0 px-0">
            <div className="news__image col-md-4 col-12 pl-md-0 px-0">
                <img src={img} alt="Изображения новости" />
            </div>
            <div className="news__content d-flex flex-column justify-content-center col-md-8 col-12">
                <div className="subtitle news__title">{title}</div>
                <div className="text news__text">
                    {subtitle}
                </div>
                <Info date={date} />
            </div>
        </div>
    )
}