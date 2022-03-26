import React, { useEffect, useState } from "react";
import "./ContainerInfo.css";

interface ContainerInfoProps {
  containerType: string;
}

const CONTAINER = {
  title: "Contenedor estándar",
  content: `Los contenedores estándar o Dry Van son los más utilizados en el
  transporte marítimo. Son contenedores herméticos y sin ventilación.`,
  exteriorMeasures: "6.10 x 2.44 x 2.59",
  interiorMeasures: "5.89 x 2.35 x 2.39",
  nominal: "28 ton / 33 m3",
  imgUrl: "/images/container.png",
};

export const ContainerInfo: React.FC<ContainerInfoProps> = ({
  containerType,
}) => {
  const [container, setContainer] = useState<any>(null);

  useEffect(() => {
    //TODO get contianer data from Firebase
    setContainer(CONTAINER);
  }, [containerType]);

  return (
    <div className="container-info">
      <div className="container-info-title">
        <p className="smalltext-header">{container?.title}</p>
        <p className="smalltext">{container?.content}</p>
      </div>
      <div className="container-specs">
        <img src={container?.imgUrl} alt="contenedor-estandar" />
        <div className="container-spec">
          <p className="tinytext-header">Medidas exteriores</p>
          <p className="tinytext">{container?.exteriorMeasures} metros</p>
        </div>
        <div className="container-spec">
          <p className="tinytext-header">Medidas interiores</p>
          <p className="tinytext">{container?.interiorMeasures} metros</p>
        </div>
        <div className="container-spec">
          <p className="tinytext-header">Capacidad nominal</p>
          <p className="tinytext">{container?.nominal}</p>
        </div>
      </div>
    </div>
  );
};
