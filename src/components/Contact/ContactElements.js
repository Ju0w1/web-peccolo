import styled from "styled-components";

export const ContactContainer = styled.div `
    color: var(--text-primary);
    background: transparent;
    margin-top: 15vh;
`

export const ContactWrapper = styled.div `
    
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
`

export const ContactRowTitle = styled.div `
    text-align: center;
    width: 100%;
`

export const Title = styled.h1 `
    margin-bottom: 24px;
    font-size: 100px;
    line-height: 0.5;
    font-weight: 600;
    color: var(--text-primary);

    @media screen and (max-width: 630px){
        font-size: 65px;
    }
    @media screen and (max-width: 480px){
        font-size: 45px;
    }
`