import React from "react";
import { DropdownItem } from "./DropdownItem";

import { ServiceOptios } from '../../@types/serviceTypes';
import { selectService } from "../../utils/selectService";

interface DropdownListProps {
  elements: any[];
  listRef: React.RefObject<HTMLDivElement>;
  icon: any;
  setItem: (item: string) => void;
  setIcon: (item: any) => void;
  className: string;
}

export const DropdownList: React.FC<DropdownListProps> = ({
  elements,
  listRef,
  icon=false,
  className='',
  setItem,
  setIcon
}) => {

  const getIcon = (typeService: ServiceOptios) => {
    const Icon = selectService(typeService)[0];
    return <Icon />;
  }

  const getTitle = (typeService: ServiceOptios) => {
    const title = selectService(typeService)[1] 
    return title+"";
  }

  return (
    <div className="dropdown-list" ref={listRef}>
      {!icon ?elements.map((item) => (
        <DropdownItem 
          key={item} 
          item={item} 
          setItem={setItem}
          className={className}
          />
      )): elements.map((i, idx) => (
        <DropdownItem 
          key={idx} 
          item={getTitle(i)} 
          setItem={setItem}
          icon={getIcon(i)}
          setIcon={setIcon}
          />
      ))}
    </div>
  );
};
