import styled from "styled-components";


export const WorksContainer = styled.div `
    color: var(--text-primary);
    background: transparent;
    margin-top: 15vh;
`
export const WorksWrapper = styled.div `
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
`
export const TitleContainer = styled.div `
    text-align: center;
    width: 100%;
`

export const Title = styled.h1 `
    margin-bottom: 28px;
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

export const MobileWrapper = styled.div `
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: center;
    row-gap: 20px;
    column-gap: 40px;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px){
        grid-template-columns: 100%;
    }
`