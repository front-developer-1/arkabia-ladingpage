import React from "react";

interface DropdownSelectProps {
  handleDropdown: () => void;
  selectRef: React.RefObject<HTMLDivElement>;
  title: string;
  itemText: string;
  itemRef: React.RefObject<HTMLSpanElement>;
  className: string;
  disabled: boolean
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  handleDropdown,
  selectRef,
  title,
  itemText,
  itemRef,
  className,
  disabled
}) => {
  return (
      <div className={"dropdown-select "+className+`${disabled && "dropdown-select__disabled" }`} onClick={handleDropdown} ref={selectRef}>
        {itemText !== title && <span className="select-title">{title}</span>}
        <span ref={itemRef}>{itemText}</span>
        <img src="/images/dropdown-arrow.png" alt={title} />
      </div>       
  );
};
