import React,{useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import 'bootstrap/dist/css/bootstrap.min.css'
import IconMarker from '../../Img/marker.png'

const MapsContainer = () => {
    const [activeMarker, setActiveMarker] = useState(null)
    const [ActiveMarker] = useState(false)
    const handleActiveMarker = (marker) => {
        if (marker === true) {
          return;
        }
        setActiveMarker(marker);
      };

    return (
        <LoadScript googleMapsApiKey={"AIzaSyC_H1NfVsAI6M3hlBbS696JtdK8Hb9CzHI"}>
            <GoogleMap
            center={{ lat: -7.1328542, lng: 107.5991887}}
            mapContainerClassName='container-fluid position-absolute h-100 w-100' 
            zoom={13}>
                 <Marker
                position={{ lat: -6.9587227, lng: 107.6224512 }}
                >
                </Marker>
            </GoogleMap>
           
        </LoadScript>
    )
}

export default MapsContainer
