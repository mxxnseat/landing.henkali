import {Info} from "../reused/Info";

export function RaffleItem(){
    return (
        <div className="raffles__item col-md-4 col-12 px-0">
            <div className="raffles__image">
                <img src={require("../../assets/img/raffles_stub.png").default} alt="Картинка розыгрышей и акций" />
            </div>
            <div className="raffles__content">
                <div className="subtitle raffles__title">Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                <div className="text raffles__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam, dolor nisi pariatur reiciendis esse enim labore soluta harum deserunt!</div>
                <Info />
            </div>
        </div>
    );
}