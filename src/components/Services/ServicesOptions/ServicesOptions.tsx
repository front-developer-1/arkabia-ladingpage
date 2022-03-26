import React, {useState} from "react";

/** import components */
import { ServiceOptiosTypes } from "../../../@types/serviceOptionsTypes";
import { SearchTextField } from "../../SearchTextField/SearchTextField";
import { Services } from "../Services";
import { Dropdown } from "../../Dropdown/Dropdown";

/** import style */
import './ServicesOptions.css';

/** interfaces props */
interface ServicesOptionsProps {
    servicesOptions: any[ServiceOptiosTypes]; // array of services will be rendered
    mobile?: boolean; // modo responsibe 
}

// Component to rendered ServiceOptions block for desktop an mobile 
export const ServicesOptions: React.FC<ServicesOptionsProps> = ({
    servicesOptions,
    mobile=false
}) => {

    const [serviceActive, setServiceActive] = useState('Agenciamiento');

    const onClick = (option:string) => {
        setServiceActive(option);
        console.log(option);
    }

    return (
        <div className='servicesOptions-main'>
            <SearchTextField 
                setTextSearch={(e)=> {}}
                title='Buscar en servicios Arkabia'
            />
            <div className='servicesOptions-text'>
                <div className='servicesOptions-title small-bold'>
                    Importación
                </div>
                <div className='servicesOptions-description smalltext-header'>
                    Encuentra a todo el equipo que necesitas para importar un producto.
                </div>
                { !mobile ? servicesOptions.map((s:any, idx:number) => {
                        return (
                            <Services 
                                active={s==serviceActive}
                                key={idx}
                                typeService={s}
                                onClickService={()=>onClick(s)}
                            />
                        )
                    }):
                    <Dropdown 
                        elements={servicesOptions}
                        setValue={()=> {}}
                        title={'¿Qué servicio desea?'}
                        value={''}
                        iconActive={true}
                        disabled={false}
                    />
                }
                
            </div>
            
        </div>
    )
}

