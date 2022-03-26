import React from "react";

/** importantdo componentes */
import { TableQuotation } from "../../../components/Table/Quotation/TableQuotation";
import { Table } from "../../../components/Table/Table";

/** importando estilo */
import './QuotationHomePage.css';

/** declaracionde variables de interface */
interface QuotationsHomePageProps {
    quotationsData: any // objecto cotizaciones
}

/** Componente QuotationHome Page
 * Seccion comparar cotizaciones mediante tabla
 */
export const QuotationsHomePage: React.FC<QuotationsHomePageProps> = ({
    quotationsData
}) => {

    return (
        <div className='quotationsHomePage-container'>
            <TableQuotation 
                head={{
                    title: "Conceptos",
                    content: 'image',
                    color: 'white-90',
                    values: quotationsData.companyLogo,
                    classHeader: 'quotationsHomePage-table--head'
                }}
                block1={{
                    title: 'Servicio en origen',
                    values: quotationsData.originService.items,
                    subtotal: quotationsData.originService.subtotal
                }}
                block2={{
                    title: 'Servicio de destino',
                    values: quotationsData.destinationService.items,
                    subtotal: quotationsData.destinationService.subtotal
                }}
                total={quotationsData.grossTotal}
            />
            <Table 
                header='Impuestos'
                body={quotationsData.tax.items}
                footer={{
                    title:'Total USD',
                    values:quotationsData.tax.total
                }}
            />
        </div> 
       
    )
}