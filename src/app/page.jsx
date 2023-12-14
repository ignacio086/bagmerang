'use client'
import Map from "@/components/map";
import '../../node_modules/leaflet/dist/leaflet.css'
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const MyMap= dynamic(()=> import('@/components/map'),{ssr:false})

export default function Home() {

  return (
    <div>
      <MyMap/>
      <Navbar/>
    </div>
  )
}