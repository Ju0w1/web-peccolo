import styled from "styled-components";

export const ServiceContainer = styled.div `
    color: var(--text-primary);
    background: transparent;
    margin-top: 20px;
`

export const ServiceWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const ServiceRowTitle = styled.div `
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

export const CardsRow = styled.div `
    display: flex;
    flex-direction: row;
    -webkit-flex-flow: row wrap;
`

export const Card = styled.div `

    background: var(--cards-icon-container);
    -webkit-box-flex: 300px;
    -ms-flex: 300px;
    flex: 300px;
    margin: 20px;
    border-radius: 20px;
    border: 2px solid #c3c6ce;
    /* cursor: pointer; */
    position: relative;
    transition: transform 0.5s ease;

    @media screen and (min-width: 768px) {
        &:hover{
            transform: scale(1.08);
        }
    }

    &:hover{
        box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
        border-color: #008bf8;
        
    }
`

export const CardHover = styled.div `
    padding: 50px 0;
    text-align: center;
    opacity: 0.6;
    transition: 0.25s ease;
    align-content: center;
    opacity: 1;
    
    
`

export const TitleCard = styled.h3 `
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    margin-top: 10px;
`

export const TextCard = styled.p `
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
`

export const IconContainer = styled.div `
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    /* display: flex; */
    width: 80%;
    height: auto;
    background: var( --secondary-color);
    border-radius: 16px;
    padding: 30px 0;
    
`

export const IconBg = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 100px;
    background: var(--cards-icon-bg);
    text-align: center;
    font-size: 35px;
    color: var(--text-primary);
    
`