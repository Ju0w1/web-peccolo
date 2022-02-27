import styled from "styled-components";

export const FooterContainer = styled.div `
    height: 150px;
    width: 100%;
    margin-top: 22vh;
    background: var(--cards-icon-bg);
    justify-content: center;
`

export const FooterWrapper = styled.div `
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CopyrightText = styled.p `
    color: var(--text-primary);
    font-size: 14px;
    text-align: center;
`

export const IconsWrapper = styled.div `
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`