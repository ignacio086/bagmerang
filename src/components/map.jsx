'use client'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer , TileLayer , Marker , Popup } from 'react-leaflet'
export default function Map(){
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

      const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
        
        iconSize: [38, 38] 
      });
    return(
    <MapContainer style={{height:'90vh'}} center={[-32.89, -68.83]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
      attribution=''
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {
          markers.map((marca)=>{
            return(
              <Marker icon={customIcon} position={marca.geocode} key={marca.id}>
                <Popup>
                  {marca.popUp}
                </Popup>
              </Marker>
            )
          })
        }
    </MapContainer>
    )
}

