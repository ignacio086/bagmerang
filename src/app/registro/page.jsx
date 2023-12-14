'use client'


import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";


export default function Registro() {
    const [name,setName] = useState({
        name:'',
        password:''
    })
    const handleChangeName= (e)=>{
        setName({
            ...name,
            [e.target.name]:e.target.value
        })
    }
    const router = useRouter()
    return (
        <div>
            <div className="flex items-center justify-center gap-4" style={{width:'100%',height:'90vh',flexDirection:'column', backgroundColor:'#000',color:'white'}}>
                <p>Ingrese su nombre</p>
                <input className="input-text" value={name.name} name='name'onChange={handleChangeName} placeholder="Ingrese su nombre"></input>
                <p>Ingrese su contrasena</p>
                <input className='input-text'type='password'name='pass' value={name.password} onChange={handleChangeName}placeholder="Ingrese su contrasena"></input>
                <button className='p-4 bg-gray-100 text-black border-black border-2 rounded cursor-pointer hover:bg-gray-900 hover:text-white transition hover:border-white'onClick={()=>{
                    if(name.name=='somostribusustentable@gmail.com' && name.password=='Somosjesyali'){
                        router.push('/registro/admin')
                    }
                    else{
                        return alert('datos de administrador ingresados incorrectos')
                    }
                    
                }}>Ingresar</button>
            </div>
            <Navbar/>
        </div>
    )
}