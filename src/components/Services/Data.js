import { FaLightbulb, FaWater, FaEyeDropper, FaVial, FaSwimmingPool, FaHotTub, FaPumpSoap, FaFire, FaDoorClosed, FaBorderStyle } from 'react-icons/fa'


const cards = [{
        id: 1,
        title: 'Automatizaciones',
        paragraph: 'Realizamos automatizaciones de todo tipo de equipamiento.',
        icon: < FaLightbulb / > ,
    },
    {
        id: 2,
        title: 'Agua del campo',
        paragraph: 'Trabajamos con todo tipo de cañería para el campo, bebederos, riegos, etc.',
        icon: < FaWater / > ,
    },
    {
        id: 3,
        title: 'Riegos',
        paragraph: 'Planificamos y colocamos riegos distribuídos por mapeo satelital. Riegos por asperción, goteo, etc.',
        icon: < FaEyeDropper / > ,
    },
    {
        id: 4,
        title: 'Ablandadores',
        paragraph: 'Realizamos la colocación y mantenimiento de ablandadores de agua por resina catiónica para reducir la dureza de la misma.',
        icon: < FaVial / > ,
    },
    {
        id: 5,
        title: 'Purificadores',
        paragraph: 'Realizamos la colocación y mantenimiento de purificadores de agua, eliminando virus y bacterias, cloro residual y minerales como el arsénico.',
        icon: < FaVial / > ,
    },
    {
        id: 6,
        title: 'Piscinas',
        paragraph: 'Realizamos colocación y mantenimiento de piscinas con materiales de la mejor calidad.',
        icon: < FaSwimmingPool / > ,
    },
    {
        id: 7,
        title: 'Calefones',
        paragraph: 'Realizamos colocación y reparación de calefones.',
        icon: < FaHotTub / > ,
    },
    {
        id: 8,
        title: 'Bombas',
        paragraph: 'Realizamos colocación, reparación y mantenimiento de bombas.',
        icon: < FaPumpSoap / > ,
    },
    {
        id: 9,
        title: 'Parrilleros',
        paragraph: 'Elaboramos todo tipo de parrilleros, medio tanque, tradicionales, discos y de su preferencia.',
        icon: < FaFire / > ,
    },
    {
        id: 10,
        title: 'Soldaduras',
        paragraph: 'Realizamos todo tipo de estructura en hierro con la mejor calidad de soldaduras.',
        icon: < FaBorderStyle / > ,
    },
    {
        id: 11,
        title: 'Portones',
        paragraph: 'Elaboramos, mantenemos y colocamos portones en hierro con la posibilidad de instalación de motores eléctricos.',
        icon: < FaDoorClosed / > ,
    }
]

export const services = {
    id: 'services',
    cards: cards,
}