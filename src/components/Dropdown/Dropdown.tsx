import React, { useRef, useState, useEffect } from "react";
import "./Dropdown.css";
import { DropdownList } from "./DropdownList";
import { DropdownSelect } from "./DropdownSelect";
import {DropdownSelectIcon} from './DropdownSelectIcon';

interface DropdownProps {
  title: string;
  elements: string[];
  value: string;
  iconActive?: boolean;
  disabled?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string
  
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  elements,
  iconActive,
  disabled=false, 
  value,
  setValue,
  className=''
}) => {
  const [itemText, setItemText] = useState(title);
  const [icon, setIcon] = useState(false) ;

  const selectRef = useRef<HTMLDivElement>(null);
  const selectRefIcon = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const handleDropdown = () => {
    setItemText(title);
    selectRef.current?.classList.toggle("dropdown-select__click");
    selectRefIcon.current?.classList.toggle('dropdown-select__click-icon');
    listRef.current?.classList.toggle("dropdown-show");
    itemRef.current?.classList.remove("move-text");
    itemRef.current?.classList.toggle('dropdown-no-transform');
    iconRef.current?.classList.toggle('dropdown-no-display');
  };

  const setItem = (item: string) => {
    setValue(item);
    setItemText(item);
    listRef.current?.classList.remove("dropdown-show");
    selectRef.current?.classList.remove("dropdown-select__click");
    selectRefIcon.current?.classList.remove('dropdown-select__click-icon');
    itemRef.current?.classList.add("move-text");
    iconRef.current?.classList.remove('dropdown-no-display');
    itemRef.current?.classList.remove('dropdown-no-transform');
  };

  useEffect(()=> {
    if(value.length>0) {
      setItem(value);
    }
  }, [])

  return (
    <div className={`dropdown ${disabled && "dropdown__disabled"}`}>
     {!icon?<DropdownSelect
        handleDropdown={handleDropdown}
        itemRef={itemRef}
        itemText={itemText}
        selectRef={selectRef}
        title={title}
        className={className}  
        disabled={disabled}      
      />:<DropdownSelectIcon
        handleDropdown={handleDropdown}
        itemRef={itemRef}
        itemText={itemText}
        selectRef={selectRefIcon}
        title={title}
        icon={icon}
        iconRef={iconRef}
        textRef={textRef}
        
        />}
      <DropdownList 
        className={className} 
        icon={iconActive}
        elements={elements} 
        listRef={listRef} 
        setItem={setItem} 
        setIcon={setIcon} 
      />
    </div>
  );
};
