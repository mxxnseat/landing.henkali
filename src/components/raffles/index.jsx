import { RaffleItem } from "./Item";

export function Raffles() {
    return (
        <section className="raffles">
            <div className="container">
                <h2 className="heading">
                    Розыгрыши и <span className="text-red">акции</span>
                </h2>
                <div className="raffles__list d-flex justify-content-between">
                    <RaffleItem />
                    <RaffleItem />
                    <RaffleItem />
                </div>
            </div>
        </section>
    );
}