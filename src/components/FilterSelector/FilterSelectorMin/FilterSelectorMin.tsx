import React from "react";

import { ModalFilterMobile } from "../../ModalFilterMobile/ModalFilterMobile";
import { ModalFilterItem } from "../../ModalFilterMobile/Item/ModalFilterItem";
import { peruFlag } from "../../../testdata/fakedata";

import './FilterSelectorMin.css';

interface FilterSelectorMinProps {
    showModal: boolean;
    filterItems: any[];
    setShowModal: (e:boolean) => void;
    setFilter: (e: any) => void;
}

export const FilterSelectorMin: React.FC<FilterSelectorMinProps> = ({
    showModal,
    filterItems,
    setShowModal,
    setFilter
}) => {
    return (
        <ModalFilterMobile  
            showModal={showModal} 
            title="Filtrar búsqueda"
            colorHeader="yellow"
            setShowModal={setShowModal}> 
                {
                    filterItems.length > 0 && filterItems.map((f, idx) => {
                        return (
                            <ModalFilterItem 
                                key={idx}
                                element = {f}
                            />
                        )
                    })
                }
        </ModalFilterMobile>
    )
}