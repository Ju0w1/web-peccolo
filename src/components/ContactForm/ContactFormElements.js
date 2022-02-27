import styled from 'styled-components'

export const ContactForm = styled.form `
    padding: 40px;
    background: var(--cards-icon-container);
    border-radius: 20px;
    width: 100%;
    text-align: center;
    margin: 20px auto;
    height: 100%;
`

export const Column1 = styled.div `
    height: 100%;
    float: left;
    width: 48%;
    margin-bottom: 1em;
    margin-right: 2%;
`

export const Column2 = styled.div `
    float: left;
    margin-bottom: 1em;
    width: 50%;
    height: 10rem;
`

export const Input = styled.input `
    border: 0;
    outline: 0;
    padding: 1em;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    display: block;
    width: 100%;
    margin-top: 1em;
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    resize: none;
`

export const Message = styled.textarea `
    border: 0;
    outline: 0;
    padding: 1em;
    border-radius: 8px;
    display: block;
    width: 100%;
    margin-top: 1em;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    height: 100%;
    resize: none;
`

export const SendBtn = styled.input `
    border: 0;
    outline: 0;
    padding: 1em;
    -moz-border-radius: 8px;
    -webkit-border-radius: 8px;
    border-radius: 50px;
    display: block;
    width: 100%;
    margin-top: 1em;
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    resize: none;
    color: var(--text-primary);
    background: var(--cards-icon-bg);
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border: 2px solid var(--text-primary);
`

export const Result = styled.div `
    padding: 20px;
    font-size: 20px;
    width: 100%;
    text-align: center;
`