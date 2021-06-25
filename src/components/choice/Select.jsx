export function Select({icon, signature, selectText}){

    return (
        <div className="col-4 px-0 choice__select">
            <div className="choice__select__signature subtitle">{signature}</div>
            <div className="choice__select__list subheading">
                {icon ? <img src={icon} alt={icon.desc} /> : ''}
                {selectText}
            </div>
            <div className="choice__select__options">
                <div className="choice__select__option subtitle">1</div>
                <div className="choice__select__option subtitle">1</div>
                <div className="choice__select__option subtitle">1</div>
                <div className="choice__select__option subtitle">1</div>
                <div className="choice__select__option subtitle">1</div>
                <div className="choice__select__option subtitle">1</div>
                <div className="choice__select__option subtitle">1</div>
                <div className="choice__select__option subtitle">1</div>
            </div>
        </div>
    );
}