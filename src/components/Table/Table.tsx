import React from "react";

import { Row } from './../Row/Row';

import { RowContentType } from "../../@types/rowsContentType";

import './Table.css';

interface TableProps {
    header?: string
    headerValues?: string[];
    headerType?: RowContentType;
    body: any[],
    footer?: {
        title: string,
        values: any[]
    }
}

export const Table: React.FC<TableProps> = ({
    header='',
    headerValues=[],
    headerType= 'text',
    body,
    footer
}) => {
    return (
        <div className='table-container'>
            <Row 
                title={header}
                color='white-90'
                columValues={headerValues}
                content={headerType}
                className="table-radius--top"
                classRow="paragraph-header table-color--text"
                classRowValue="paragraph-header table-color--text"
            />
            {body && body.map((v:any, idx:number)=> {
                    return (
                        <Row 
                            key={idx}
                            title={v.name}
                            color={idx%2===0?'transparent':'white-25'}
                            content='text'
                            columValues={v.value}
                        />
                    )
                })   
            }
            {footer && <Row
                        title={footer.title}
                        color='white-90'
                        columValues={footer.values}
                        content="text"
                        className="table-raduis--bottom"
                        classRow="paragraph-header table-color--text"
                        classRowValue="paragraph-header table-color--text"
                    />}
        </div>
    )
}