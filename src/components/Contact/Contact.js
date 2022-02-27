import React from 'react'
import ContactFormComponent from '../ContactForm/ContactForm'
import { ContactContainer, ContactWrapper, ContactRowTitle, Title } from './ContactElements'

const Contact = () => {
    return (
        <>
            <ContactContainer id='contact'>
                <ContactWrapper>
                    <ContactRowTitle>
                        <Title>CONTACTO</Title>
                    </ContactRowTitle>
                    <ContactFormComponent />
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default Contact