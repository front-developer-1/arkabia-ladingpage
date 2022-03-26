import React from "react";
import "./Textarea.css";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  title: string;
  disable?: boolean;
  completed?: boolean;
};

export const Textarea: React.FC<TextareaProps> = ({
  title,
  disable = false,
  completed,
  placeholder,
  ...props
}) => {
  let disabledClass = "";
  if (disable) {
    disabledClass = "textarea-disabled";
  }

  if (completed) {
    disable = true;
  }

  //TODO find a better way to auto rezie
  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    let scHeight = e.currentTarget.scrollHeight;
    e.currentTarget.setAttribute("style", `height: ${scHeight}px;`);
  };

  return (
    <div className="textarea">
      <textarea
        className={`textarea-input ${disabledClass}`}
        onKeyUp={(e) => handleKeyUp(e)}
        disabled={disable}
        placeholder={`${disable ? " " : placeholder}`}
        {...props}
      ></textarea>
      <span className="textarea-title paragraph-header">{title}</span>
    </div>
  );
};
