import React from "react";

import { RegisterMail } from "../../../components/RegisterMail/RegisterMail";
import { StepsImport } from "../../../components/StepsImport/StepsImport";
import { FilesFLC } from "../../../components/FilesFLG/FilesFLC";
import { DontConfiscateCargo } from "../../../components/DontConfiscateCargo/DontConfiscateCargo";
import { Benefits } from "../../../components/Benefits/Benefits";
import { Order } from "../../../interfaces/Order";

import './FooterSection.css';

interface FooterSectionProps {
    orderData: Order;
    phasesImportData: any[];
    invoice: string;
    packing: string;
    guide: string;
    quotationsData: any;
    benefitList: any[];
    setEmail: (e: string) => void;
    setInvoice: (e: string) => void;
    setPacking: (e: string) => void;
    setGuide: (e: string) => void;
    onClickRegister: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> =({
    orderData,
    phasesImportData,
    invoice,
    packing,
    guide,
    quotationsData,
    benefitList,
    setGuide,
    setInvoice,
    setPacking,
    setEmail,
    onClickRegister,
    ...props
}) => {
    return (
        <section className="footerSection">
            <RegisterMail setEmail={setEmail} handleClick={onClickRegister} />
            <div className="footerSection-row">
                <StepsImport 
                    activePhase={1}
                    isOnline={true}
                    order={orderData}
                    phases={phasesImportData}
                    total={1220.33}
                />
                <FilesFLC
                    invoice={invoice}  
                    packing={packing}
                    guide={guide}
                    setInvoice={setInvoice}
                    setPacking={setPacking}
                    setGuide={setGuide}
                    disabled={true}
                />
            </div>
            <DontConfiscateCargo 
                companyList={quotationsData.companyLogo}
                restriction={[
                {
                    name: "Carro de juguete a control remoto",
                    value: ['Requiere permisos', 'Requiere permisos', 'Requiere permisos']
                }
                ]}
            />
            <Benefits benefistList={benefitList} />
            <RegisterMail setEmail={setEmail} handleClick={onClickRegister} />
        </section>
    )
}