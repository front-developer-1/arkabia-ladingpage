import React, { useCallback, useState } from "react";
import { Row } from "../Row/Row";
import { PortRow } from "./PortRow/PortRow";
import Geocode from "react-geocode";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { IShipment } from "../../interfaces/Shipment";

interface ShipmentPortsListProps {
  ports: any;
  setOriginPort: (port: any) => void;
  isSelected: boolean;
  setOrigin: React.Dispatch<React.SetStateAction<string>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setShipment: React.Dispatch<React.SetStateAction<IShipment | undefined>>;
  setTextFieldName: React.Dispatch<React.SetStateAction<string>>;
}

const { REACT_APP_GOOGLE_GEOCODE_API_KEY, REACT_APP_GOOGLE_MAPS_API_KEY } =
  process.env;

Geocode.setApiKey(REACT_APP_GOOGLE_GEOCODE_API_KEY!);

const PORTS = [
  { id: 1, port: "Shangai", type: "sea" },
  { id: 2, port: "Shangai", type: "air" },
  { id: 3, port: "Jiading", type: "sea" },
];

export const ShipmentPortsList: React.FC<ShipmentPortsListProps> = ({
  ports,
  setOriginPort,
  setOrigin,
  setIsSelected,
  setShipment,
  isSelected,
  setTextFieldName,
}) => {
  const { isLoaded } = useJsApiLoader({
    // id: "google-map-script",
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY!,
  });
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState<any>();
  const [iconMapType, setIconMapType] = useState("sea");

  const [citySelected, setCitySelected] = useState<any>();

  const handleOriginPortSelected = (port: any) => {
    setOriginPort(port);
    setCitySelected(port);
    getLatAndLng(port.city);
  };

  const getLatAndLng = async (address: string) => {
    try {
      const geoResponse = await Geocode.fromAddress(address);
      const { lat, lng } = geoResponse.results[0].geometry.location;
      setLocation({ lat, lng });
      console.log(lat, lng);
    } catch (err) {
      console.error(err);
    }
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="ports-content">
      {ports?.map((port: any) => (
        <Row
          key={port.id}
          title={
            <PortRow
              icon={port.flag}
              subTitle={port.country}
              title={port.city}
            />
          }
          onClick={() => {
            handleOriginPortSelected(port);
            setTextFieldName("Ciudad de origen");
          }}
          color="white-90"
          content="text"
          columValues={[]}
        />
      ))}
      {isSelected && (
        <>
          {PORTS.map((port) => (
            <Row
              key={port.id}
              title={
                <PortRow
                  icon={getIconShipment(port.type)}
                  title={port.port}
                  subTitle={getShipmentPortType(
                    port.type,
                    citySelected.country
                  )}
                  onMouseEnter={() => {
                    getLatAndLng(port.port);
                    setIconMapType(port.type);
                  }}
                />
              }
              onClick={() => {
                setShipment((prev: any) => ({
                  ...prev,
                  port: port.port,
                  type: port.type,
                }));
                setOrigin(port.port);
                setIsSelected(false);
                setTextFieldName(getShipmentPortName(port.type));
              }}
              color="white-90"
              content="text"
              columValues={[]}
            />
          ))}
          {isLoaded && (
            <GoogleMap
              center={location}
              onLoad={onLoad}
              onUnmount={onUnmount}
              zoom={15}
              mapContainerClassName="shipment-map"
            >
              <Marker
                position={location}
                icon={getIconShipmentForMarker(iconMapType)}
              />
            </GoogleMap>
          )}
        </>
      )}
    </div>
  );
};

const getIconShipmentForMarker = (type: string) => {
  return type === "sea"
    ? "/images/ship-icon.svg"
    : type === "air"
    ? "/images/plane-icon.svg"
    : "/images/truck-icon.svg";
};

const getIconShipment = (type: string) => {
  return type === "sea"
    ? "/images/ship-icon-gray.svg"
    : type === "air"
    ? "/images/plane-icon-gray.svg"
    : "/images/truck-icon.svg";
};

const getShipmentPortType = (type: string, country: string) => {
  return `${
    type === "sea" ? "Puerto" : type === "air" ? "Aeropuerto" : ""
  } de ${country}`;
};

const getShipmentPortName = (type: string) => {
  return `${
    type === "sea" ? "Puerto" : type === "air" ? "Aeropuerto" : ""
  } de origen`;
};
