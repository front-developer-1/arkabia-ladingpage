import { ServiceChargeStatus } from "../@types/serviceChargeStatus";

/* import icons */
import { SeachBlack } from "../icons/solid/Search_black";
import { FactoryBlack } from "../icons/solid/Factory_black";
import { BoatBlack } from "../icons/solid/Boat_black";
import { PortBlack } from "../icons/solid/Port_black";
import { AduanaBlack } from "../icons/solid/Aduana_black";
import { FlagBlack } from "../icons/solid/Flag_black";

export const SelectChargeStatus = (option: ServiceChargeStatus) => {
    switch (option) {
        case 'Investigacion':
            return [SeachBlack, "Investigación"];
        case 'Fabrica':
            return [FactoryBlack, "Fábrica"];
        case 'Aduana':
            return [AduanaBlack, "Aduana"];
        case 'Puerto Origen':
                return [PortBlack, "Puerto de origen"];
        case 'Puerto Destino':
            return [PortBlack, "Puerto de destino"];
        case 'Transito':
            return [BoatBlack, "Tránsito"];
        case 'Destino':
            return [FlagBlack, "Destino"];
    }
}