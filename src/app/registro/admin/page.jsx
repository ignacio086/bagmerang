
import Navbar from "@/components/Navbar";
import Tarjetamarker from "@/components/Tarjetamarker";

export default function Admin() {

  const markers = [
    {
      geocode: [-32.886058312652224, -68.85560870897261],
      popUp: "Punto Bagmerang",
      id:1
    },
    {
      geocode: [-32.91048887423986, -68.8579261373966],
      popUp: "Punto Bagmerang",
      id:2
    },
    {
      geocode: [-32.89, -68.83],
      popUp: "TribuCenter",
      id:3
    }
  ];
    return (
        <div>
            <div className="flex items-center justify-center gap-4" style={{width:'100%',height:'90vh',flexDirection:'column', backgroundColor:'#000',color:'white'}}>
                <h1>Bienvenidas a Bagmerang</h1>
                <p>MARCADORES</p>
                {
                    markers.map((marker)=>{
                        return(
                            <Tarjetamarker  key={marker.id} titulo={marker.popUp} coordenadax={marker.geocode[0]} coordenaday={marker.geocode[1]}/>
                        )
                    })
                }
            </div>
            <Navbar/>
        </div>
    )
}
