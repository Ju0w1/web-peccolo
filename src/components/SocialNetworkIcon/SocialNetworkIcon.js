import React from 'react'
import { Icon, IconContainer } from './SocialNetworkIconElements'

const SocialNetworkIcon = (props) => {
    return (
        <>
            <IconContainer>
                <Icon target='_blank' href={props.url}>
                    {props.icon}
                </Icon>
            </IconContainer>
        </>
    )
}

export default SocialNetworkIcon