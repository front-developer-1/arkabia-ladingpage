export const QuotationData: any = [{
    id: 1,
    name: "Grupo Aduan Agencia de aduana",
    qualification: 4.7,
    quotationStatus: 1,
    price: 0
}];


export const QuotationCompany = {
    id: 1,
    import: {
        name: 'Servicios de origen (China)',
        items: [{
            name: 'Transporte internacional',
            value:[ 4860.00]
        },
        {
            name: 'Seguro',
            value: ['-']
        },
        {
            name: 'Gastos de origen',
            value: ['-']
        }],
        subtotal: [4860.00]
    },
    destiny: {
        name: 'Servicios destion (Perú)',
        items: [{
            name: 'Almacenaje',
            value:[ 450.00]
        },
        {
            name: 'Gastos operativos',
            value: [30.00]
        },
        {
            name: 'Transporte local',
            value: [228.00]
        },
        {
            name: 'Devolución del contenedor',
            value: [168.00]
        },
        {
            name: 'Comisión por agenciamiento de aduna',
            value: [182.28]
        },
        {
            name: 'IGV (18%)',
            value: [224.51]
        }],
        subtotal: [754.00]
    },
    total: [8331.79],
    tax: {
        items: [{
            name: 'Ad Valorem',
            value: ['-']
        },
        {
            name: 'IGV (18%)',
                value: [9759.00]
        },
        {
            name: 'IPM (2%)',
                value: [1220.00]
        },
        {
            name: 'Percepción (3.5%)',
                value: [2519.00]
        }],
        total: [13498.00]
    },
    rating: [4.7],
    importExpenses: {
        name: 'importExpenses',
        items: [{
            name: 'Tiempo de tránsito',
            value: ['32 días']
        },
        {
            name: 'Días libres de almacenamiento',
            value: ['15 días']
        },
        {
            name: 'Vencimiento de cotización',
            value: ['30/03/2021']
        }]
    },
    restrictions: {
        name: 'Restricciones',
        items:[{
            name: 'Item 01',
            value:[]
        },
        {
            name: 'Producto',
            value:['Carro a control remoto']
        },
        {
            name: 'Estado',
            value:['Nuevo']
        },
        {
            name: 'Descripciones mínimas',
            value:['Marca ToyRUS, modelo X100-F, funciona a pilas']
        }]
    }
}