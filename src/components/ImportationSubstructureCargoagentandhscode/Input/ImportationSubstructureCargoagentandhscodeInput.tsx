import React, { useRef, useState } from "react";
import { Button, ButtonIcon, Textarea } from "../..";
import { Edit } from "../../../icons/outline/Edit";
import "./ImportationSubstructureCargoagentandhscodeInput.css";

interface ImportationSubstructureCargoagentandhscodeInputProps {
  textAreaRows?: number;
  bulkingAgentValue: string;
  handleBulkingAgentValue: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleCopyClipBoard: React.MouseEventHandler<HTMLButtonElement>;
}

export const ImportationSubstructureCargoagentandhscodeInput: React.FC<ImportationSubstructureCargoagentandhscodeInputProps> =
  ({
    textAreaRows = 3,
    bulkingAgentValue,
    handleBulkingAgentValue,
    handleCopyClipBoard,
  }) => {
    const [disabled, setDisabled] = useState(true);

    const handleEdit = () => {
      setDisabled(false);
    };

    return (
      <div className="importation-substructure-cargoagentandhscode-input">
        <h1 className="paragraph-header">Agente de carga</h1>
        <p className="paragraph">
          El agente de carga es quien va a coordinar con el proveedor para que
          la carga sea enviada. Bríndale la información del agente a tu
          proveedor para que se pongan en contacto.
        </p>
        <div className="importation-substructure-cargoagentandhscode-input-bottom">
          <Textarea
            rows={textAreaRows}
            title="Agente de carga"
            value={bulkingAgentValue}
            onChange={handleBulkingAgentValue}
            disable={disabled}
          />
          <div className="importation-substructure-cargoagentandhscode-input-btns">
            {disabled ? (
              <ButtonIcon
                content="editar"
                color="clear"
                size="extra-small"
                Icon={<Edit />}
                onClick={handleEdit}
              />
            ) : (
              <Button
                content="Cancelar"
                color="red"
                size="extra-small"
                onClick={() => setDisabled(true)}
              />
            )}
            <Button
              content="Copiar al portapapeles"
              size="extra-small"
              color="black-75"
              onChange={handleCopyClipBoard}
            />
          </div>
        </div>
      </div>
    );
  };
