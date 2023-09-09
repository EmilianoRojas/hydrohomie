import { useState } from "react";
import './Vaso.css'

export default function Vaso(){
    const [nivel, setNivel] = useState(0)

    function llenarVaso(event) {
        const rect = event.target.getBoundingClientRect();
        const clickY = rect.bottom - event.clientY
        const newNivel = Math.max(0, Math.min(100, (clickY / rect.height) * 100));
        setNivel(newNivel);
    }
    return (
        <div className='vaso' onClick={llenarVaso}>
            <div className="agua" style={{height: `${nivel}%`}}></div>
        </div>
            
    )
}