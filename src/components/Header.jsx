export function Header(){
    return (
        <section className="header d-flex align-items-md-center">
            <div className="container">
                <div className="row justify-content-md-between justify-content-center">
                    <div className="col-md-8 col-12 header__content">
                        <h1 className="heading">
                            <div className="text-red">Сеть хинкальных</div>
                            «Старик Хинкалыч»
                        </h1>
                        <div className="header__text col-12 col-md-8 subheading">
                            Мы лепим и варим, без секретов от вас, 
                            на открытых кухнях используя
                            оригинальные грузинские рецепты!
                        </div>
                    </div>
                    <div className="header__tabs">
                        <div className="header__tab">
                            <div className="tab__image-wrap">
                                <img src={require("../assets/icons/khinkali.svg").default} alt="Пельмень пельмешек" className="tab__img" />
                            </div>
                            <div className="tab__content">
                                <div className="tab__header subtitle">от 35 рублей</div>
                                <div className="tab__text text">Доступные цены для каждого</div>
                            </div>
                        </div>
                        <div className="header__tab">
                            <div className="tab__image-wrap">
                                <img src={require("../assets/icons/khinkali.svg").default} alt="Часы песочные" className="tab__img" />
                            </div>
                            <div className="tab__content">
                                <div className="tab__header subtitle">Вкусно и качественно</div>
                                <div className="tab__text text">за 15 минут отдаем любое блюдо</div>
                            </div>
                        </div>
                        <div className="header__tab">
                            <div className="tab__image-wrap"></div>
                            <div className="tab__content">
                                <div className="tab__header subtitle">Радушное</div>
                                <div className="tab__text text">Грузинское гостеприимство</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}