import React, { useEffect, useMemo, useState } from "react";
import { IShipment } from "../../interfaces/Shipment";
import { Row } from "../Row/Row";
import { TextField } from "../TextField/TextField";
import { PortRow } from "./PortRow/PortRow";
import "./Shipment.css";
import { ShipmentPortsList } from "./ShipmentPortsList";

interface ShipmentProps {
  text: string;
  setShipment: React.Dispatch<React.SetStateAction<IShipment | undefined>>;
}

const chinaFlag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png";

const ORIGEN = [
  { id: 1, country: "China", city: "Shangai", flag: chinaFlag },
  { id: 2, country: "India", city: "Shanthala, Karnataka", flag: chinaFlag },
  { id: 3, country: "India", city: "Shanti Nagar, Karnataka", flag: chinaFlag },
];

export const Shipment: React.FC<ShipmentProps> = ({ 
  text,
  setShipment,
 }) => {
  const [origin, setOrigin] = useState("");
  const [portsList, setPortsList] = useState<any>();
  const [ports, setPorts] = useState<any>();
  const [isSelected, setIsSelected] = useState(false);
  const [textFieldName, setTextFieldName] = useState(text);

  useEffect(() => {
    setPortsList(ORIGEN);
    const filterdData = portsList?.filter((port: any) =>
      port.city.toLowerCase().includes(origin.toLocaleLowerCase())
    );
    setPorts(filterdData);
    if (origin === "" || isSelected) {
      setPorts([]);
    }
  }, [ORIGEN, origin]);

  const setOriginPort = (port: any) => {
    setOrigin(port?.city);
    setIsSelected(true);
    setShipment({
      city: port.city,
      conuntry: port.country,
      port: "",
      type: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(e.target.value);
    if (e.target.value === ports[0]?.city) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <div className="shipment">
      <TextField
        title={textFieldName}
        placeholder=" "
        value={origin}
        onChange={handleChange}
        autoComplete="off"
      />
      <ShipmentPortsList
        ports={ports}
        setOriginPort={setOriginPort}
        isSelected={isSelected}
        setOrigin={setOrigin}
        setIsSelected={setIsSelected}
        setShipment={setShipment}
        setTextFieldName={setTextFieldName}
      />
    </div>
  );
};
