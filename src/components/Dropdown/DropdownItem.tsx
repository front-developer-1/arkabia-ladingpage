import React from "react";

interface DropdownItemProps {
  item: string;
  icon?: React.ReactNode;
  className?: string;
  setItem: (e: string) => void;
  setIcon?: (item: any) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  item,
  icon,
  className='',
  setItem,
  setIcon
}) => {
  const handleSelectItem = () => {
    setItem(item);
    if(setIcon) {
      setIcon(icon)
    }
  };

  return (
    <div className={("dropdown-list__item "+className)+(icon?'drop-list__item-icon':'')} onClick={handleSelectItem}>
      {icon && <div className='list__item-icon'>{icon}</div>}{item}
    </div>
  );
};
