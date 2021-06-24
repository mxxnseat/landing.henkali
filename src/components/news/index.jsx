import { NewsItem } from "./Item";

export function News() {
    return (
        <section className="news">
            <div className="container">
                <h2 className="text-red heading">
                    Новости
                </h2>
                <div className="new__list">
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </div>
            </div>
        </section>
    );
}