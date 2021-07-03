import { RaffleItem } from "./Item";
import axios from "axios";
import {useEffect, useState} from "react";

export function Raffles() {
    const [raffles, setRaffles] = useState([
        {
            "id": 1,
            "title": "НОВЫЕ ХИНКАЛЬНЫЕ В ИЮНЕ",
            "subtitle": "Наша сеть неустанно растет! СКОРО состоится открытие новых хинкальных:\nг. Севастополь, ТЦ \"Sea Mall\"\nг. Симферополь, ул. Павленко, 7а\nг. Коктебель, ул. Ленина, 144б\nг. Анапа, ул. Горького, 7а",
            "img": require("../../assets/img/news_stub.png").default,
        },
        {
            "id": 2,
            "title": "НОВЫЕ ХИНКАЛЬНЫЕ В ИЮНЕ",
            "subtitle": "Наша сеть неустанно растет! СКОРО состоится открытие новых хинкальных:\nг. Севастополь, ТЦ \"Sea Mall\"\nг. Симферополь, ул. Павленко, 7а\nг. Коктебель, ул. Ленина, 144б\nг. Анапа, ул. Горького, 7а",
            "img": require("../../assets/img/news_stub.png").default,
        },
        {
            "id": 3,
            "title": "НОВЫЕ ХИНКАЛЬНЫЕ В ИЮНЕ",
            "subtitle": "Наша сеть неустанно растет! СКОРО состоится открытие новых хинкальных:\nг. Севастополь, ТЦ \"Sea Mall\"\nг. Симферополь, ул. Павленко, 7а\nг. Коктебель, ул. Ленина, 144б\nг. Анапа, ул. Горького, 7а",
            "img": require("../../assets/img/news_stub.png").default,
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