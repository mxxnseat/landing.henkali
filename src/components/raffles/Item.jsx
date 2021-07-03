import {Info} from "../reused/Info";

export function RaffleItem({title, img, date,views, subtitle, id}){
    console.log(id);
    return (
        <div className="raffles__item col-md-4 col-12 px-0">
            <div className="raffles__image">
                <img src={img} alt="Картинка розыгрышей и акций" />
            </div>
            <div className="raffles__content">
                <div className="subtitle raffles__title">
                    {title}
                </div>
                <div className="text raffles__text">
                    {subtitle}
                </div>
                <Info {...{views,date}} whoIs="raffles" id={id} />
            </div>
        </div>
    );
}