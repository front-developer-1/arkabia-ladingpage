import React from "react";
import { OperationType } from "../../@types/operationType";
import { ArkabiaOp } from "../../icons/outline/ArkabiaOp";
import { BackArrow } from "../../icons/outline/BackArrow";
import { Dots } from "../../icons/outline/Dots";
import { HomeFill } from "../../icons/solid/HomeFill";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import "./OperationHeader.css";

interface OperationHeaderProps {
  order: string;
  operationType: OperationType;
  teams: any[]; //TODO ADD TEMAS TYPE
}

export const OperationHeader: React.FC<OperationHeaderProps> = ({
  order,
  operationType,
  teams,
}) => {
  return (
    <div className="operation-header">
      <div className="operation-header-left">
        <div className="arrow-back">
          <BackArrow />
        </div>

        <div className="operation-title-container">
          <div className="arkabia-op-icon">
            <ArkabiaOp />
          </div>

          <div className="operation-title-type">
            <h2 className="paragraph-header">{order}</h2>
            <h3 className="paragraph">{operationType}</h3>
          </div>
        </div>

        <div className="operation-mob-options">
          <Dots />
        </div>
      </div>

      <div className="operation-mob-bot">
        <div className="operation-home-icon">
          <HomeFill />
        </div>

        <div style={{ minWidth: 300 }}>
          <Dropdown
            title="Equipo"
            elements={teams.map((team) => team.teamName)}
            value=""
            setValue={() => {}}
            disabled={true}
          />
        </div>
      </div>

      <div className="operation-header-right">
        <div className="operation-home-icon">
          <HomeFill />
        </div>

        <div className="operation-teams">
          <h3 className="smalltext-header">Equipos</h3>

          {/* teams buttons */}
          <div className="operations-teams">
            {teams.map((team: any, idx) => (
              <Button key={idx} content={team.teamName} size="small" />
            ))}
          </div>

          <div className="operation-add">
            <Button content="+ Añadir equipo" size="only-text" />
          </div>
        </div>

        <div className="operation-more-options">
          <Dots />
        </div>
      </div>
    </div>
  );
};
