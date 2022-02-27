import React from 'react'
import SocialNetworkIcon from '../SocialNetworkIcon/SocialNetworkIcon'
import { CopyrightText, FooterContainer, FooterWrapper, IconsWrapper } from './FooterElements'


const Footer = (data) => {
    return (
        <>
            <FooterContainer id={data.id}>
                <FooterWrapper>
                    <CopyrightText>
                        Copyright © Peccolo 2022
                    </CopyrightText>
                    <IconsWrapper>
                        {
                            data.icons.map(icon => (
                                <>
                                    <SocialNetworkIcon {...icon} key={icon.id} />
                                </>
                            ))
                        }
                    </IconsWrapper>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer