import React from "react";

import { BtnsColorOptions } from "../../@types/btnsColorTypes";
import { CloseBig } from "../../icons/solid/CloseBig";
import { selectBtnBackgroundColor } from "../../utils/selectButtonsStyles";
import { ModalFilterItem } from "./Item/ModalFilterItem";
import { Button } from "..";

import { peruFlag } from "../../testdata/fakedata";

import './ModalFilterMobile.css';

interface ModalFilterMobileProps {
    showModal: boolean; // estado para mostrar modal
    title: string; // titulo de modal
    colorHeader: BtnsColorOptions;
    setShowModal: (e: boolean) => void; // metodo para modificar el estado del modal

}

export const ModalFilterMobile: React.FC<ModalFilterMobileProps> = ({
    showModal,
    title,
    colorHeader,

    setShowModal,
    ...props
}) => {

    const getBackgroundColor = (color: BtnsColorOptions) => {
      return selectBtnBackgroundColor(color);
    }

    return (
        <>
            {
                showModal && 
                <div className="modalFilterMobile-container">
                    <div className="modalFilterMobile-header" 
                        style={{backgroundColor: getBackgroundColor(colorHeader)}} >
                            <div className="modalFilterMobile-header--title">
                                <div className="paragraph-header">{title}</div>
                            </div>
                        <CloseBig className="modalFilterMobile-header--icon" onClick={()=>setShowModal(false)} />
                    </div>
                    <div className="modalFilterMobile-body">
                        {props.children}
                        <Button content="Aplicar filtros" />
                    </div>
                </div>
            }
        </>
    )
}