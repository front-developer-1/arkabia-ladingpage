import React from "react";

/** importando componentes */
import { Row } from "../../Row/Row";
import { RowsColorTypes } from "../../../@types/rowsColorTypes";
import { RowContentType } from "../../../@types/rowsContentType"; 
import { RowGroup } from "../../Row/RowGroup/RowGroup";

/** importando estilos */
import './TableQuotation.css';

/** declarando variables de interface */
interface TableQuotationProps {
    head: { // objeto que contiene los datos del header de la tabla
        title: string; // titulo del header
        content: RowContentType; // tipo de contenido del row imagen o texto
        color: RowsColorTypes; // color de del row segun los tipo de colores 
        values: any[]; // valores del row 
        classHeader?: string; // clases que se asigara al header 
    };
    block1: { // primero bloque de rows
        title: string, // titulo de bloque
        values: any[], // valores del row
        subtotal: any[] // subtotal
    };
    block2: { // segundo bloque de rows
        title: string, 
        values: any[],
        subtotal: any[]
    };
    total: any[], // total de la cotizacion array de numeros
    
}

/** table qu 
 *  
 */
export const TableQuotation: React.FC<TableQuotationProps> = ({
    head,
    block1,
    block2,
    total,
}) => {

    return (
        <div className='tableQuotation-container'>
            <Row 
                title={head.title}
                content='image'
                color={head.color}
                columValues={head.values}
                className={head.classHeader + " tableQuotation-radius--top"}
                classRow="paragraph-header"
            />
            <RowGroup 
                title={block1.title}
                rows={block1.values}
                footerValues={{
                    title:'Subtotal 1',    
                    values: block1.subtotal
                }}
                open={true}
            />
            <RowGroup 
                title={block2.title}
                rows={block2.values}
                footerValues={{
                    title:'Subtotal 2',    
                    values: block2.subtotal
                }}
                open={true}
            />
            <Row
                title='Total USD'
                color='white-90'
                columValues={total}
                classRow="paragraph-header tableQuotation-color--text"
                classRowValue="paragraph-header tableQuotation-color--text"
                content="text"
                className='tableQuotation-raduis--bottom'
            />
        </div>
    )
}