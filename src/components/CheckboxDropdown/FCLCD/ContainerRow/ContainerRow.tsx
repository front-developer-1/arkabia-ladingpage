import React from "react";
import "./ContainerRow.css";
import { TextField } from "../../..";

interface ContainerRowProps {
  containersArr: any[];
  setContainerArr: React.Dispatch<React.SetStateAction<any[]>>;
}

export const ContainerRow: React.FC<ContainerRowProps> = ({
  containersArr,
  setContainerArr,
}) => {
  if (containersArr.length < 0) {
    console.error("uniqueContainer can not be less than 0!");
    return <></>;
  }

  const handleTrash = (idx: number) => {
    setContainerArr((p) => {
      return p.filter((v, i) => i !== idx);
    });
  };

  return (
    <div>
      {containersArr.length === 0 ? (
        <h2 className="smalltext-header" style={{ color: "var(--red)" }}>
          No hay ningún contenedor agregado todavía.
        </h2>
      ) : (
        <div className="container-row-list">
          {containersArr.map((container, idx) => (
            <div
              className="container-row"
              style={{
                backgroundColor: `${
                  containersArr.length > 0 ? "var(--black-05)" : ""
                }`,
              }}
            >
              <div className="container-row-info">
                <img src={container.imgUrl} alt="container" />
                <div className="container-row-textfields">
                  <TextField
                    title="Tipo de contenedor"
                    placeholder=" "
                    disable
                    value={container.type}
                  />
                  <TextField
                    title="Tamaño"
                    placeholder=" "
                    disable
                    value={container.size}
                  />
                  <TextField
                    title="Cantidad"
                    placeholder=" "
                    disable
                    value={container.quantity}
                  />
                </div>
              </div>
              <div
                className="container-row-trash"
                onClick={() => handleTrash(idx)}
              >
                <img src="/images/trash-full.svg" alt="trash-icon" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
