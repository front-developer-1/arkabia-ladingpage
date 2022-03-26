import React from "react";

import { TextField } from "../../TextField/TextField";
import { Dropdown } from "../../Dropdown/Dropdown";
import { ButtonIcon } from "../../ButtonIcon/ButtonIcon";
import { EditWhite } from "../../../icons/outline/EditWhite"; 
import { TagButton } from "../../Button/Tag/TagButton";
import { CircleCheckWhite } from "../../../icons/outline/CircleCheckWhite";


import './ArrivalDelivery.css';

interface ArrivalDeliveryProps {
    department: string;
    province: string;
    district: string;
    address: string;
    reference: string;
    edit: boolean;
    setDepartment:  React.Dispatch<React.SetStateAction<string>>;
    setProvince:  React.Dispatch<React.SetStateAction<string>>;
    setDistrict:  React.Dispatch<React.SetStateAction<string>>;
    setAddres:  React.Dispatch<React.SetStateAction<string>>;
    setReference:  React.Dispatch<React.SetStateAction<string>>;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ArrivalDelivery: React.FC<ArrivalDeliveryProps> = ({
    department,
    province,
    district,
    address,
    reference,
    edit,
    setDepartment,
    setProvince,
    setDistrict,
    setAddres,
    setReference,
    setEdit
}) => {

    const handleCancel = () => {
        setEdit(false);
    }

    const handleComplete = () => {
        console.log("Complete clicked!!!");
    }

     return (
         <div className='arrivalDelivery-main'>
             <div className='paragraph-header arrivalDelivery-text'>Lugar de entrega final</div>
             <div className='arrivalDelivery-row'>
                <Dropdown 
                    title='Departamento'
                    elements={['Lima']}
                    setValue={setDepartment}
                    value={department}
                    disabled={!edit}
                />
                <Dropdown 
                    title='Provincia'
                    elements={['Lima']}
                    setValue={setProvince}
                    value={province}
                    disabled={!edit}
                />
                <Dropdown 
                    title='Distrito'
                    elements={['Santiago de surco']}
                    setValue={setDistrict}
                    value={district}
                    disabled={!edit}
                />
             </div>
             <div className='arrivalDelivery-row'>
                <TextField 
                    title='Dirección'
                    value={address} 
                    placeholder=' ' 
                    onChange={(e)=>setAddres(e.target.value)} 
                    disabled={!edit}
                />
             </div>
             <div className='arrivalDelivery-row'>
                <TextField 
                    title='Referencia'
                    value={reference}
                    placeholder=' ' 
                    onChange={(e)=>setReference(e.target.value)} 
                    disabled={!edit}
                />
             </div>
             <div className='arrivalDelivery-button'>
                {!edit?<ButtonIcon
                    content='editar'
                    Icon={<EditWhite />}
                    color="blue-2"
                    size="extra-small"
                    place="left"
                    onClick={() => {
                        setEdit(true);
                    }}
                />: <>
                <TagButton 
                    onClick={handleCancel}
                    color="red"
                    content="Cancelar"
                   
                />
                <ButtonIcon 
                    content="Completar"
                    Icon={<CircleCheckWhite />}
                    color='green-2'
                    size="extra-small"
                    place="left"
                    onClick={handleComplete}
                /></>}
             </div>
         </div>
     )
}