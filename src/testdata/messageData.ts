import { Message } from "../interfaces/Message"

export const messageData: Message[] = [
    {
        from: 'Me',
        content: 'Genial ahorita lo reviso',
        type: 'text',
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    },
    {
        from: 'Jean Moya',
        content: 'Ernesto en verdad te dimos los mejores precios! Estamos atentos a tus comentarios',
        type: 'text',
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    },
    {
        from: 'Me',
        content: `Haz completado “Cotización”`,
        type: 'link',
        attached: {
            phase: 'Paso 1',
            text: `Ver “Cotización”`,
            link: 'https://google.com'
        },
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    },
    {
        from: 'Me',
        content: `Jean, el precio me pareció bueno, ya lo pagué `,
        type: 'text',
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    },
    {
        from: 'Me',
        content: `Ahora si bienvenidos al equipo`,
        type: 'text',
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    },
    {
        from: '',
        content: 'Víctor A. Mendoza ha mencionado que es tu turno.',
        type: 'alert',
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    }    ,
    {
        from: 'Jean Moya',
        content: 'Ernesto porfavor completa el paso 2 del consignatario',
        type: 'text',
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    },
    {
        from: 'Jean Moya',
        content: 'en un rato subimos las info del agente de carga para que se lo puedas dar a tu proveedor',
        type: 'text',
        sendDate: new Date('2021-01-09'),
        sendhour: '11:00'
    }
]