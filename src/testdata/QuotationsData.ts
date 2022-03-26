export const QuotationsData: any = {
    id: 1,
    companyName: "Grupo Aduan Agencia de aduana",
    companyLogo: ['/image 110.png', '/image 112.png', '/image 115.png' ],
    originService: {
        items: [
            {
                name: 'Transporte internacional', 
                value: [4860, 8860, 7860]
            },
            {
                name: 'Seguro', 
                value: [0,0,0]
            },
            {
                name: 'Gastos de origen', 
                value: [0,0,0]
            }   
        ],
        subtotal: [4860.00, 8860, 7860]
    },
    destinationService: {
        items: [
            {
                name: 'Almacenaje',
                value: [450.00, 450.00, 450.00]
            },
            {
                name: 'Gastos operativos',
                value: [30.00, 30.00, 30.00]
            },
            {
                name: 'Transporte local',
                value: [228.00, 228.00, 228.00]
            },
            {
                name: 'Devolución de contenedor',
                value: [168.00, 168.00, 168.00]
            },
            {
                name: 'Comisión por agenciamiento de aduana',
                value: [182.28, 182.28, 182.28]
            },
            {
                name: 'IGV (18%)',
                value: [224.51, 224.51, 224.51]
            }
        ],
        subtotal: [754.00, 754.00, 754.00]
    },
    grossTotal: [8331.79, 9331.79, 10331.79],
    tax: {
        items: [
            {
                name: 'Ad Volumen',
                value: ['-', '-', '-']
            },
            {
                name: 'IGV (16%)',
                value: [9759.00, 9759.00, 9759.00]
            },
            {
                name: 'IPM (2%)',
                value: [1220.00, 1220.00, 1220.00]
            },
            {
                name: 'Percepción (3.5%)',
                value: [2519.00, 2519.00, 2519]
            }
        ],
        total: ['$ 13498.00', '$ 13498.00', '$ 13498.00']
    },
    restriction: {
        items: [
            {
                name: 'Carro a control remoto',
                value: ['Si requiere', 'Si requiere', 'Si requiere']
            }
        ],
    },
    qualification: [4.7, 4.6, 4.4],
    details: [
        {
            name: "Tiempo de tránsito",
            value: ['32 días', '30 días', '32 días']
        },
        {
            name: "Días libres de almacenamiento",
            value: ['15 días', '15 días', '15 días']
        },
        {
            name: "Vencimiento de cotización",
            value: ['30/03/2021', '30/03/2021', '30/03/2021']
        }
    ],
    messageNum: [4, 6, 1]
}