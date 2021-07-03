export function Menu() {
    return (
        <header >
            <div className='container-fluid d-flex justify-content-center'>

                <div className='menu d-flex align-items-center '>
                    <div className='logo'>

                        <img src={require("../assets/img/Logo_menu.svg").default} />
                    </div>
                    <div className='pagination align-items-center '>

                        <p className='text' >Хинкальные</p>


                        <p className='text'  > Акции</p>


                        <p className='text' >Новости</p>


                        <p className='text' >Франшиза</p>

                        <div className='communication d-flex align-items-center'>
                            <img className='instagram' src={require("../assets/icons/instagram.svg").default} alt='иконка инстаграма' />
                            <img className='telegram' src={require("../assets/icons/telegram.svg").default} alt='иконка телеграма' />

                        </div>
                    </div>

                </div>
                <div className='info'></div>
            </div>

        </header >
    )
}