import React, { useRef, useState } from 'react';
import { ContactForm, Column1, Column2, Input, Message, SendBtn, Result } from './ContactFormElements'
import emailjs, { init } from '@emailjs/browser'

init("-7h7xxt5y6BKTXsh8");

const ContactFormComponent = () => {
    const [result, showResult] = useState(false)
    const [resultMessage, setMessage] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mbbcpe5', 'template_ea28k7t', form.current, '-7h7xxt5y6BKTXsh8')
            .then((result) => {
                setMessage('Mensaje enviado correctamente, nos pondremos en contacto a la brevedad.')
                console.log(result.text);
            }, (error) => {
                setMessage('Occurrió un error al enviar el mail, intente más tarde.')
                console.log(error.text);
            });
        e.target.reset()
        showResult(true);
    };


    return (
        <>
            <ContactForm ref={form} onSubmit={sendEmail}>
                <Column1>
                    <Input name='fullName' type='text' placeholder='Nombre' required></Input>
                    <Input name='email' type='email' placeholder='Email' required></Input>
                    <Input name='phone' type='tel' placeholder='Celular' required></Input>
                </Column1>
                <Column2>
                    <Message name='message' placeholder='Mensaje' required />
                </Column2>
                <SendBtn type="submit" value='Enviar'></SendBtn>
            </ContactForm>
            {
                result ? <Result>{resultMessage}</Result> : null
            }
        </>
    )
}

export default ContactFormComponent