export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12 social mx-auto">
                        <div className="social__heading subtitle">
                            Мы в соц. сетях
                        </div>
                        <div className="social__link-wrap d-flex col-12 text text-center">
                            <a target="_blank" rel="noreferrer" href="//www.instagram.com/franchise_hinkalych/" className="social__link col-6 inst">Instagram</a>
                            <a target="_blank" rel="noreferrer" href="//vk.com/starikhinkalych" className="social__link col-6 vk">Вконтакте</a>
                        </div>
                    </div>
                    <div className="col-12 copyright text-center text">
                        «Старик Хинкалыч» &copy; 2021
                    </div>
                </div>
            </div>
        </footer>
    );
}