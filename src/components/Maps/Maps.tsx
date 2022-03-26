import React, { useState, useCallback, useEffect } from 'react';

import { GoogleMap, Marker, useJsApiLoader} from "@react-google-maps/api";
import Geocode from "react-geocode";
import ReactDOM from 'react-dom';

import { TextMaps } from "./Text/TextMaps";
import { ButtonMaps } from "./Button/ButtonMaps";

import './Maps.css';


const { REACT_APP_GOOGLE_GEOCODE_API_KEY, REACT_APP_GOOGLE_MAPS_API_KEY } =
  process.env;

Geocode.setApiKey(REACT_APP_GOOGLE_GEOCODE_API_KEY!);

interface MapsProps {
    locationMarker: {
        lat: number
        lng: number
    };
    zoom: number,
    updatedTime: string;
}

export const Maps: React.FC<MapsProps> = ({
    locationMarker,
    zoom,
    updatedTime
}) => {

    const [iconMapType, setIconMapType] = useState("sea");
    const [maps, setMap] = useState<any>();
    const [location, setLocation] = useState<any>();

    const { isLoaded, loadError } = useJsApiLoader({
        // id: "google-map-script",
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY!,
    });

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
        WrapperRender(map, <CustomComponent 
            onclickIn={()=>onclickZoomIn(map)}
            onclickOut={()=>onclickZoomOut(map)} 
            updateTime={updatedTime} />);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const WrapperRender = (map: any, Element: any) => {
        const controlButtonDiv = document.createElement('div');
        ReactDOM.render(Element, controlButtonDiv);
        map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(controlButtonDiv);
    }

    const onclickZoomIn = (map:any) => {
        map.setZoom(map.getZoom() + 1);
    }

    const onclickZoomOut = (map:any) => {
        map.setZoom(map.getZoom() - 1);
    }

    if(loadError) {
        console.log(loadError)
    }

    const getLatAndLng = async (address: string) => { // obtene las coordinadas de una cuidad
        try {
          const geoResponse = await Geocode.fromAddress(address);
          const { lat, lng } = geoResponse.results[0].geometry.location;
          setLocation({ lat, lng });
          console.log(lat, lng);
        } catch (err) {
          console.error(err);
        }
      };

    useEffect(() => {
        getLatAndLng('Shangai');
    }, [isLoaded])

    return (
       <>
        {isLoaded ? <div>
            <GoogleMap
                center={location}
                onLoad={onLoad}
                onUnmount={onUnmount}
                zoom={zoom}
                mapContainerClassName="Maps__box"
                options={
                    {
                        disableDefaultUI: true,
                        scrollwheel: false,
                        center: location,
                        zoom: zoom 
                    }
                }
            >
                <Marker
                    position={location}
                    icon={getIconShipmentForMarker(iconMapType)}
                />
               
            </GoogleMap>
        </div> : <div>Cargando mapa ...</div>}
        {loadError && <div>Ocurrio un error al cargar el mapa...</div>}
       </>
    )
}

const CustomComponent = (props:any) => {
    return (
        <div className="trackingShipping-custom">
            <ButtonMaps onClick={props.onclickIn} text="Acercar +" />
            <ButtonMaps onClick={props.onclickOut}  text="Alejar +" />
            <TextMaps content={"Última actualización hace "+props.updateTime} />
        </div>
    )
}

const getIconShipmentForMarker = (type: string) => {
    return type === "sea"
      ? "/images/ship-icon.svg"
      : type === "air"
      ? "/images/plane-icon.svg"
      : "/images/truck-icon.svg";
};