import { NewsItem } from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";

export function News() {
    const [news, setNews] = useState([
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
    useEffect(() => {
        axios.get("/news", {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(({data}) => {
                const parseData = JSON.parse(data.data);
                setNews(news.map((el, index) => {
                    return {
                        ...el,
                        ...parseData[index]
                    }
                }));
            })
    }, []);

    return (
        <section className="news">
            <div className="container">
                <h2 className="text-red heading">
                    Новости
                </h2>
                <div className="new__list d-flex flex-wrap justify-content-center">
                    {
                        news.map((item, index) => {
                            return <NewsItem key={index} {...item} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}