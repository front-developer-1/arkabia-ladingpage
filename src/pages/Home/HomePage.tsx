import React, { useState } from "react";

//importando componentes
import { Header } from "../../components/Header/Header";
import { FooterSection } from "./FooterSection/FooterSection";
import { Subheader } from "../../components";
import { Footer } from "../../components";
import { SubMenuHome } from "../../Consts/subMenuHome";
import { SubscriptionModal } from "./FooterSection/SubscriptionModal/SubscriptionModal";

// importando secciones de la pagiba
import { QuotationsHomePage } from "./QuotationSection/QuotationHomePage";
import { ServiceHomePage } from "./ServicesSection/ServiceHomePage";
import { PanelHomaPage } from "./PanelSection/PanelHomePage";
import { OrderHomePage } from "./OrderSection/OrderHomePage";


// importando datos falsos
import { ORDERDATA } from "../../testdata/fakedata";
import { PhasesImportData } from "../../Consts/phasesImport";
import { CompanylistData } from "../../testdata/CompanyListData";
import { BenefitList } from "../../Consts/benefitList";
import { QuotationsData } from "../../testdata/QuotationsData";
import { DashboardElementsRowData } from "../../testdata/DashboardElementsRowData";
import { EventData } from "../../testdata/eventData";
import { ChargeData } from "../../Consts/services";
import { TeamData } from "../../testdata/teamData";

// importando constantes
import { ServicesOptionsData } from "../../Consts/servicesOptions";

// importando estilos
import './HomePage.css';

// declaracion de interface
interface HomePageProps {

}


// componente HomePAge 
/**
 * hacer render de varias secciones
 */
export const HomePage: React.FC<HomePageProps> = ({

}) =>{

    console.log("homePage")

    // declaracion de useStete
    const [email, setEmail] = useState(''); // state de email
    
    // state de archivos
    const [invoice, setInvoice] = useState(''); // state doc factura
    const [packing, setPacking] = useState(''); // state doc empaque
    const [guide, setGuide] = useState(''); // state de doc guia de remision

    // state que controlar los estados de los sub menu y texto de las secciones
    const [subMenuActive, setSubMenuActive] = useState('Cotizaciones múltiples'); // state de sub menu
    const [description, setDescription] = useState("Cotiza tu carga con varias agencias de aduana para que obtengas el mejor precio."); //state de texto de cada sub menu

    // state que controla modal
    const [showModal, setShowModal] = useState<boolean>(false);

    // evento al hacer click en el boton registrar
    const onClickRegister = () => {

    }

    // evento al hacer click el sub menu 
    /**
     * cambia el submenu activo y el texto del submenu
     */
    const onClickSubMenu = (subMenu: string) => {
        setSubMenuActive(subMenu);

        switch (subMenu) {
            case 'Cotizaciones múltiples':
                setDescription('Cotiza tu carga con varias agencias de aduana para que obtengas el mejor precio.');
                break;
            case 'Servicios':
                setDescription('¿Buscas agencia de aduana? Encuentralo aquí?');
                break;
            case 'Panel principal':
                setDescription('Cada importación cuenta con equipos, los responsables de hacer que la importación sea exitosa.')
                break;
            default:
                setDescription('Ten a la mano las tareas y eventos más importantes para hoy.')
                break;
        }
    }

    return (
        <div className="homePage-main">
            <Header 
                onClickLognIn={()=>setShowModal(true)}
                onClickRegister={()=>setShowModal(true)}
            />
            <div className="homePage-container">
                <div className="homePage-container__content">
                    <div className="homePage-section__title">
                        <div className="mega-header">Todas tus importaciones en un solo lugar</div>
                        <div className="big-subheader" style={{color: 'var(--gray-1)'}}>Una sola herramienta para todo tu equipo. Cotiza, contrata, organiza.</div>
                    </div>
                    <div className="homePage-content">
                        <div className="homePage-subheader">
                            <div className="homePage-subheader__title">
                                {   /** componente subMenu */
                                    SubMenuHome.map((s, idx) => (<Subheader key={idx} handleClick={onClickSubMenu} content={s} active={subMenuActive === s} />))
                                }
                            </div>
                            <div className="homePage-subheader__detail paragraph">
                                {description}
                            </div>
                        </div>
                        <div className="homePage-section-content">
                            {
                                subMenuActive === 'Cotizaciones múltiples' ?
                                    /** seccion cotizaciones multiples */
                                    <QuotationsHomePage quotationsData={QuotationsData} />:
                                (subMenuActive === "Servicios" ? 
                                    /** seccion servicios */
                                    <ServiceHomePage companylistData={CompanylistData} servicesOptionsData={ServicesOptionsData} />:
                                (subMenuActive === "Panel principal" ?
                                    /** seccion panel principal */ 
                                    <PanelHomaPage events={EventData} dashboardRows={DashboardElementsRowData} setDetailText={setDescription} /> :
                                    /** seccion orden */
                                    <OrderHomePage 
                                        setDetail={setDescription} 
                                        events={EventData.slice(1,2)} 
                                        orders={[ORDERDATA]}
                                        phasesOrder={PhasesImportData} 
                                        chargeStatus={ChargeData}
                                        teamData={TeamData}
                                        guide={guide}
                                        invoice={invoice}
                                        packing={packing}
                                        setGuide={setGuide}
                                        setInvoice={setInvoice}
                                        setPacking={setPacking}
                                    />
                                ))    
                            }
                        </div>
                    </div>
                </div>
                {/** seccion footer */}
                <FooterSection
                    benefitList={BenefitList}
                    quotationsData={QuotationsData}
                    guide={guide}
                    invoice={invoice}
                    packing={packing}
                    orderData={ORDERDATA}
                    phasesImportData={PhasesImportData}
                    onClickRegister={onClickRegister}
                    setEmail={setEmail}
                    setGuide={setGuide}
                    setInvoice={setInvoice}
                    setPacking={setPacking}
                />
            </div>
            {/** footer de la pagina */}
            <Footer />
            {/* modal suscipcion email */}
            <SubscriptionModal title="Suscríbete a Arkabia" 
                subTitle="Suscríbete y se el primero en recibir las ultimas noticias de Arkabia" 
                show={showModal} 
                setShow={setShowModal} 
            />
        </div>
    )
}