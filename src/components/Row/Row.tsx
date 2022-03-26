import React from "react";

/** importando tipos */
import { RowsColorTypes } from "../../@types/rowsColorTypes";
import { RowContentType } from "../../@types/rowsContentType";

/** importando utilidades */
import {
  selectRowBackgroundColor,
  selectRowFontColor,
  selectRowJustifyContent,
  selectRowPadding,
} from "../../utils/selectRowStyles";

/** importando estilos */
import "./Row.css";

/* declaracion de variables de interface */
interface RowProps {
  title: any; // titulo del row
  content: RowContentType; // tipo de las columnas text, imagen o button
  columValues: any[]; //  contenido de las columnas
  color: RowsColorTypes; // color del row
  className?: string; // clase del contenedor del row
  classRow?: string // clase del row
  classRowValue?: string; // clase de las la columnas
  imageClass?: string; // clase de la imagen
  onClick?: () => void | React.MouseEventHandler<HTMLDivElement>; // evento de click en un row
}


/** Componente Row 
 * renderea un row 
 */
export const Row: React.FC<RowProps> = ({
  title, 
  content,
  columValues,
  color,
  onClick,
  className='',
  classRow='',
  classRowValue='',
  imageClass
}) => {
  return (
    <div
      className={"row paragraph "+className}
      style={{
        backgroundColor: selectRowBackgroundColor(color),
        color: selectRowFontColor(color),
        padding: selectRowPadding(content),
      }}
      onClick={onClick}
    >
      <div className={"row__title "+classRow}>{title}</div>
      <div
        className={"row__values "+classRowValue}
        style={{
          justifyContent: `${selectRowJustifyContent(columValues)}`,
        }}
      >
        {/* TODO CHANGE KEY */}
        {columValues.map((val, idx) => (
          <div className={`row__values-item ${(" row__item_"+idx)} ${content === 'image' && "row__values-item__image"}`}key={idx}>
            {content === 'image'? <img className={imageClass} src={val} />: val}
          </div>
        ))}
      </div>
    </div>
  );
};
