import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"


const socialNetworks = [

    {
        id: 1,
        icon: < FaInstagram fontSize='24px' />,
        url: 'https://www.instagram.com/peccolosyh/',
    },
    {
        id: 2,
        icon: < FaFacebook fontSize='24px' />,
        url: 'https://www.facebook.com/PeccoloSyH/'
    },
    {
        id: 3,
        icon: < FaWhatsapp fontSize='24px' />,
        url: 'https://api.whatsapp.com/send?phone=59897335248'
    },
    {
        id: 4,
        icon: < FaWhatsapp fontSize='24px' />,
        url: 'https://api.whatsapp.com/send?phone=59899562059'
    },
]

export const footer = {
    id: 'footer',
    icons: socialNetworks,
}