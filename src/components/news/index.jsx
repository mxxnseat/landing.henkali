import { NewsItem } from "./Item";

export function News() {
    const news = [
        {
            title: "НОВЫЕ ХИНКАЛЬНЫЕ В ИЮНЕ",
            subtitle: `Наша сеть неустанно растет! СКОРО состоится открытие новых хинкальных:
            г. Севастополь, ТЦ "Sea Mall"
            г. Симферополь, ул. Павленко, 7а
            г. Коктебель, ул. Ленина, 144б
            г. Анапа, ул. Горького, 7а`,
            img: require("../../assets/img/news_stub.png").default,
            date: '24.09.21'
        },
        {
            title: "УЖЕ В СЕТИ",
            subtitle: `Этим летом сразу на три хинкальные в стране стало больше!\n
            Мы успешно лепим и варим в городах:
            г. Воронеж, ул. 20-летия Октября, 88
            г. Кострома, ТРЦ «Коллаж»
            г. Севастополь, Набережная Парка Победы, 27`,
            img: require("../../assets/img/news_stub.png").default,
            date: '24.09.21'
        },
        {
            title: "ЗАПУСКАЕМ ДЕТСКОЕ МЕНЮ",
            subtitle: `Старик Хинкалыч рад позаботиться о всех, даже о самых маленьких генацвале. СКОРО во всех хинкальных нашей сети запустится ДЕТСКОЕ МЕНЮ!
            Будем рады видеть вас всей семьей!`,
            img: require("../../assets/img/news_stub.png").default,
            date: '24.09.21'
        }
    ]
    
    return (
        <section className="news">
            <div className="container">
                <h2 className="text-red heading">
                    Новости
                </h2>
                <div className="new__list d-flex flex-wrap justify-content-center">
                    {
                        news.map((item, index)=>{
                            return <NewsItem key={index} {...item} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}