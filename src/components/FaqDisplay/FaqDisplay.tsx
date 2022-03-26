import React from "react";
import "./FaqDisplay.css";
import { FaqOneQuestion } from "../FaqOneQuestion/FaqOneQuestion";

interface FaqDisplayProps {}

export const FaqDisplay: React.FC<FaqDisplayProps> = ({}) => {
  return (
    <div className="faq-display">
      <h1 className="small-header">Preguntas frecuentes</h1>

      <FaqOneQuestion
        question="¿Qué es lo que incluye nuestro servicio de agenciamiento?"
        questionText="texto"
      />
    </div>
  );
};
