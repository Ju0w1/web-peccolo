import styled from "styled-components";

export const AboutContainer = styled.div `
    color: var(--text-primary);
    background: transparent;
    @media screen and (max-width: 768px){
        padding: 80px 0 400px 0 ;
    }

    @media screen and (max-width: 480px){
        padding: 40px 0 100px 0 ;
    }
`

export const AboutWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const AboutRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `
'col2 col1'
` : `
'col1 col2'
`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `
'col1'
'col2'
` : `
'col1 col1'
'col2 col2'
`)};
    }
`

export const Column1 = styled.div `
    margin-bottom: 15px;
    padding: 0 25px;
    grid-area: col1;

    @media screen and (max-width: 480px) {
        margin-bottom: 0px;
    }
`

export const Column2 = styled.div `
    margin-bottom: 0px;
    margin-left: 20px;
    padding: 0 25px;
    grid-area: col2;

    @media screen and (max-width: 480px) {
        margin-bottom: 0px;
    }
`

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Title1 = styled.h1 `
    margin-bottom: 24px;
    font-size: 100px;
    line-height: 0.5;
    font-weight: 600;
    color: var(--text-primary);

    @media screen and (max-width: 480px){
        font-size: 40px;
    }
`
export const Title2 = styled.h1 `
    margin-bottom: 24px;
    font-size: 61px;
    line-height: 0.5;
    font-weight: 600;
    color: var(--text-primary);

    @media screen and (max-width: 480px){
        font-size: 40px;
    }
`

export const Paragraph1 = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 24px;
    font-weight: normal;
    line-height: 30px;
    color: var(--text-primary);
`

export const SeparationLine = styled.div `
    border-left: 6px solid var(--text-primary);
    height: 400px;
    position:absolute;
    left: 50%;
   

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Img = styled.img `
    width: 100%;
    display: block;
    /* margin: 0 0 10px 0;
    padding-right: 0; */
`

export const ImageStack = styled.div `
    display: grid;
    position: relative; 
    grid-template-columns: repeat(12, 1fr);
`

export const ImageStackItemBottom = styled.div `
    grid-column: 4 / -1;
    grid-row: 1;
`

export const ImageStackItemTop = styled.div `
    grid-row: 1;
    grid-column: 1 / span 8;
    padding-top: 20%;
    z-index: 1;
`