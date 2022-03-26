import React from "react";

interface DropdownSelecIcontProps {
  handleDropdown: () => void;
  selectRef: React.RefObject<HTMLDivElement>;
  title: string;
  itemText: string;
  itemRef: React.RefObject<HTMLSpanElement>;
  iconRef: React.RefObject<HTMLDivElement>;
  textRef: React.RefObject<HTMLDivElement>;
  icon?: any
}

export const DropdownSelectIcon: React.FC<DropdownSelecIcontProps> = ({
  handleDropdown,
  selectRef,
  title,
  itemText,
  itemRef,
  iconRef,
  textRef,
  icon
}) => {
  return (
      <div className="dropdown-select-icon" onClick={handleDropdown} ref={selectRef}>
        <div ref={iconRef} className='dropdown__icon'>
            {icon}
        </div>
        <div className='dropdown__content'>
          {itemText !== title && <span className="select-title-icon">{title}</span>}
          <span className='move-text-icon' ref={itemRef}>{itemText}</span>
          <img src="/images/dropdown-arrow.png" alt={title} />
        </div>
      </div>       
  );
};
