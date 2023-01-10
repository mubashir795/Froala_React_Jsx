import React, {useState} from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordian =({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return(
        <div>
            <article className="questions">
                <header>
                    <button className="accordion">{title}</button>
                    <button className="btn-accordian" onClick={() => setShowInfo(!showInfo)}>
                        {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                    </button>
                </header>
                {showInfo && <p className="accordian-info">{info}</p>}
            </article>

        </div>
    )
}
export default Accordian;