import classNames from 'classnames';
import {useEffect, useRef, useState} from "react";

export function Select({icon,
    signature,
    selectText,
    adressesList,
    setAdress,
    selected
}){
    const [isOpen, setIsOpen] = useState(false);
    const selectParentClasses = classNames({
        'col-md-4 col-12 px-0 choice__select': true,
        'active': isOpen,
        'selected': selected
    });
    const selectEl = useRef(null);
    useEffect(()=>{
        const handler = function(e){
            if(isOpen) return null;

            const isConditionClose = e.path.find(pathEl=>{
                return pathEl === selectEl.current;
            });
            !isConditionClose && setIsOpen(false);
        }
        document.addEventListener("click", handler);

        return ()=>{
            document.removeEventListener("click", handler);
        }
    });

    const toggleList = ()=>{
        setIsOpen(!isOpen);
    }

    const optionClickHandler = (data)=>{
        setIsOpen(false);
        setAdress(data);
    }

    return (
        <div className={selectParentClasses} ref={selectEl}>
            <div className="choice__select__signature subtitle">{signature}</div>
            <div className="choice__select__list subheading" onClick={toggleList}>
                {icon ? <img src={icon} alt={icon.desc} /> : ''}
                {selectText}
            </div>
            <div className="choice__select__options ">
                {
                    adressesList ? adressesList.map((adress,index)=>{
                        return (
                            <div key={index} className="choice__select__option subtitle"
                                onClick={()=>{
                                    optionClickHandler(adress)
                                }}
                            >
                                {adress.city ? adress.city : adress.street}
                            </div>
                        )
                    }) : ''
                }
            </div>
        </div>
    );
}