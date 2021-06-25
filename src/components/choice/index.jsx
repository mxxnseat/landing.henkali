import {Select} from "./Select";
import { YMaps, Map,Placemark } from 'react-yandex-maps';
import { useState } from "react";

export function Choice(){
    const mapOptions = {
        iconLayout: 'default#image',
		iconImageHref: require("../../assets/icons/map_mark.svg").default,
		iconImageSize: [72, 86],
		iconImageOffset: [-72, -86]
    };
    const [cord, setCord] = useState([55.684758, 37.738521]); // tmp cordinates

    const [city, setCity] = useState([]);
    const [adress, setAdress] = useState([]);

    return (
        <section className="choice">
            <div className="container">
                <h2 className="heading">
                    Выберите <span className="text-red">хинкальную</span>
                </h2>
                <div className="row mt-4 justify-content-around">
                    <Select icon={require("../../assets/icons/mark.svg").default} signature="Город" selectText="Выберите город"/>
                    <Select signature="Адрес" selectText="Выберите заведение"/>
                    <div className="choice__menu col-1 subtitle align-self-end">
                        <img src={require("../../assets/icons/menu.svg").default} alt="Нож и вилка" />
                        меню
                    </div>
                    <div className="col-3 choice__btn subtitle align-self-end">
                        ЗАБРОНИРОВАТЬ СТОЛИК
                    </div>
                </div>
            </div>
            <YMaps>
                <Map width="100%" height="540px" defaultState={{ center: [55.75, 37.57], zoom: 13, controls: {} }} >
                    <Placemark geometry={cord} options={mapOptions} />
                </Map>
            </YMaps>
        </section>
    );
}