import React,{useState, useEffect} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import 'bootstrap/dist/css/bootstrap.min.css'
import IconMarker from '../../Img/marker.png'
import CrudHandler from '../../Handler/CrudHandler'
const MapsContainer = () => {
    const [activeMarker, setActiveMarker] = useState(null)
    const [ActiveMarker] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
      const isiNya = CrudHandler.getData()
      isiNya.on('value', snapshot =>{
        const isi = snapshot.val()
        const data = []
        for(let id in isi) {
          data.push(isi[id])
        }
        setData(data)
        console.log(data)
      })
    }, []);
    
    const handleActiveMarker = (marker) => {
        if (marker === true) {
          return;
        }
        setActiveMarker(marker);
      };

    return (
        <LoadScript googleMapsApiKey={"AIzaSyC_H1NfVsAI6M3hlBbS696JtdK8Hb9CzHI"}>
            <GoogleMap
            center={{ lat: -6.9875362, lng: 107.6196334 }}
            mapContainerClassName='container-fluid position-absolute h-100 w-100' 
            zoom={13}>
              { Object.keys(data).map((item, index) => 
                 <Marker
                 key={index}
                position={{ lat: parseFloat(data[item].latitude), lng: parseFloat(data[item].longitude) }}
                >
                </Marker>
               ) }
            </GoogleMap>
           
        </LoadScript>
    )
}

export default MapsContainer
