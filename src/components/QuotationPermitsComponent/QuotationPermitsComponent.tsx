import React, { useRef, useState } from "react";
import { ButtonIcon } from "..";
import { ArrowDown } from "../../icons/outline/ArrowDown";
import { ArrowUp } from "../../icons/outline/ArrowUp";
import { CloudUp } from "../../icons/outline/CloudUp";
import { ProductList } from "../ProductList/ProductList";
import "./QuotationPermitsComponent.css";

interface QuotationPermitsComponentProps {
  fileValue: string | undefined;
  handleFileValue: React.ChangeEventHandler<HTMLInputElement>;
  setProductDetails: (e:any)=> void;
  productDetails: any[]
}

//Recibir como parametros el valor de archivo con su respectivo manejador
//Y el setter del arreglo de productos
export const QuotationPermitsComponent: React.FC<QuotationPermitsComponentProps> =
  ({ fileValue, handleFileValue, setProductDetails, productDetails }) => {
    const fileRef = useRef<HTMLInputElement>(null);
    const [isExtended, setIsExtended] = useState(false);

    let Arrow;

    if (isExtended) {
      Arrow = ArrowUp;
    } else {
      Arrow = ArrowDown;
    }

    return (
      <div className="quotationPermitsComponent">
        <div className="quotationPermitsComponent-container">
          <div className="quotationPermitsComponent-header">
            <div className="quotationPermitsComponent-title">
              <p className="paragraph-header">
                ¿Quieres saber si tu mercancía requiere permiso?
                <span>(Opcional)</span>
              </p>
              <img src="/images/info-circle-outline.svg" alt="info-circle" />
            </div>
            <Arrow onClick={() => setIsExtended(!isExtended)} />
          </div>
          <p className="paragraph">
            Coloca a detalle los productos que estás trayendo y que no te
            sorprendan en la aduana.
            <br />
            <span>
              Esto lo podrá ver solo las agencias de aduana a las que le mandas
              tu cotización.
            </span>
          </p>
        </div>
        {isExtended && (
          <>
            <ProductList products={productDetails} setProductDetails={setProductDetails} />
            <div className="lclcd-last">
              <div className="lclcd-add-list">
                <p className="smalltext-header">
                  Añade la lista de empaque <span>(Opcional)</span>
                </p>
                <img
                  src="/images/information-icon.svg"
                  alt="information-icon"
                />
              </div>

              <div className="lclcd-fileupload">
                <ButtonIcon
                  content="Subir archivo"
                  Icon={<CloudUp />}
                  color="blue-2"
                  size="extra-small"
                  place="right"
                  onClick={() => {
                    fileRef.current?.click();
                  }}
                />
                <input
                  onChange={handleFileValue}
                  type="file"
                  hidden
                  ref={fileRef}
                  value={fileValue}
                />
                <span className="tinytext">
                  {fileValue === ""
                    ? "No hay ningún documento todavía"
                    : fileValue?.substr(12)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
