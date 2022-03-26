import { ChargePhasesType } from "../@types/chargePhasesType";

/* import icons */
import { SeachWhite } from "../icons/solid/Search_white";
import { SeachBlack } from "../icons/solid/Search_black";
import { FactoryWhite } from "../icons/solid/Factory_white";
import { FactoryBlack } from "../icons/solid/Factory_black";
import { WarehouseWhite } from "../icons/solid/Warehouse_white";
import { WarehouseBlack } from "../icons/solid/Warehouse_black";
import { BoatWhite } from "../icons/solid/Boat_white";
import { BoatBlack } from "../icons/solid/Boat_black";
import { PortWhite } from "../icons/solid/Port_white";
import { PortBlack } from "../icons/solid/Port_black";
import { AduanaWhite } from "../icons/solid/Aduana_white";
import { AduanaBlack } from "../icons/solid/Aduana_black";
import { DestWhite } from "../icons/solid/Dest_white";
import { DestBlack } from "../icons/solid/Dest_black";
import { FlagWhite } from "../icons/solid/Flag_white";
import { FlagBlack } from "../icons/solid/Flag_black";

export const SelectChargePhase = (option: ChargePhasesType) => {
    switch (option) {
        case 'Investigación':
            return [SeachWhite,SeachBlack];
        case 'Fábrica':
            return [FactoryWhite, FactoryBlack];
        case 'Almacén de origen':
            return [WarehouseWhite, WarehouseBlack];
        case 'En tránsito':
            return [BoatWhite, BoatBlack];
        case 'Puerto/Aereopueto':
            return [PortWhite, PortBlack];
        case 'Aduana':
            return [AduanaWhite, AduanaBlack];
        case 'Almacén de destino':
            return [DestWhite, DestBlack];
        case 'Carga Entregada':
            return [FlagWhite, FlagBlack];
    }
}