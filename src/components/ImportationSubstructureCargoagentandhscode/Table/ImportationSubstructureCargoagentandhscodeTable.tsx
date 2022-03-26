import React from "react";
import { Row } from "../..";
import { ArrowUp } from "../../../icons/outline/ArrowUp";
import "./ImportationSubstructureCargoagentandhscodeTable.css";

interface ImportationSubstructureCargoagentandhscodeTableProps {
  product: string;
  minimunDescriptions: string;
  tariffHeading: string;
  requiresPermission: string;
}

export const ImportationSubstructureCargoagentandhscodeTable: React.FC<ImportationSubstructureCargoagentandhscodeTableProps> =
  ({ product, minimunDescriptions, tariffHeading, requiresPermission }) => {
    return (
      <div className="importation-substructure-cargoagentandhscode-table">
        <h1 className="paragraph-header">Partidas arancelarias</h1>
        <p className="paragraph">
          Las partidas arancelarias sirven para clasificar internacionalmente
          las mercancías. Procura en coordinación con la agencia que sean las
          correctas.
        </p>
        <div className="importation-substructure-cargoagentandhscode-table-bottom">
          <Row
            title="Mercacía"
            columValues={[]}
            color="white-90"
            content="text"
          />
          <Row
            title="Item 01"
            columValues={[<ArrowUp />]}
            color="white-50"
            content="text"
          />
          <Row
            title="Producto"
            columValues={[product]}
            color="transparent"
            content="text"
          />
          <Row
            title="Descripciones mínimas"
            columValues={[minimunDescriptions]}
            color="white-25"
            content="text"
          />
          <Row
            title="Partida arancelaria"
            columValues={[tariffHeading]}
            color="transparent"
            content="text"
          />
          <Row
            title="¿Requiere permiso?"
            columValues={[requiresPermission]}
            color="black-50"
            content="text"
          />
        </div>
      </div>
    );
  };
