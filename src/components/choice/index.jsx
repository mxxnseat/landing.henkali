import { Select } from "./Select";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { useEffect, useState } from "react";
import classNames from 'classnames';

export function Choice() {
    const placemarkOptions = {
        iconLayout: 'default#image',
        iconImageHref: require("../../assets/icons/map_mark.svg").default,
        iconImageSize: [72, 86],
        iconImageOffset: [-72, -86]
    };


    const [adressesList, setAdressesList] = useState(null);
    const [selectedAdress, setSelectedAdress] = useState(null);
    const [bookAdress, setBookAdress] = useState({
        city: null,
        adress: null
    });

    useEffect(() => {
        fetch("/adresses.json")
            .then(res => res.json())
            .then((data) => {
                setAdressesList(data);
            });
    }, []);

    const selectHanlder = ({ name, value }) => {
        setBookAdress(previous=>{
            if(name === "city" && previous.city !== value){
                return {
                    [name]: value,
                    adress: null
                }
            }
            return {
                ...bookAdress,
                [name]: value
            }
        });
    }
    const bookingCN = classNames({
        "col-md-3 col-8 choice__btn subtitle align-self-end": true,
        "active": bookAdress.city && bookAdress.adress
    })
    const menuCN = classNames({
        "choice__menu col-md-1 col-3 subtitle align-self-end": true,
        "active": bookAdress.city && bookAdress.adress
    })

    return (
        <section className="choice">
            <div className="container">
                <h2 className="heading">
                    Выберите <span className="text-red">хинкальную</span>
                </h2>
                <div className="d-flex flex-wrap mt-4 justify-content-md-around justify-content-between">
                    <Select
                        adressesList={adressesList}
                        icon={require("../../assets/icons/mark.svg").default}
                        signature="Город"
                        selected={bookAdress.city !== null && bookAdress.city}
                        selectText={bookAdress.city !== null ? bookAdress.city : 'Выберите город'}
                        setAdress={(value) => {
                            setSelectedAdress(value)
                            selectHanlder({ name: 'city', value: value.city })
                        }}
                    />


                    <Select
                        signature="Адрес"
                        selectText={
                            bookAdress.adress !== null ? bookAdress.adress.street : 'Выберите город'
                        }
                        selected={bookAdress.adress !== null && true}
                        adressesList={selectedAdress?.adresses}
                        setAdress={(value) => {
                            selectHanlder({ name: 'adress', value })
                        }}
                    />
                    <a href="//vk.com" rel="noreferrer" target="_blank" className={menuCN}>
                        меню
                    </a>
                    <div className={bookingCN}>
                        ЗАБРОНИРОВАТЬ СТОЛИК
                    </div>

                </div>
            </div>
            <YMaps>
                <Map width="100%" height="540px" state={{ center: bookAdress.adress !== null ? bookAdress.adress.cord : [44.948237, 34.100327], zoom: 16, controls: {} }} >
                    <Placemark geometry={bookAdress.adress?.cord} options={placemarkOptions} />
                </Map>
            </YMaps>
        </section>
    );
}