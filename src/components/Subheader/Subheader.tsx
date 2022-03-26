import React, { useRef } from "react";

/** importando estilos */
import "./Subheader.css";

/**declaracion de variables de interface */
interface SubheaderProps {
  active?: boolean;
  content: string;
  index?: number;
  handleClick: (e: string)=> void;
  setIndex?: (e: number) => void;
}

/**clase SubHeader 
 * renderiza un sub menu
 * propiedades:
 * - handleClick => onClick el el sub menu
*/
export const Subheader: React.FC<SubheaderProps> = ({ 
  active, 
  content, 
  handleClick,
  index=0,
  setIndex = ()=>{},
  ...props
}) => {
  const subheaderRef = useRef<HTMLSpanElement>(null);

  if (active) {
    subheaderRef.current?.classList.add("subheader-clicked");
  } else {
    subheaderRef.current?.classList.remove("subheader-clicked");
  }

  return (
    <span {...props}  onClick={()=>{handleClick(content); setIndex(index)}} className={`subheader smalltext-header ${active && "subheader-clicked"}`} ref={subheaderRef}>
      {content}
    </span>
  );
};
