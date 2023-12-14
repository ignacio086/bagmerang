import '../../node_modules/leaflet/dist/leaflet.css'
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import('../components/map'), {
  ssr: false,
})

export default function Home() {

  return (
    <div>
      <DynamicHeader/>
      <Navbar/>
    </div>
  )
}