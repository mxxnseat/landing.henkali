import classNames from "classnames";
import {useState} from "react";

export function Menu() {
    const [isOpen, setOpen] = useState(false);
    const menuCN = classNames({
        "mobile_menu d-md-none d-block": true,
        "open": isOpen
    });

    const scrollTo = (selector)=>{
        console.log(selector);
        const elementToScroll = document.querySelector(selector);
        if(isOpen){
            setOpen(false);
        }
        elementToScroll.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return (
        <>
            <section className={menuCN}>
                <div className="container-fluid">
                    <div className="mobile_menu__header row align-items-center">
                        <div className="col-2 close" onClick={()=>setOpen(false)}>
                            <img src={require("../assets/icons/cross.svg").default} alt="Закрыть" />
                        </div>
                        <div className="col-8 mobile_menu__logo text-center">
                            <img src={require("../assets/img/logo.svg").default} alt="Логотип" />
                        </div>
                    </div>
                
                    <div className="mobile_menu__list d-flex flex-column align-items-center">
                        <div className="mobile_menu__link subtitle" onClick={()=>scrollTo(".choice")}>Хинкальные</div>
                        <div className="mobile_menu__link subtitle" onClick={()=>scrollTo(".raffles")}>Акции</div>
                        <div className="mobile_menu__link subtitle" onClick={()=>scrollTo(".news")}>Новости</div>
                        <div className="mobile_menu__link subtitle">Франшиза</div>
                    </div>

                    <div className="mobile_menu__social row col-8 mx-auto">
                        <div className="text mobile_menu__social__heading col-12 text-center">Мы в соц. сетях</div>
                        <a href="" target="_blank" rel="noreferrer" className="col-6 text mobile_menu__social__link">
                            <img src={require("../assets/icons/facebook.svg").default} alt="Facebook" />
                            Facebook
                        </a>
                        <a href="" target="_blank" rel="noreferrer" className="col-6 text mobile_menu__social__link">
                            <img src={require("../assets/icons/youtube.svg").default} alt="Youtube" />
                            Youtube
                        </a>
                        <a href="" target="_blank" rel="noreferrer" className="col-6 text mobile_menu__social__link">
                            <img src={require("../assets/icons/instagram.svg").default} alt="Instagram" />
                            Instagram
                        </a>
                        <a href="" target="_blank" rel="noreferrer" className="col-6 text  mobile_menu__social__link">
                            <img src={require("../assets/icons/vk-red.svg").default} alt="ВКонтакте" />
                            Вконтакте
                        </a>
                    </div>
                </div>
            </section>

            <section className="menu">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="menu__burger col-3 d-md-none d-block" onClick={()=>setOpen(true)}>
                            <img src={require("../assets/icons/menu_burger.svg").default} alt="Бургер меню" />
                        </div>

                        <div className="logo col-md-2 col-6 text-center">
                            <img src={require("../assets/img/logo.svg").default} alt="Логотип" />
                        </div>
                        <div className="d-md-flex d-none justify-content-between align-items-center col-6 menu__list">
                            <div className="subtitle menu__link" onClick={()=>scrollTo(".choice")}>Хинкальные</div>
                            <div className="subtitle menu__link" onClick={()=>scrollTo(".raffles")}>Акции</div>
                            <div className="subtitle menu__link" onClick={()=>scrollTo(".news")}>Новости</div>
                            <div className="subtitle menu__link">Франшиза</div>
                        </div>
                        <div className="d-flex justify-content-md-between justify-content-end align-items-center col-md-1 col-3 menu__social">
                            <a href="" target="_blank" rel="noreferrer" className="mr-md-0 mr-2">
                                <img src={require("../assets/icons/telegram.svg").default} alt="Телеграм" />
                            </a>
                            <a href="//www.instagram.com/franchise_hinkalych/" target="_blank" rel="noreferrer">
                                <img src={require("../assets/icons/instagram.svg").default} alt="Телеграм" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}