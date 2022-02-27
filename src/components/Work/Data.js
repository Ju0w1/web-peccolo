import { FaLock, FaBolt, FaSwimmingPool, FaHotTub, FaThermometerHalf, FaTemperatureHigh, FaSeedling, FaTools } from 'react-icons/fa'


const cards = [{
        id: 1,
        title: 'Seguridad',
        image: require('../../assets/Works/security.jpg'),
        icon: < FaLock / > ,
    },
    {
        id: 2,
        title: 'Automatizaciones',
        image: require('../../assets/Works/automation.jpg'),
        icon: < FaBolt / > ,
    },
    {
        id: 3,
        title: 'Piscinas',
        image: require('../../assets/Works/pools.jpg'),
        icon: < FaSwimmingPool / > ,
    },
    {
        id: 4,
        title: 'Agua caliente',
        image: require('../../assets/Works/hot-water.jpg'),
        icon: < FaHotTub / > ,
    },
    {
        id: 5,
        title: 'Aislación',
        image: require('../../assets/Works/isolation.jpg'),
        icon: < FaThermometerHalf / > ,
    },
    {
        id: 6,
        title: 'Estufas',
        image: require('../../assets/Works/heating.jpg'),
        icon: < FaTemperatureHigh / > ,
    },
    {
        id: 7,
        title: 'Secado de semillas',
        image: require('../../assets/Works/seed-dryer.jpg'),
        icon: < FaSeedling / > ,
    },
    {
        id: 8,
        title: 'Herrería',
        image: require('../../assets/Works/smithy.jpg'),
        icon: < FaTools / > ,
    },

]

export const works = {
    id: 'work',
    cards: cards,
}