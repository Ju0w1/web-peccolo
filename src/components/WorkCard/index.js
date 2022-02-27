import React from 'react'
import { Card, Image, TextContainer, Text } from './WorkCardElements'

const WorkCard = ({ src, alt, icon }) => {
    return (
        <Card>
            <Image src={src} alt={alt} />
            <TextContainer>
                {icon}
                <Text>{alt}</Text>
            </TextContainer>
        </Card>
    )
}

export default WorkCard