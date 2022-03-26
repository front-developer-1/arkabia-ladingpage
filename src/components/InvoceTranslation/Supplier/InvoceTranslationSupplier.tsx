import React, {useState} from "react";

import { TextField } from "../../TextField/TextField";
import { Dropdown } from "../../Dropdown/Dropdown";
import { Button } from "../../Button/Button";
import { Trash } from "../../../icons/outline/Trash";
import { SupplierInvoceTranslation } from "../../Supplier/SupplierInvoceTranslation";
import { TransactionInvoceTranslation } from "../../Transaction/TransactionInvoceTranslation";
import { ProductInvoceTranslation } from "../../Product/ProductInvoceTranslation";

import './InvoceTranslationSupplier.css';


interface InvoceTranslationSupplierProps {

}

export const InvoceTranslationSupplier: React.FC<InvoceTranslationSupplierProps> = ( {

}) => {
    const [count, setCount] = useState(1);

    return (
        <div className='invoceTranslationSupplier-main'>
            <div className='invoceTranslationSupplier-add smalltext-header'>+ Agregar otro proveedor</div>
            <div className='invoceTranslationSupplier-container'>
                <SupplierInvoceTranslation />
                <TransactionInvoceTranslation />
                <div className='invoceTranslationSupplier-statement'>
                    <div className='invoceTranslationSupplier-text paragraph-header'>Responder a la declación jurada</div>
                    <div className='invoceTranslationSupplier-text paragraph'>Esta es información que pide la aduana peruana para todas las mercancías que arriban al país.</div>
                    <div>
                        <Button 
                            content='Ir a la declaración'
                            size='normal'
                            color='black-75'
                        />
                    </div>
                </div>
                <div className='invoceTranslationSupplier-text paragraph-header'>Productos</div>
                <div className='invoceTranslationSupplier-text paragraph'><span className='invoceTranslationSupplier-span'>IMPORTANTE:</span> Si el producto no tiene Marca/Modelo, favor indicar: Sin Marca o Sin Modelo. En caso estos campos se encuentren en blanco se declarará Sin Marca y Sin Modelo.</div>
                <div className='invoceTranslationSupplier-product-container'>
                    <ProductInvoceTranslation number={1} />                     
                </div>
                <div className='invoceTranslationSupplier-add smalltext-header'>+ Agregar otro producto</div>
            </div>
            <div className='invoceTranslationSupplier-btn-confirm'>
                <Button content='Confirmar' color='black-75' size='normal' />
            </div>
        </div>
    )
}