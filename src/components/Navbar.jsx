'use client'
import Link from "next/link";
import { FaHome, FaUser} from "react-icons/fa";


export default function Navbar(){
    return(
        <div className="nav-bar">
                <Link className="w-20 h-20 transition flex items-center justify-center rounded-xl hover:bg-gray-100 hover:text-black" href='/'><FaHome style={{cursor:"pointer"}}/></Link>
                <Link className="w-20 h-20 text-black transition flex items-center justify-center rounded-xl hover:bg-gray-900 hover:text-white" href='/registro'><FaUser style={{cursor:"pointer"}}/></Link>
        </div>
    )
}