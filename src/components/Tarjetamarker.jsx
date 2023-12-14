
import { GiCancel } from "react-icons/gi";
export default function Tarjetamarker({titulo , coordenadax, coordenaday  , funcion}){
    return(
        <div style={{display:'flex',gap:4}}>
            <h1>{titulo}</h1>
            <p>|{coordenadax}|</p>
            <p>{coordenaday}</p>
            <button onClick={funcion} className="bg-gray-900"><GiCancel/></button>
        </div>
    )
}