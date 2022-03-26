import { Company } from "../interfaces/Company";
import { Order } from "../interfaces/Order";
import { ReviewData } from "../interfaces/Review";
import { User } from "../interfaces/User";

export const peruFlag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/255px-Flag_of_Peru.svg.png";

export const COUNTRIES = ["China", "Estados Unidos", "Rusia", "España"];

export const companyImgUrl =
  "https://grupoaduan.com/wp-content/uploads/2018/12/logonuevo.png";

export const bgImgUrl =
  "https://www.gannett-cdn.com/presto/2020/06/11/PDTF/c6ba22c1-213b-4054-b27e-a56ca3987d9d-AP_Fedex_Drug_Trafficking_F.jpg";

export const DCAP: Company = {
  name: "DeChinaAPeru",
  serviceType: "Broker de importciones",
  imageUrl: companyImgUrl,
  bgImgUrl: bgImgUrl,
  successfulOperations: 143,
  whyWorkWithUs:
    "Nuestro equipo está conformado por  profesionales competentes quienes posee una amplia experiencia, empatía y pasión por su trabajo. ",
  rating: 4.47,
  nComments: 13,
  country: "PE",
  city: "Lima",
  flag: peruFlag,
};

export const COUNTRYFLAG =
  "https://upload.wikimedia.org/wikipedia/commons/2/2d/Flag_of_Peru.png";

const USERIMGURL =
  "https://www.looper.com/img/gallery/see-robert-pattinson-as-bruce-wayne-on-the-set-of-the-batman/l-intro-1602527667.jpg";

export const REVIEWDATA: ReviewData = {
  userImgUrl: USERIMGURL,
  username: "Eloy Duran",
  rating: 4.7,
  review: "Me parecieron una agencia excelente, resolvieron todas mis dudas.",
  likes: 3,
};

export const ORDERDATA: Order = {
  id: 1,
  company: 'Agenciamiento de aduana',
  companyService: "Agenciamiento de aduana",
  rating: 4.5,
  nComments: 15,
  country: "PE",
  city: "Lima",
  flagImg: COUNTRYFLAG,
  orderTitle: "Más de 10,000 clientes satisfechos con nuestro agenciamiento.",
  about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

¿Por qué nosotros?

- Ut enim ad minim veniam.
- Quis nostrud exercitation ullamco laboris.
- Nisi ut aliquip ex ea commodo consequat. 
- Duis aute irure dolor in reprehenderit in voluptate.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
  imagesArr: [
    "https://lh5.googleusercontent.com/n3CFCkXPkWwpjSKg4GJdEqtp_VSRBrJ_aECEV7nP9N35kHI35kRTDFh3dbNgW4o4b_KyXCBL",
    "https://i.ytimg.com/vi/Ja1FVelc_-k/maxresdefault.jpg",
    "https://blog.grupoenroke.com/hubfs/fedex-crm.jpg",
  ],
};

export const USERDATA: User = {
  id: 1,
  username: "Ernesto",
  email: "ernesto@gmail.com",
  userImgUrl: USERIMGURL,
  password: "password",
};

const TEAMS = [
  { id: 1, teamName: "Grupo Aduan Agencia Aduan" }
];

export const OPERATIONDATA = {
  order: "Carros de juguete para navidad",
  operationType: "importacion" as any,
  teams: TEAMS,
};

export const UDTR: any = {
  title: "Titulo",
  subtitle: "Texto aqui",
  rowsData: [
    {
      title: "Input 1",
      columValues: [],
      color: "white-90",
    },
    {
      title: "Input",
      columValues: ["^"],
      color: "white-50",
    },
    {
      title: "Input 5",
      columValues: ["text"],
      color: "transparent",
    },
    {
      title: "Input",
      columValues: ["21050"],
      color: "white-25",
    },
    {
      title: "Input",
      columValues: ["text"],
      color: "transparent",
    },
    {
      title: "Input",
      columValues: ["text"],
      color: "black-50",
    },
  ],
};
