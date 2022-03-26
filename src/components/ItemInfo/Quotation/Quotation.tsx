import React, { useEffect, useState } from "react";
import { Dropdown, PhotoUnit, TextField } from "../..";
import { ArrowDown } from "../../../icons/outline/ArrowDown";
import { ArrowUp } from "../../../icons/outline/ArrowUp";
import "./Quotation.css";

interface QuotationProps {
  productNumber: number;
  setProductArr: React.Dispatch<React.SetStateAction<number[]>>;
  setProductDetails: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        tradename: string;
        brand: string;
        model: string;
        state: string;
        minDescriptions: string;
        primaryUse: string;
        allImages: (string | ArrayBuffer | null)[];
      }[]
    >
  >;
}

const STATEELEMENTS = [""];

export const Quotation: React.FC<QuotationProps> = ({
  productNumber,
  setProductArr,
  setProductDetails,
}) => {
  //Crear el state del si card esta extendido y los valores del producto
  const [isExtended, setIsExtended] = useState(false);
  const [tradename, setTradename] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minDescriptions, setMinDescriptions] = useState("");
  const [primaryUse, setPrimaryUse] = useState("");
  const [state, setState] = useState("");

  // prettier-ignore
  const [photoData1, handlePhotoData1] = useState<string | ArrayBuffer | null>("");
  // prettier-ignore
  const [photoData2, handlePhotoData2] = useState<string | ArrayBuffer | null>("");
  // prettier-ignore
  const [photoData3, handlePhotoData3] = useState<string | ArrayBuffer | null>("");
  // prettier-ignore
  const [photoData4, handlePhotoData4] = useState<string | ArrayBuffer | null>("");
  // prettier-ignore
  const [photoData5, handlePhotoData5] = useState<string | ArrayBuffer | null>("");

  let allImages = [photoData1, photoData2, photoData3, photoData4, photoData5];

  let handleAllImages = [
    handlePhotoData1,
    handlePhotoData2,
    handlePhotoData3,
    handlePhotoData4,
    handlePhotoData5,
  ];

  //Manejar la imagen del icono si es extendido o no
  let Arrow;
  if (isExtended) {
    Arrow = ArrowUp;
  } else {
    Arrow = ArrowDown;
  }

  const handleTrash = () => {
    //TODO HANDLE DELETE ELEMENT
    setProductArr((p) => {
      return p.filter((_, idx) => idx !== productNumber);
    });

    //Filtrar todos elementos que no sean eliminados
    setProductDetails((p) => {
      return p.filter((v, i) => {
        //si el producto que se quiere eliminar tiene un producto adelante de él, este tomara su id
        if (p.length > 1 && i + 1 < p.length && v.id === productNumber + 1) {
          p[i + 1].id = p[i].id;
        }
        return i !== productNumber;
      });
    });
  };

  useEffect(() => {
    setProductDetails((p) => {
      return p.map((v, idx) => {
        //modificar el producto basado en su id
        if (v.id === productNumber + 1) {
          p[idx] = {
            ...p[idx],
            tradename,
            brand,
            model,
            minDescriptions,
            primaryUse,
            state,
            allImages,
          };
        }
        return p[idx];
      });
    });
  }, [tradename, brand, model, minDescriptions, primaryUse, state, allImages]);

  return (
    <div className="iteminfo-quotation">
      <div className="iteminfo-quotation-header">
        <p className="smalltext-header">Producto {productNumber + 1}</p>
        <Arrow onClick={() => setIsExtended(!isExtended)} />
      </div>
      {isExtended && (
        <>
          <div className="iteminfo-quotation-row">
            <TextField
              title="Nombre comercial"
              value={tradename}
              onChange={(e) => setTradename(e.target.value)}
              placeholder=" "
            />
            <TextField
              title="Marca"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder=" "
            />
            <TextField
              title="Modelo"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder=" "
            />
            <Dropdown
              title="Estado"
              elements={STATEELEMENTS}
              value={state}
              setValue={setState}
            />
          </div>
          <div className="iteminfo-quotation-row">
            <TextField
              title="Descripciones mínimas"
              value={minDescriptions}
              onChange={(e) => setMinDescriptions(e.target.value)}
              placeholder=" "
            />
            <TextField
              title="Uso o función principal"
              value={primaryUse}
              onChange={(e) => setPrimaryUse(e.target.value)}
              placeholder=" "
            />
          </div>

          <div className="iteminfo-quotation-last">
            <div className="uploadphoto-photos">
              {[...Array(5)].map((_, idx) => (
                <PhotoUnit key={idx} setImageData={handleAllImages[idx]} />
              ))}
            </div>
            <img
              src="/images/trash-full.svg"
              alt="trash-icon"
              onClick={handleTrash}
            />
          </div>
        </>
      )}
    </div>
  );
};
