import React from "react";

/** importando componentes */
import { ServicesOptions } from '../../../components/Services/ServicesOptions/ServicesOptions';
import { CompanyList } from '../../../components/CompanyList/CompanyList';

/** importando estilo */
import './ServiceHomePage.css';

/** declaracion de variables de interface */
interface ServiceHomePageProps {
    companylistData: any[]; // lista de compañias
    servicesOptionsData: any[] // lista de servicios
}

/** componente ServiceHomePage
 * componente que rederea una seccion con los servicios
 */
export const ServiceHomePage: React.FC<ServiceHomePageProps> = ({
    companylistData,
    servicesOptionsData
}) => {
     return (
        <div className='serviceHomePage-container'>
            <div className="serviceHomePage-services">
                <div className='big-header'>
                    Servicios
                </div>
                <ServicesOptions
                    servicesOptions={servicesOptionsData}
                    mobile={window.innerWidth < 1060}
                />
            </div>
            <div className='serviceHomePage-company'>
                <CompanyList
                    title='Agenciamiento de aduana'
                    description='Encuentra buenas agencias de aduana, con comentarios sinceros de clientes reales.'
                    orderData={companylistData}
                    chooseAgency={false}
                    ordersQuotation={[companylistData[0]]}
                    onClickAddQuoteAgency={(e)=>{console.log(e)}}
            />
            </div>
        </div>
     )
}