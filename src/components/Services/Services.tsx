import React from "react";

/** import components */
import { ServiceOptios } from '../../@types/serviceTypes';
import { selectService } from "../../utils/selectService";

/** import styles */
import './Services.css';

/** services props */
type ServiceProps = {
    active: boolean, // status if service is actived
    typeService?: ServiceOptios; // type of servce
    onClickService?: (e:any) => void | React.MouseEventHandler<HTMLDivElement>; // event when clicked on service
}

/** component to rendered service in card */
export const Services: React.FC<ServiceProps> = ({
    active,
    typeService='Agenciamiento',
    onClickService,
    ...props
}) => {
    const Icon = selectService(typeService)[0];
    const title = selectService(typeService)[1]
    
    return (
        <div className={'services-main'+(active?' services-active':'')}
            onClick={onClickService}>
            <Icon className='services-icon' />
            <div className='service-title paragraph-header '>{title}</div>
       </div>
    )
}

