import React from "react";
import { Textarea, TextField } from "..";
import "./FaqInput.css";

interface FaqInputProps {
  faqValue: string;
  faqPlaceholder?: string;
  handleFaqValue: React.ChangeEventHandler<HTMLInputElement>;
  faqAnswer: string;
  faqAnswerPlaceholder?: string;
  handleFaqAnswer: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const FaqInput: React.FC<FaqInputProps> = ({
  faqValue,
  faqPlaceholder = " ",
  handleFaqValue,
  faqAnswer,
  faqAnswerPlaceholder = " ",
  handleFaqAnswer,
}) => {
  return (
    <div className="faq-input">
      <TextField
        title="Agrega una pregunta frecuente"
        value={faqValue}
        onChange={handleFaqValue}
        placeholder={faqPlaceholder}
      />
      <div className="faq-textarea-container">
        <Textarea
          title="Agrega aquí la respuesta"
          value={faqAnswer}
          onChange={handleFaqAnswer}
          placeholder={faqAnswerPlaceholder}
        />
      </div>
    </div>
  );
};
