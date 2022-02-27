import styled from 'styled-components'

export const Card = styled.div `
    width: 100%;
    position: relative;
`

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 21px;
`

export const TextContainer = styled.div `
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    width: 100%;
    bottom: 0px;
    left: 0px;
    padding: 12px 25px;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    align-items: center;
`

export const Text = styled.p `
    margin-left: 10px;
    font-size: 22px;
`