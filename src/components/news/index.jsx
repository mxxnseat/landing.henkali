import { NewsItem } from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";

export function News() {
    const [news, setNews] = useState([
        {
            "id": 1,
            "title": "НОВЫЕ ХИНКАЛЬНЫЕ В ИЮНЕ",
            "subtitle": "Наша сеть неустанно растет! СКОРО состоится открытие новых хинкальных:\nг. Севастополь, ТЦ \"Sea Mall\"\nг. Симферополь, ул. Павленко, 7а\nг. Коктебель, ул. Ленина, 144б\nг. Анапа, ул. Горького, 7а",
            "img": require("../../assets/img/news/1.jpg").default,
        },
        {
            "id": 2,
            "title": "НОВЫЕ ХИНКАЛЬНЫЕ В ИЮНЕ",
            "subtitle": `
            Этим летом сразу на три хинкальные в стране стало больше!

                Мы успешно лепим и варим в городах:
                г. Воронеж, ул. 20-летия Октября, 88
                г. Кострома, ТРЦ «Коллаж»
                г. Севастополь, Набережная Парка Победы, 27
            `,
            "img": require("../../assets/img/news/2.jpg").default,
        },
        {
            "id": 3,
            "title": "ЗАПУСКАЕМ ДЕТСКОЕ МЕНЮ",
            "subtitle": `
            Старик Хинкалыч рад позаботиться о всех, даже о самых маленьких генацвале. СКОРО во всех хинкальных нашей сети запустится ДЕТСКОЕ МЕНЮ!
            Будем рады видеть вас всей семьей!
            `,
            "img": require("../../assets/img/news/3.png").default,
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