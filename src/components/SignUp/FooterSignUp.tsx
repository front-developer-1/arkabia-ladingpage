import Reat from 'react';

import './FooterSignUp.css';

interface FooterSignUpProps {

}

export const FooterSignUp: React.FC<FooterSignUpProps> = ({}) => {
    return (
        <div className='footerSignUp-container'>
            <div className="paragraph">Al unirse, aceptas los <span style={{color:'var(--blue-2)'}}>términos y condiciones</span> de Arkabia.</div>
            <hr className="footerSignUp-divider" />
            <div className="small-bold footerSignUp-colorText">¿Ya eres miembro? <span style={{color: 'var(--blue-2)'}}>Ingresa aquí</span> </div>
            <div className="small-bold footerSignUp-colorText">¿Eres agencia de aduana? <span style={{color: 'var(--blue-2)'}}>Regístrate aquí</span></div>
        </div>
    )
}