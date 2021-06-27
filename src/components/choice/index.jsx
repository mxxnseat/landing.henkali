import {Select} from "./Select";
import { YMaps, Map,Placemark } from 'react-yandex-maps';
import { useEffect, useState } from "react";

export function Choice(){
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
    
    useEffect(()=>{
        fetch("/adresses.json")
            .then(res=>res.json())
            .then((data)=>{
                setAdressesList(data);
            });
    }, []);

    const selectHanlder = ({name, value})=>{
        console.log(name, value);
        setBookAdress({
            ...bookAdress,
            [name]: value
        });
        console.log(bookAdress);
    }

    return (
        <section className="choice">
            <div className="container">
                <h2 className="heading">
                    Выберите <span className="text-red">хинкальную</span>
                </h2>
                <div className="row mt-4 justify-content-around">
                    <Select
                        adressesList={adressesList}
                        icon={require("../../assets/icons/mark.svg").default}
                        signature="Город"
                        selectText={bookAdress.city !== null ? bookAdress.city : 'Выберите город'}
                        setAdress={(value)=>{
                            setSelectedAdress(value)
                            selectHanlder({name:'city', value: value.city})
                        }}
                    />


                    <Select 
                        signature="Адрес"
                        selectText={
                            (  
                                bookAdress.adress !==null
                            )
                             ? bookAdress.adress.street : 'Выберите город'
                            }
                        adressesList={selectedAdress?.adresses}
                        setAdress={(value)=>{
                            selectHanlder({name:'adress', value})
                        }}
                    />
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
                <Map width="100%" height="540px" state={{ center: bookAdress.adress !== null ? bookAdress.adress.cord : [44.948237, 34.100327], zoom: 16, controls: {} }} >
                    <Placemark geometry={bookAdress.adress?.cord} options={placemarkOptions} />
                </Map>
            </YMaps>
        </section>
    );
}