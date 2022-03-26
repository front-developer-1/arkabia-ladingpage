import React, { useState } from "react";
import { ArrowDown } from "../../icons/outline/ArrowDown";
import { ArrowUp } from "../../icons/outline/ArrowUp";
import "./FaqOneQuestion.css";

interface FaqOneQuestionProps {
  question: string;
  questionText: string;
}

export const FaqOneQuestion: React.FC<FaqOneQuestionProps> = ({
  question,
  questionText,
}) => {
  const [isClick, setIsClick] = useState(false);

  const handleDown = () => {
    setIsClick(!isClick);
  };

  let Icon = isClick ? ArrowUp : ArrowDown;

  return (
    <div className="faq-one-question">
      <div className="faq-one-question-title">
        <h2 className="small-bold">{question}</h2>
        <Icon onClick={handleDown} />
      </div>
      {isClick && <p className="paragraph">{questionText}</p>}
    </div>
  );
};
