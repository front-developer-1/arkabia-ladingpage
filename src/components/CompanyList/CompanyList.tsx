import React, {useEffect, useState} from "react";

import { FilterSelectorExtended } from "../FilterSelector/FilterSelectorExtended/FilterSelectorExtended";
import { FilterSelectorMiniature } from "../FilterSelector/FilterSelectorMobile/FilterSelectorMiniature";
import { OrderMiniature } from "../OrderMiniature/OrderMiniature";
import { FooterNumber } from "../Footer/FooterNumber/FooterNumber";
import { FilterSelectorMin } from "../FilterSelector/FilterSelectorMin/FilterSelectorMin";
import { peruFlag } from "../../testdata/fakedata";
import { FilterButton } from "../Button/Filter/FilterButton";

import { RightArrow } from "../../icons/outline/RightArrow";

import './CompanyList.css';

interface CompanyListProps {
    title: string; // title company list
    description: string; // description
    orderData: any[]; // orderes to rendered
    chooseAgency: boolean ; // status to choose agency to quotation
    ordersQuotation: any[]; // array orderes in quotations
    onClickAddQuoteAgency: (e: any) => void;
}

export const CompanyList: React.FC<CompanyListProps> = ({
    title,
    description,
    orderData,
    chooseAgency = false,
    ordersQuotation,
    onClickAddQuoteAgency
}) => {
    
    const [showMinModal, setShowMinModal] = useState(false);
    const [filters, setFilters] = useState({
        preferences: [],
        location: [],
        sortBy: [],
        status: []
    }) 

    const getQuoteSended = (companyId: number) => {      
        let id = ordersQuotation.findIndex((order) => {
            return order.id === companyId
        });

        return id !== -1 ? true:false
    }

      return (
        <div className='companyList-main'>
           <div>
            <div className='companyList-title'>{title}</div>
            <div className='companyList-description'>{description}</div>
           </div>
            <div className='companyList-filter-desktop'>
                <FilterSelectorExtended 
                    country={[]}
                    online={true}
                    preferences={[]}
                    sortby={[]}
                />
            </div>
            <div className='companyList-filter-mobile'>
                <FilterSelectorMiniature 
                    preferences={[]}
                    sortBy={[]}    
                />
                {/* <FooterNumber 
                        numbers={[1,2,3,4]}
                        activeNumber={1}
                /> */}
            </div>
            {/* <div onClick={()=>setShowMinModal(true)} className="companyList-filter-min">
                <div  className="paragraph-header companyList-filter-min--colorText">Filtros</div>
                <RightArrow />
            </div> */}
            <FilterButton title="Filtros" setModal={setShowMinModal} />
            <div className='companyList-list'>
                {orderData.length> 0 && orderData.map((order:any, idx) => {
                    return (
                        <OrderMiniature
                            key={order.id}
                            order={order}
                            price={80.00}
                            choose={chooseAgency}
                            edit={false}
                            quoteSended={getQuoteSended(order.id)}
                            onClickChoose ={()=>onClickAddQuoteAgency(order)}
                        />
                    )
                })  }
                <div className='companyList-footer-number'>
                    <FooterNumber 
                        numbers={[1,2,3,4,5,6,7]}
                        activeNumber={1}
                    />
                </div>
            </div>
            {/* <div className='companyList-footer-number'>
                <FooterNumber 
                    numbers={[1,2,3,4,5,6,7]}
                    activeNumber={1}
                />
            </div> */}
            <FilterSelectorMin 
                showModal={showMinModal} 
                filterItems={[
                    {
                        title: 'Preferencias', 
                        options: [{
                            text: 'Preferencias',
                            type: 'text',
                        }]
                    },
                    {
                        title: 'Ubicación', 
                        options: [{
                        text: '',
                        type: 'country',
                        countryDetail: {
                            city: 'Lima',
                            country: 'Perú',
                            flagImg: peruFlag
                        }
                        }]
                    },
                    {
                        title: 'Ordenar por', 
                        options: [{
                        text: 'Relevancia',
                        type: 'text'
                        }]
                    }, 
                    {
                        title: 'Estado', 
                        options: [{
                        text: 'En Linea',
                        type: 'check',
                        }]
                    }
                ]}
                setShowModal={setShowMinModal}  
                setFilter={setFilters}
            />
        </div>
    )
}