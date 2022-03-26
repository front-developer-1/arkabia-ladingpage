import React from "react";

import { TextField } from "..";
import { SearchTextField } from "../SearchTextField/SearchTextField";
import { MyContactsFriend } from "../MyContacts/Friends/MyContactsFriend";
import { Dropdown } from "..";
import { Button } from "..";

import './MyCompany.css';

interface MyCompanyProps {

}

export const MyCompany: React.FC<MyCompanyProps> = ({

}) => {
    return (
        <div className="myCompany-container">
            <div className="small-header myCompany-colorText">Mi empresa</div>
            <div className="paragraph myCompany-colorText">Si tienes una empresa, puedes agregar a socios para que administren contigo tus operaciones.</div>
            <div className="myCompany-row">
                <TextField title='Nombre de la empresa' placeholder=" " />
                <TextField title='Cargo en la empresa' placeholder=" " />
            </div>
            <div className="myCompany-search">
                <SearchTextField title="Agregar a las personas que trabajan contigo" setTextSearch={()=>{}}  />
            </div>
            <div className="myCompany-row" style={{justifyContent: 'space-between'}}>
                <MyContactsFriend 
                    edit={false}
                    user={{
                        company: '',
                        fullName: 'Consuelo Guevara Paredes',
                        nickName: '@yperalta',
                        isConnected: false,
                        img: '/images/profile_min.png'
                    }}
                    showDots={false}
                />
                <div className="myCompany-dropdown">
                    <Dropdown 
                            elements={[]}
                            setValue={()=>{}}
                            title="Miembro"
                            value=""
                        />
                        <img src="/images/close_big.svg" alt="" />
                </div>
            </div>
            <div className="myCompany-button">
                <Button content="Guardar" />
            </div>
        </div>
    )
}