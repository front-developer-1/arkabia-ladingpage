import { ServiceOptios } from "../@types/serviceTypes";

import { CustomsAgency } from "../icons/outline/CustomsAgency";
import { SearchProvider } from "../icons/outline/SearchProvider";
import { Documents } from "../icons/outline/Documents";
import { Inspection } from "../icons/outline/Inspection";
import { Law } from "../icons/outline/Law";
import { Analitycs } from "../icons/outline/Analitycs";
import { Translation } from "../icons/outline/Translation";

export const selectService = (option: ServiceOptios) => {
    switch(option) {
        case 'Agenciamiento':
            return [CustomsAgency, 'Agenciamiento de aduana']
        
        case 'Busqueda': 
            return [SearchProvider, "Búsqueda de proveedor"]

        case 'Permiso':
            return [Documents, "Permisos para restricciones"]

        case 'Inspeccion':
            return [Inspection, "Inspecciones de carga"]

        case 'Derecho':
            return [Law, "Derecho aduanero"]
        
        case 'Analisis':
            return [Analitycs, "Análisis de datos"]

        case 'Traduccion':
            return [Translation, "Traducción e interpretación"]

    }
}