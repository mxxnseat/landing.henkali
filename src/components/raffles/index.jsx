import { RaffleItem } from "./Item";
import axios from "axios";
import {useEffect, useState} from "react";

export function Raffles() {
    const [raffles, setRaffles] = useState([
        {
            "id": 1,
            "title": "Дюжина хинкали по цене 11-ти ",
            "subtitle": `
            Заказывайте у нас дюжину хинкали, а платите лишь за одиннадцать!
            Акция действует на хинкали с любой начинкой.
            `,
            "img": require("../../assets/img/raffles/1.jpg").default,
        },
        {
            "id": 2,
            "title":  `Собирайте печати
            и обменивайте их
            на хинкали`,
            "subtitle": `
            Заполните карточку печатями и обменяйте ее
            на дюжину хинкали!
            Акция действует во всех заведениях нашей сети и не распространяется на доставку.
            `,
            "img": require("../../assets/img/raffles/2.jpg").default,
        },
        {
            "id": 3,
            "title": "Участвуйте в розыгрышах в соцсетях",
            "subtitle": `Подписывайтесь на наши аккаунты в Instargam и Вконтакте, чтобы получить возможность выиграть множество вкусных призов!`,
            "img": require("../../assets/img/raffles/3.jpg").default,
        },
    ]);
    useEffect(()=>{
        axios.get("/raffles",{
            "Content-Type": "application/json",
            "Accept": "application/json"
        })
            .then(({data})=>{
                const parseData = JSON.parse(data.data);
                setRaffles(raffles.map((el, index)=>{
                                return {
                                    ...el,
                                    ...parseData[index]
                                }
                            }));
            })
    }, []);

    return (
        <section className="raffles">
            <div className="container">
                <h2 className="heading">
                    Розыгрыши и <span className="text-red">акции</span>
                </h2>
                <div className="raffles__list d-flex flex-wrap justify-content-md-between justify-content-center">
                    {
                        raffles.map((raffle, index)=>{
                            console.log(raffle.id);
                            return <RaffleItem key={index} {...raffle}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}